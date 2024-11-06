<template>
  <div class="sku-container">
    <div v-if="!disabled" class="sku-check">
      <div v-if="theme == 1" class="theme-1">
        <el-card v-for="(item, index) in myAttribute" :key="index" class="item" shadow="never">
          <template #header>{{ item.name }}</template>
          <el-checkbox v-for="(item2, index2) in item.item" :key="index2" v-model="item2.checked" :label="item2.name" />
          <el-input v-if="item.canAddAttribute" v-model="item.addAttribute" placeholder="新增一个规格" class="add-attr"
            @keyup.enter.native="onAddAttribute(index)">
            <template #append>
              <el-button icon="Plus" @click="onAddAttribute(index)">添加</el-button>
            </template>
          </el-input>
        </el-card>
      </div>
      <el-table v-else :data="myAttribute" :show-header="false" class="theme-2">
        <el-table-column prop="name" width="120" :resizable="false" />
        <el-table-column>
          <template #default="scope">
            <el-checkbox v-for="(item2, index2) in scope.row.item" :key="index2" v-model="item2.checked"
              :label="item2.name" />
          </template>
        </el-table-column>
        <el-table-column width="250">
          <template #default="scope">
            <el-input v-model="scope.row.addAttribute" placeholder="新增一个规格" class="add-attr"
              @keyup.enter.native="onAddAttribute(scope.$index)">
              <template #append>
                <el-button icon="Plus" @click="onAddAttribute(scope.$index)">添加</el-button>
              </template>
            </el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="sku-list">
      <el-form ref="formRef" :model="form" status-icon inline-message>
        <el-table :data="form.skuData" stripe border highlight-current-row>
          <!-- 考虑到异步加载的情况，如果 attribute 数据先加载完成，则表头会立马展示，效果不理想，故使用emitAttribute 数据，该数据为计算属性，通过 myAttribute 生成，结构与 attribute 一致 -->
          <el-table-column v-if="emitAttribute.length > 0" type="index" width="50" align="center" :resizable="false" />
          <el-table-column v-for="(attr, index) in emitAttribute" :key="`attribute-${index}`" :label="attr.name"
            :prop="attr.name" width="120" align="center" :resizable="false" sortable />
          <el-table-column v-for="(item, index) in structure" :key="`structure-${index}`" :label="item.label"
            :prop="item.name" align="center" :resizable="false" min-width="120px">
            <!-- 自定义表头 -->
            <template #header="scope">
              <span :class="{ 'required_title': item.required }">
                {{ item.label }}
              </span>
              <el-tooltip v-if="item.tip" effect="dark" :content="item.tip" placement="top-start">
                <el-icon>
                  <InfoFilled />
                </el-icon>
              </el-tooltip>
            </template>
            <!-- 自定义表格内部展示 -->
            <template #default="scope" slot-scope="scope">
              <!-- 增加是 key 是为了保证异步验证不会出现 skuData 数据变化后无法验证的 bug -->
              <el-form-item v-if="item.type == 'input'" :key="`structure-input-${index}-${scope.row.sku}`"
                :prop="'skuData.' + scope.$index + '.' + item.name" :rules="rules[item.name]">
                <el-input v-model="scope.row[item.name]" :placeholder="`请输入${item.label}`" />
              </el-form-item>
              <el-form-item v-else-if="item.type == 'slot'" :key="`structure-input-${index}-${scope.row.sku}`"
                :prop="'skuData.' + scope.$index + '.' + item.name" :rules="rules[item.name]">
                <slot :name="item.name" :$index="scope.$index" :row="scope.row" :column="scope.column" />
              </el-form-item>
            </template>
          </el-table-column>
          <!-- 批量设置，当 sku 数超过 2 个时出现 -->
          <template v-if="isBatch && form.skuData.length > 2" #append>
            <el-table :data="[{}]" :show-header="false">
              <el-table-column :width="attribute.length * 120 + 50" align="center"
                :resizable="false">批量设置</el-table-column>
              <el-table-column v-for="(item, index) in structure" :key="`batch-structure-${index}`" align="center"
                :resizable="false" min-width="120px">
                <el-input v-if="item.type == 'input' && item.batch != false" v-model="batch[item.name]"
                  :placeholder="`填写一个${item.label}`" @keyup.enter.native="onBatchSet(item.name)" />
              </el-table-column>
            </el-table>
          </template>
        </el-table>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,watch,computed,reactive,onMounted ,nextTick} from 'vue'
import { ElMessage } from 'element-plus'
/**
   * 已使用的规格数据，用于复原数据
   * attribute: [
   *   { name: '颜色', item: ['黑'] },
   *   { name: '运营商', item: ['电信', '移动', '联通'] }
   * ]
   */

const attribute = defineModel('attribute', { type: Array, default: () => [] })
/**
   * 用于复原sku数据
   * sku: [
   *   { sku: '黑;电信', price: 1, stock: 1 },
   *   { sku: '黑;移动', price: 2, stock: 2 },
   *   { sku: '黑;联通', price: 3, stock: 3 }
   * ]
   */
const sku = defineModel('sku', { type: Array, default: () => [] })
const props = defineProps({
  /**
   * 原始规格数据
   * sourceAttribute: [
   *   { name: '颜色', item: ['黑', '金', '白'] },
   *   { name: '内存', item: ['16G', '32G'] },
   *   { name: '运营商', item: ['电信', '移动', '联通'] }
   * ]
   */
  sourceAttribute: {
    type: Array,
    default: () => []
  },
  /**
   * 表格结构，注意name字段，用于输出sku数据
   */
  structure: {
    type: Array,
    default: () => [
      { name: 'price', type: 'input', label: '价格' },
      { name: 'stock', type: 'input', label: '库存' }
    ]
  },
  // sku 字段分隔符
  separator: {
    type: String,
    default: ';'
  },
  // 无规格的 sku
  emptySku: {
    type: String,
    default: ''
  },
  // 是否显示 sku 选择栏
  disabled: {
    type: Boolean,
    default: false
  },
  // 主题风格
  theme: {
    type: Number,
    default: 1
  },
  // 是否开启异步加载
  async: {
    type: Boolean,
    default: false
  }
})

interface MyAttribute {
  addAttribute?: string; //添加属性名称
  name: string;//属性名称
  item: {name:string;checked:boolean}[];//属性可选项
  canAddAttribute: boolean;//是否允许添加属性
}

interface SourceAttribute {
  name: string;//属性名称
  item: {name:string}[];//属性可选项
  canAddAttribute: boolean;//是否允许添加属性
}

interface Structure {
  name: string; //SKU数据里的属性
  type: string; // 表单展示形式，默认为输入框，当设置为 slot 时，为自定义插槽
  skuProperty: boolean; //当 type 设置为 slot 时，可选择是否插槽数据是否记录到 sku 数据里
  defaultValue: any; //默认值
  label: string;//表头名称
  tip: string;//鼠标悬停提示
  batch: string;//是否开启批量设置
  required: boolean;//是否必填
  validate: Function;//自定义校验回调方法
}
interface Attribute {
  name: string; //属性名称
  item: string[];//属性已选项	
}

// 是否初始化
const isInit = ref(false)
const myAttribute = ref<MyAttribute[]>([])
const form = reactive({
  skuData: [],
})
const formRef = ref()
const batch = ref<any>({})


const rules = computed(() => {
  // 重新生成验证规则
  let rules: any = {}
  props.structure.forEach((v: any) => {
    if (v.type == 'input') {
      rules[v.name] = []
      if (v.required) {
        rules[v.name].push({ required: true, message: `${v.label}不能为空`, trigger: 'blur' })
      }
      if (v.validate) {
        rules[v.name].push({ validator: customizeValidate, trigger: 'blur' })
      }
    } else if (v.type == 'slot') {
      rules[v.name] = []
      if (v.required) {
        rules[v.name].push({ required: true, message: `${v.label}不能为空`, trigger: ['change', 'blur'] })
      }
      if (v.validate) {
        rules[v.name].push({ validator: customizeValidate, trigger: ['change', 'blur'] })
      }
    }
  })
  return rules
})

const isBatch = computed(() => {
  return props.structure.some((item: any) => {
    return item.type == 'input' && item.batch != false
  })
})

// 选择的属性
const emitAttribute = computed(() => {
  let attribute: any = []
  myAttribute.value.forEach(v1 => {
    const obj = {
      name: v1.name,
      item: []
    }
    v1.item.forEach(v2 => {
      if (v2.checked) {
        obj.item.push(v2.name)
      }
    })
    if (obj.item.length !== 0) {
      attribute.push(obj)
    }
  })
  return attribute
})


onMounted(() => {
  !props.async && init()
})

const emit = defineEmits(['update:attribute', 'update:sku'])

watch(() => myAttribute, () => {
  if (!isInit.value) {
    // 更新父组件
    // emit('update:attribute', emitAttribute.value)
    attribute.value = emitAttribute.value
  }
  // 解决通过 $emit 更新后无法拿到 attribute 最新数据的问题
  nextTick(() => {
    if (attribute.value.length !== 0) {
      combinationAttribute()
    } else {
      form.skuData = []
      const obj: any = {
        sku: props.emptySku
      }
      props.structure.forEach((v: any) => {
        if (!(v.type == 'slot' && v.skuProperty == false)) {
          obj[v.name] = typeof v.defaultValue != 'undefined' ? v.defaultValue : ''
        }
      })

      form.skuData.push(obj)
    }
    clearValidate()
  })
}, { deep: true, immediate: true })


watch(() => form.skuData, (newValue: any, oldValue) => {
  // console.log('newValue', newValue, 'oldValue', oldValue)
  // console.log('111',!isInit || (newValue.length == 1 && newValue[0].sku == props.emptySku))
  if (!isInit.value || (newValue.length == 1 && newValue[0].sku == props.emptySku)) {
    // 如果有老数据，或者 sku 数据为空，则更新父级 sku 数据
    if (oldValue?.length || !sku.value.length) {
      // 更新父组件
      const arr: any = []
      newValue.forEach((v1: any) => {
        const obj: any = {
          sku: v1.sku
        }
        props.structure.forEach((v2: any) => {
          if (!(v2.type == 'slot' && v2.skuProperty == false)) {
            obj[v2.name] = v1[v2.name] || (typeof v2.defaultValue != 'undefined' ? v2.defaultValue : '')
          }
        })
        arr.push(obj)
      })
      // emit('update:sku', arr)
      sku.value = arr
    }
  }
}, { deep: true, immediate: true })






// 初始化方法，如果数据是异步载入，需要在获取到数据后手动进行SKU表单的初始化
function init() {
  nextTick(() => {
    isInit.value = true
    // 初始化 myAttribute
    let myAttribute1: any = []
    // 根据 sourceAttribute 复原 myAttribute 的结构
    props.sourceAttribute.forEach((v: any) => {
      const temp = {
        name: v.name,
        canAddAttribute: typeof v.canAddAttribute != 'undefined' ? v.canAddAttribute : true,
        addAttribute: '',
        item: []
      }
      v.item.forEach((itemName: any) => {
        temp.item.push({ name: itemName, checked: false })
      })
      myAttribute1.push(temp)
    })

    // 根据 attribute 更新 myAttribute
    attribute.value.forEach((attrVal: any) => {
      myAttribute1.forEach((myAttrVal: any) => {
        if (attrVal.name === myAttrVal.name) {
          attrVal.item.forEach((attrName: any) => {
            if (
              !myAttrVal.item.some((myAttrItem: any) => {
                if (attrName === myAttrItem.name) {
                  myAttrItem.checked = true
                }
                return attrName === myAttrItem.name
              })
            ) {
              myAttrVal.item.push({
                name: attrName,
                checked: true
              })
            }
          })
        }
      })
    })


    myAttribute.value = myAttribute1

    // 通过 sku 更新 skuData，但因为 skuData 是实时监听 myAttribute 变化并自动生成，而 watch 是在 methods 后执行，所以增加 setTimeout 方法，确保 skuData 生成后在执行下面的代码
    setTimeout(() => {
      sku.value.forEach((skuItem: any) => {
        form.skuData.forEach((skuDataItem: any) => {
          if (skuItem.sku === skuDataItem.sku) {
            props.structure.forEach((structureItem: any) => {
              skuDataItem[structureItem.name] = skuItem[structureItem.name]
            })
          }
        })
      })
      isInit.value = false
    }, 0)
  })
}

// 根据 attribute 进行排列组合，生成 skuData 数据
function combinationAttribute(index = 0, dataTemp = []) {
  if (index === 0) {
    for (let i = 0; i < attribute.value[0].item.length; i++) {
      const obj = {
        sku: attribute.value[0].item[i],
        [attribute.value[0].name]: attribute.value[0].item[i]
      }
      props.structure.forEach((v: any) => {
        if (!(v.type == 'slot' && v.skuProperty == false)) {
          obj[v.name] = typeof v.defaultValue != 'undefined' ? v.defaultValue : ''
        }
      })
      dataTemp.push(obj)
    }
  } else {
    const temp = []
    for (let i = 0; i < dataTemp.length; i++) {
      for (let j = 0; j < attribute.value[index].item.length; j++) {
        temp.push(JSON.parse(JSON.stringify(dataTemp[i])))
        temp[temp.length - 1][attribute.value[index].name] = attribute.value[index].item[j]
        temp[temp.length - 1]['sku'] = [temp[temp.length - 1]['sku'], attribute.value[index].item[j]].join(props.separator)
      }
    }
    dataTemp = temp as any
  }
  if (index !== attribute.value.length - 1) {
    combinationAttribute(index + 1, dataTemp)
  } else {
    if (!isInit.value || props.async) {
      // 将原有的 sku 数据和新的 sku 数据比较，相同的 sku 则把原有的 sku 数据覆盖到新的 sku 数据里
      for (let i = 0; i < form.skuData.length; i++) {
        for (let j = 0; j < dataTemp.length; j++) {
          if (form.skuData[i].sku === dataTemp[j].sku) {
            dataTemp[j] = form.skuData[i]
          }
        }
      }
    }
    form.skuData = dataTemp
  }
}

// 新增一个规格
function onAddAttribute(index: number) {
  console.log('index', index)
  myAttribute.value[index].addAttribute = myAttribute.value[index].addAttribute.trim()
  if (myAttribute.value[index].addAttribute !== '') {
    if (!myAttribute.value[index].addAttribute.includes(props.separator)) {
      const flag = myAttribute.value[index].item.some((item: any) => {
        return item.name === myAttribute.value[index].addAttribute
      })
      if (!flag) {
        myAttribute.value[index].item.push({
          name: myAttribute.value[index].addAttribute,
          checked: true
        })
        myAttribute.value[index].addAttribute = ''
      } else {
        ElMessage({
          type: 'warning',
          message: '请勿添加相同规格'
        })
      }
    } else {
      ElMessage({
        type: 'warning',
        message: `规格里不允许出现「 ${props.separator} 」字符，请检查后重新添加`
      })
    }
  }
}

function onBatchSet(type: any) {
  if (batch.value[type] != '') {
    form.skuData.forEach((v: any) => {
      v[type] = batch.value[type]
    })
    batch.value[type] = ''
    // 批量设置完成后，触发一次当前列的验证
    validateFieldByColumns([type], () => { })
  }
}

// 自定义输入框验证，通过调用 structure 里的 validate 方法实现，重点是 callback 要带过去
function customizeValidate(rule: any, value: any, callback: Function) {
  let [model, index, name] = rule.field.split('.')
  props.structure.forEach((v: any) => {
    if (v.name == name) {
      v.validate(form[model], index, callback)
    }
  })
}
//  sku 表单验证 SKU表单验证方法，参数为一个回调函数
function validate(callback: Function) {
  formRef.value?.validate((valid: any) => {
    callback(valid)
  })
}

// 指定列验证
function validateFieldByColumns(colums: any, callback: Function) {
  let validateFields: any = []
  form.skuData.forEach((_v: any, i: number) => {
    colums.forEach((v: any) => {
      validateFields.push(`skuData.${i}.${v}`)
    })
  })
  formRef.value?.validateField(validateFields,(valid: any) => {
    callback(valid)
  })
}

function validateFieldByRows(index: number, prop: any, callback: Function) {
  formRef.value?.validateField([`skuData.${index}.${prop}`], (valid: any) => {
    callback(valid)
  })
}
// SKU表单验证指定列方法，第一个参数为列名（structure 里的属性名），第二个参数为一个回调函数
function validateField() {

}
// 清除SKU表单验证结果
function clearValidate() {
  formRef.value?.clearValidate()
}


defineExpose({
  init,
  validate,
  clearValidate,
  validateFieldByColumns
})

</script>

<style scoped lang="scss">
.sku-container {
  :deep(.el-card) {
    margin: 10px 0;

    .el-card__header {
      line-height: initial;
      padding: 10px 20px;
    }

    .el-card__body {
      padding: 10px 20px 20px;
    }
  }

  .sku-check {
    .theme-1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 10px;

      .item {
        width: 32%;

        &:last-child:nth-child(3n - 1) {
          margin-right: calc(100% - 32% * 2 - 4% / 2) !important;
        }

        .add-attr {
          width: 100%;
          margin-top: 10px;
        }
      }
    }

    .theme-2 {
      border: 1px solid #ebeef5;
      border-bottom: 0;
      margin-bottom: 20px;
    }
  }

  .sku-name {
    text-align: right;
  }

  .batch-set {
    width: 100%;
    margin-top: 5px;
  }

  .sku-list {
    line-height: initial;

    :deep(.el-input__inner) {
      text-align: center;
    }

    :deep(.el-table__append-wrapper) {
      overflow: initial;

      .el-table {
        overflow: initial;

        .el-table__body-wrapper {
          overflow: initial;
        }
      }
    }

    :deep(.el-form-item) {
      margin-bottom: 0;

      .el-form-item__content {
        line-height: initial;

        .el-form-item__error {
          margin-left: 0;
        }
      }
    }

    .required_title::before {
      content: '*';
      color: #f56c6c;
    }
  }
}
</style>