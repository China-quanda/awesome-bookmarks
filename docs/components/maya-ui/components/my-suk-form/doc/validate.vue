<template>
  <div>
    <SkuForm 
      ref="skuFormRef"
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      :structure="structure"
    />
    <el-button type="primary" @click="submit" style="margin-top: 10px;">提交</el-button>
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
const attribute = ref([])
const sku = ref([])
const structure = ref([
  {
		name: 'price',
		type: 'input',
		label: '价格',
		required: true
	},
	{
		name: 'stock',
		type: 'input',
		label: '库存',
		tip: '库存数不能少于10',
		required: true,
		// data: 完整 sku 数据，index: 当前 sku 在 data 中的下标，callback: 验证结果回调函数
		validate: (data, index, callback) => {
			if (data[index].stock && parseInt(data[index].stock) < 10) {
				callback(new Error('库存不能小于10'))
			}
			callback()
		}
	}
])

function submit() {
  // 必填验证
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
</style>