<template>
  <div>
    <SkuForm 
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
    />
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
    canAddAttribute: false
  },
  {
    name: '内存',
    item: ['16G', '32G'],
    canAddAttribute: false
  }
])
const attribute = ref([])
const sku = ref([])
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