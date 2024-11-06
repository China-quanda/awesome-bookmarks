<template>
  <div>
    <SkuForm 
    :source-attribute="sourceAttribute" 
    v-model:attribute="attribute" 
    v-model:sku="sku"
    :structure="structure"
    >
    <template #price="slotProps">
			{{ slotProps.row.price }}
		</template>
    <template #totalPrice="slotProps">
      {{ totalPrice(slotProps.row) }}
    </template>
    </SkuForm>
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
    type: 'slot',
    label: '现价'
  },
  {
    name: 'stock',
    type: 'input',
    label: '库存'
  },
  {
    name: 'totalPrice',
    type: 'slot',
    // 如果该字段无需记录到 sku 数据里，则设置为 false
    skuProperty: false,
    label: '总价',
    tip: '总价 = 价格 * 库存，如果价格或库存为空时，则不计算'
  }
])

function totalPrice(data){
  let totalPrice = ''
	if (data.price && data.stock) {
		totalPrice = (parseFloat(data.price) * parseFloat(data.stock)).toFixed(2)
		totalPrice += ' 元'
	}
	return totalPrice
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