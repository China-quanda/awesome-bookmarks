---
navbar: true
sidebar: false
aside: true
footer: false
layout: doc
---

# my-suk-form

## 介绍

::: warning 使用注意
因为 my-sku-form 基于 element-plus 开发，安装使用前确保项目中已正确安装 element-plus
:::

## 快速上手

### 安装插件

```sh
# 推荐使用 yarn 进行安装
yarn add my-sku-form
# 或者使用 npm 也无伤大雅
npm install my-sku-form
```

### 全局引入插件

安装完成后，可以选择全局引入或者局部引入。全局引入需要在 main.js 中增加以下内容：

```js
import { createApp } from 'vue'
import App from './App.vue'
import SkuForm from 'my-sku-form'

const app = createApp(App)
app.use(SkuForm)
```

然后在页面中就可以使用 <SkuForm /> 组件了，就像下面这个例子一样：

```html
<template>
  <SkuForm />
</template>
```

### 局部引入插件

局部引入则在页面中手动引入：

```html
<template>
  <SkuForm />
</template>

<script setup>
import SkuForm from 'my-sku-form'
</script>
```

## 示例

### 基础功能

<basic />

::: details 查看源码

```html
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
  },
  {
    name: '内存',
    item: ['16G', '32G']
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
```

:::

### 自定义 SKU(连接符)

<separator />

::: details 查看源码

```html
<template>
  <div>
    <SkuForm 
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      separator="__"
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
  },
  {
    name: '内存',
    item: ['16G', '32G']
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
```

:::

### 禁用 SKU 可选属性配置 (配置属性无法回显)

参考 https://hurui.me/vue-sku-form/examples/disabled.html

<disabled />

::: details 查看源码

```html
<template>
  <div>
    <SkuForm 
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      disabled 
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
  },
  {
    name: '内存',
    item: ['16G', '32G']
  }
])
const attribute = ref([
  {
    name: "颜色",
    item: ["黑"],
  },
  {
    name: "内存",
    item: ["16G", "32G"],
  },
]);
const sku = ref([
  {
    sku: "黑;16G",
    price: 80,
    stock: 100,
  },
  {
    sku: "黑;32G",
    price: 80,
    stock: 100,
  },
]);
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
```
:::


### 关闭新增属性功能

<closeAddAttribute />

::: details 查看源码
```html
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
```
:::


### 主题风格

<theme />

::: details 查看源码
```html
<template>
  <div>
    <SkuForm 
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      :theme="themeType"
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
    <el-button type="primary" @click="toggleTheme">切换主题</el-button>
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
const attribute = ref([])
const sku = ref([])
const themeType = ref(1)
function toggleTheme() {
  themeType.value = themeType.value === 1 ? 2 : 1
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
```
:::

### 自定义表格

<customize />

::: details 查看源码
```html
<template>
  <div>
    <SkuForm 
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      :structure="structure"
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
const structure = ref([
  {
    name: 'original',
    type: 'input',
    label: '原价'
  },
  {
    name: 'price',
    type: 'input',
    label: '现价',
  },
  {
    name: 'stock',
    type: 'input',
    label: '库存',
  }
])
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
```
:::

### 自定义表格(插槽-文本) (配置属性无法回显)

<customizeSlot />

::: details 查看源码
```html
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
```
:::



### 自定义表格(插槽-组件)  (配置属性无法回显)

<customizeSlotComponent />

::: details 查看源码
```html
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
```
:::

### 数据还原 (配置属性无法回显)

<recovery />

::: details 查看源码
```html
<template>
  <div>
    <SkuForm 
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      :structure="structure"
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
  },
  {
    name: '内存',
    item: ['16G', '32G']
  }
])
const attribute = ref([
  {
		name: '颜色',
		item: ['黑', '金']
	},
	{
		name: '内存',
		item: ['16G']
	}
])
const sku = ref([
  {
		sku: '黑;16G',
		originalprice: 100,
		price: 80,
		stock: 100
	},
	{
		sku: '金;16G',
		originalprice: 100,
		price: 85,
		stock: 50
	}
])
const structure = ref([
  {
		name: 'originalprice',
		type: 'input',
		label: '原价'
	},
	{
		name: 'price',
		type: 'input',
		label: '现价'
	},
	{
		name: 'stock',
		type: 'input',
		label: '库存'
	}
])
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
```
:::

### 批量设置 (配置属性无法回显)

当 SKU 数据超过 2 条时，自动开启批量设置，可在 structure 里设置 batch: false 进行关闭

<batch />

::: details 查看源码
```html
<template>
  <div>
    <SkuForm 
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      :structure="structure"
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
		label: '价格'
	},
	{
		name: 'stock',
		type: 'input',
		label: '库存',
    batch: false
	}
])
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
```
:::

### 必填验证

<required />

::: details 查看源码
```html
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
		required: true
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
```
:::


### 自定义验证

<validate />

::: details 查看源码
```html
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
```
:::


### 异步验证

<asyncValidate />

::: details 查看源码
```html
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
		name: 'code',
		type: 'input',
		label: '商品唯一编码',
		tip: '模拟异步操作，如果输入123则会提示编码已存在',
		required: true,
		validate: (data, index, callback) => {
			setTimeout(() => {
				if (data[index].code == '123') {
					callback(new Error('商品唯一编码已存在'))
				}
				callback()
			}, 1000)
		}
	},
	{
		name: 'price',
		type: 'input',
		label: '价格'
	},
	{
		name: 'stock',
		type: 'input',
		label: '库存'
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
```
:::


### 指定列验证 (配置属性无法回显)

<validateCol />

::: details 查看源码
```html
<template>
  <div>
    <SkuForm 
      ref="skuFormRef"
      :source-attribute="sourceAttribute" 
      v-model:attribute="attribute" 
      v-model:sku="sku" 
      :structure="structure"
    />
    <el-button type="primary" style="margin-top: 10px;" @click="clear">清除验证结果</el-button>
		<el-button type="primary" style="margin-top: 10px;" @click="check('price')">验证价格</el-button>
		<el-button type="primary" style="margin-top: 10px;" @click="check('stock')">验证库存</el-button>
		<el-button type="primary" style="margin-top: 10px;" @click="checkAll">验证多列（价格和库存）</el-button>
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
	}
])
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
			} else {
				callback()
			}
		}
	}
])

function clear() {
  // 必填验证
  skuFormRef.value?.clearValidate()
}

function check(name) {
	skuFormRef.value?.validateFieldByColumns([name], errorMessage => {
		if (!errorMessage) {
      // 此处可以写验证失败后的业务代码
      return ElMessage.warning('验证失败')
		}
	})
}

function checkAll() {
  const names = structure.value.map(item=>item.name) // ['price', 'stock']
	skuFormRef.value?.validateFieldByColumns(names, errorMessage => {
		if (!errorMessage) {
      return ElMessage.warning('验证失败')
			// 此处可以写验证失败后的业务代码
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
```
:::

### 异步加载

<asyncRecovery />

::: details 查看源码
```html
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
```
:::

<script setup lang="ts">
import basic from './basic.vue'
import separator from './separator.vue'
import disabled from './disabled.vue'
import closeAddAttribute from './closeAddAttribute.vue'
import theme from './theme.vue'
import customize from './customize.vue'
import customizeSlot from './customizeSlot.vue'
import customizeSlotComponent from './customizeSlotComponent.vue'
import recovery from './recovery.vue'
import batch from './batch.vue'
import required from './required.vue'
import validate from './validate.vue'
import asyncValidate from './asyncValidate.vue'
import validateCol from './validateCol.vue'
import asyncRecovery from './asyncRecovery.vue'
</script>
