# article


[vitepress-markdown](https://vitepress.dev/zh/guide/markdown)
<br>
[markdown-语法](https://markdown.p2hp.com/basic-syntax/index.html)
<br>
[markdown-语法](https://zhuanlan.zhihu.com/p/668256808)
<br>
[markdown-语法](https://zhuanlan.zhihu.com/p/686465089)

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import CustomComponent from '../components/CustomComponent.vue'
const { page } = useData()

const count = ref(0)
</script>

## vue按钮自增

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment按钮</button>


## vitepress-useData-page pre
<pre>{{ page }}</pre>


# 自定义vue组件

<CustomComponent />


<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>




### 链接

[内部链接](./代码格式化)
[外部链接](https://github.com/vuejs/vitepress)


表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Emoji
:tada: :100:
[查看所有表情](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)


自定义容器
默认标题

::: info
This is an info box.
:::
::: tip
This is a tip.
:::
::: warning
This is a warning.
:::
::: danger
This is a dangerous warning.
:::
::: details
This is a details block.
:::


自定义标题
::: danger STOP
Danger zone, do not proceed
:::

::: details 查看源码
```js
123
```
:::

### TDatePicker 参数配置

### 简介：基于 Element-plus DatePicker DateTimePicker 组件的二次封装，取决于 type 值

> TDatePicker 日期组件 **代码示例：**

```html
<t-date-picker v-model="date" />
```

### Attributes 继承 DatePicker DateTimePicker 的 Attributes

| 参数            | 说明                                               | 类型                                            | 默认值 |
| :-------------- | :------------------------------------------------- | :---------------------------------------------- | :----- |
| v-model         | 绑定值                                             | [String, Date, Array]                           | -      |
| plusTime        | 日期范围是否显示 00:00:00 23:59:59 时分秒          | Boolean                                         | false  |
| type            | 时间类型（继承 element DatePicker DateTimePicker） | String                                          | date   |
| shortcuts       | 设置快捷选项，需要传入数组对象                     | Array<{ text: string, value: Date & Function }> | -      |
| isPickerOptions | 是否开启自带快捷方式                               | Boolean                                         | false  |

### type 类型

> week 周；month 月；year 年；dates 多个日期；months 多个月；years 多个年；daterange 日期范围；monthrange 月份范围;datetime 日期和时间点;datetimerange 日期和时间点范围

### events

| 事件名 | 说明                   | 返回值                                               |
| :----- | :--------------------- | :--------------------------------------------------- |
| change | 用户确认选定的值时触发 | 组件绑定值。格式与绑定值一致，可受 value-format 控制 |

### Slots

| 事件名          | 说明                 |
| :-------------- | :------------------- |
| default         | 自定义内容           |
| range-separator | 自定义范围分割符内容 |

This <span v-pre>{{ will be displayed as-is }}</span>


::: v-pre
{{ This will be displayed as-is }}`
:::

```js-vue
Hello {{ 1 + 1 }}
```