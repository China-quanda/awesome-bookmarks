<template>
  <div>
    <SkuForm
    ref="skuFormRef"
    :source-attribute="sourceAttribute" 
    v-model:attribute="attribute" 
    v-model:sku="sku"
    :structure="structure"
    >
    <template #score="slotProps">
      <div>
        <el-rate v-model="slotProps.row.score" />
      </div>
    </template>
    <template #image="slotProps">
      <div class="image-upload-container">
        <el-image v-if="slotProps.row.image" :src="slotProps.row.image" :preview-src-list="[slotProps.row.image]" fit="cover" title="点击预览" />
        <el-upload :show-file-list="false" action="http://scrm.1daas.com/api/upload/upload" :data="{token: 'TKD917339526087186'}" name="image" :before-upload="beforeUpload" :on-success="res => imageUpload(res, slotProps)" class="images-upload">
            <el-button size="small" icon="Upload">{{ slotProps.row.image ? '重新上传' : '上传图片' }}</el-button>
        </el-upload>
        <el-button v-if="slotProps.row.image" size="small" icon="Delete" @click="imageRemove(slotProps)" />
      </div>
    </template>
    </SkuForm>
    <el-button type="primary" style="margin-top: 10px;" @click="submit">提交</el-button>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-divider>attribute 数据</el-divider>
        <pre><code>{{ attribute }}</code></pre>
      </el-col>
      <el-col :span="12">
        <el-divider>sku 数据</el-divider>
        <pre><code>{{ sku }}</code></pre>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SkuForm from '../index.vue'
import { ElMessage } from 'element-plus'

const skuFormRef = ref()
const sourceAttribute = ref([
  {
    name: '颜色',
    item: ['黑', '金', '白'],
  },
  {
    name: '内存',
    item: ['16G', '32G']
  }
])
const attribute = ref([
  {
    name: '颜色',
    item: ['黑', '金', '白']
  },
  {
    name: '内存',
    item: ['16G']
  }
])
const sku = ref([
  {
    sku: '黑;16G',
    price: 85,
    stock: 100
  },
  {
    sku: '金;16G',
    price: 85,
    stock: 50
  },
  {
    sku: '白;16G',
    price: 85,
    stock: 50
  }
])
const structure = ref([
  {
      name: 'price',
      type: 'input',
      label: '现价'
  },
  {
      name: 'stock',
      type: 'input',
      label: '库存'
  },
  {
      name: 'score',
      type: 'slot',
      defaultValue: 0,
      label: '评分'
  },
  {
      name: 'image',
      type: 'slot',
      label: '图片',
      required: true
  }
])

function beforeUpload(file) {
  const ext = ['jpg', 'png', 'gif', 'bmp']
  const size = 2
  const fileName = file.name.split('.')
  const fileExt = fileName[fileName.length - 1]
  const isTypeOk = ext.indexOf(fileExt) >= 0
  const isSizeOk = file.size / 1024 / 1024 < size
  if (!isTypeOk) {
    ElMessage.error(`上传图片只支持 ${ ext.join(' / ') } 格式！`)
  }
  if (!isSizeOk) {
    ElMessage.error(`上传图片大小不能超过 ${size}MB！`)
  }
  return isTypeOk && isSizeOk
}

// 图片上传
function imageUpload(res, data) {
  // 这里会返回上传结果，提取出图片地址url
  console.log(res)
  // 模拟返回数据
  let imagePath = 'http://images.lookbi.com/uploads/apply/166/e2e1b23647d67df2655d5e6bed76670c.jpg'
  data.row.image = imagePath
  ElMessage.success('图片上传成功')
  skuFormRef.value?.validateFieldByRows(data.$index, 'image', () => {})
}
function imageRemove(data) {
  data.row.image = ''
}

function submit() {
  skuFormRef.value?.validate(valid => {
    if (valid) {
      ElMessage.success('验证通过')
    } else {
      ElMessage.warning('验证失败')
    }
  })
}
</script>

<style scoped lang="scss">
pre {
  padding: 1.25rem 1.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  line-height: 1.4;
  color: white;
  background-color: #282c34;

  code {
    font-size: 13px;
  }
}

:deep(.el-upload-dragger) {
  width: initial;
  height: initial;
  border: 0;
  border-radius: 0;
  background-color: initial;
  overflow: auto;
}

.image-upload-container {
  display: flex;
  align-items: center;
  .el-image {
    vertical-align: middle;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    overflow: hidden;
  }
  :deep(.images-upload),
  > .el-button {
    display: inline-block;
    margin: 0 5px;
    vertical-align: middle;
  }
}
</style>