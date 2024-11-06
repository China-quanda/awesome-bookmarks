<template>
  <div>
    <SkuForm 
      ref="skuFormRef"
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      :source-attribute="sourceAttribute" 
      :structure="structure"
      async
    />
    <el-button type="primary" :loading="loading" style="margin-top: 10px;" @click="load(1)">模拟加载数据1</el-button>
		<el-button type="primary" :loading="loading" style="margin-top: 10px;" @click="load(2)">模拟加载数据2</el-button>
		<el-button type="primary" :loading="loading" style="margin-top: 10px;" @click="load(3)">模拟加载数据3</el-button>
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

const skuFormRef = ref()
const loading = ref(false)
const sourceAttribute = ref([])
const structure = ref([
  {
		name: 'originalprice',
		type: 'input',
		label: '成本价'
	},
	{
		name: 'price',
		type: 'input',
		label: '销售价'
	},
	{
		name: 'stock',
		type: 'input',
		label: '库存'
	}
])
const attribute = ref([])
const sku = ref([])

function load(type){
  loading.value = true
  if (type == 1) {
		setTimeout(() => {
			sourceAttribute.value = [
				{
					name: '颜色',
					item: ['黑', '金', '白']
				},
				{
					name: '内存',
					item: ['16G', '32G']
				}
			]
			setTimeout(() => {
				attribute.value = [
					{
						name: '颜色',
						item: ['黑', '金']
					},
					{
						name: '内存',
						item: ['64G']
					}
				]
				setTimeout(() => {
					sku.value = [
						{
							sku: '黑;64G',
							originalprice: '100',
							price: '80',
							stock: '100'
						},
						{
							sku: '金;64G',
							originalprice: '100',
							price: '85',
							stock: '50'
						}
					]
					// 切记，必须在 attribute、sku 数据都加载后再执行 init() 方法
          skuFormRef.value?.init()
					loading.value = false
				}, 300)
			}, 300)
		}, 300)
	} else if (type == 2) {
		setTimeout(() => {
			sourceAttribute.value = [
				{
					name: '内存',
					item: ['16G', '32G']
				},
				{
					name: '颜色',
					item: ['黑', '金', '白']
				}
			]
			setTimeout(() => {
				attribute.value = [
					{
						name: '内存',
						item: ['64G']
					},
					{
						name: '颜色',
						item: ['红', '白']
					}
				]
				setTimeout(() => {
					sku.value = [
						{
							sku: '64G;红',
							originalprice: 10,
							price: 8,
							stock: 10
						},
						{
							sku: '64G;白',
							originalprice: 10,
							price: 8,
							stock: 5
						}
					]
					// 切记，必须在 attribute、sku 数据都加载后再执行 init() 方法
					skuFormRef.value?.init()
					loading.value = false
				}, 300)
			}, 300)
		}, 300)
	} else {
		setTimeout(() => {
			sourceAttribute.value = [
				{
					name: '颜色',
					item: ['黑', '金', '白']
				}
			]
			attribute.value = []
			sku.value = []
			skuFormRef.value?.init()
			loading.value = false
		}, 300)
	}
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