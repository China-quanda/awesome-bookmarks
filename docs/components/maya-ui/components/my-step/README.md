## my-step

## 介绍

用于展示一系列步骤的执行进度

## 展示

<MyStep :stepArr="stepArr" />

<script setup>
import MyStep from './index.vue'
import { ref } from 'vue';
const stepArr = ref([
    {
      title: "Step1",
      desc: "创建产品",
    },
    {
      title: "Step2",
      desc: "维护模块",
    },
    {
      title: "Step3",
      desc: "维护计划",
    },
    {
      title: "Step4",
      desc: "创建发布",
    },
  ])
</script>

## 使用

```html
<MyStep :stepArr="stepArr" />

<script setup>
  import MyStep from "./index.vue";
  import { ref } from "vue";

  const stepArr = ref([
    {
      title: "Step1",
      desc: "创建产品",
    },
    {
      title: "Step2",
      desc: "维护模块",
    },
    {
      title: "Step3",
      desc: "维护计划",
    },
    {
      title: "Step4",
      desc: "创建发布",
    },
  ]);
</script>
```

## Props

| 参数    | 说明     | 类型  | 默认值 | 是否必填 |
| ------- | -------- | ----- | ------ | -------- |
| stepArr | 步骤数组 | Arrar | []     | 是       |

## Events

| 事件名称 |       说明       | 回调参数 |
| :------: | :--------------: | :------: |
|  onPrev  |    上一步事件    |    -     |
|  onNext  |    下一步事件    |    -     |
| onFinish | 最后一步完成事件 |    -     |

<!-- ## Slots -->

<!-- ## Methods -->
