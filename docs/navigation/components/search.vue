<template>
  <div class="search-module">
    <select class="search-source" v-model="selected" @change="sourceChange(selected)">
      <option :value="item.name" v-for="(item, index) in selects" :key="index">{{ item.name }}</option>
    </select>
    <input class="search-input" ref="searchInputRef" :placeholder="placeholder" v-model="keyword"
      @keyup.enter="searchHandle">
    <div class="search-btn" @click="searchHandle">搜索</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const keyword = defineModel<string>({ required: true })

interface Props {
  placeholder?: string
  selects?: Selects[]
}
interface Selects {
  name: string
  value: string
}
const props = withDefaults(defineProps<Props>(), {
  placeholder: "你想输入点什么...",
  selects: () => [
    {
      name: '百度',
      value: 'https://www.baidu.com/s?ie=UTF-8&wd='
    },
    {
      name: 'Google',
      value: 'https://www.google.com/search?q='
    },
    {
      name: 'metaso',
      value: 'https://metaso.cn/?q='
    },
    {
      name: '开搜Ai',
      value: 'https://kaisouai.com/?from=coderutil&amp;q='
    },
    {
      name: '必应',
      value: 'https://cn.bing.com/search?q='
    },
    {
      name: '开发者搜索',
      value: 'https://kaifa.baidu.com/searchPage?wd='
    },
    {
      name: 'GitHub',
      value: 'https://github.com/search?q='
    },
    {
      name: 'CSDN',
      value: 'https://so.csdn.net/so/search/all?q='
    },
    {
      name: '头条',
      value: 'https://so.toutiao.com/search?dvpf=pc&amp;source=input&amp;keyword='
    },
    {
      name: '知乎',
      value: 'https://www.zhihu.com/search?type=content&q='
    },
    {
      name: '产品经理',
      value: 'http://api.woshipm.com/search/list.html?key='
    },
    {
      name: '网易云音乐',
      value: 'https://music.163.com/#/search/m/?s='
    }
  ]
})

const selected = ref(props.selects[0].name)
const source = ref(props.selects[0].value)

const searchInputRef = ref()
function sourceChange(v: string) {
  selected.value = v
  props.selects.forEach(item => {
    if (item.name === v) {
      source.value = item.value
    }
  })
}
function searchHandle() {
  const target = `${source.value + keyword.value}`
  window.open(target, '_blank')
}

onMounted(()=>{
  searchInputRef?.value.focus()
})
</script>

<style scoped lang="scss">
.search-module {
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 45px;
  border: 2px solid #000;
  border-radius: 5px;
  overflow: hidden;


  .search-source {
    height: 43px;
    width: 100px;
    border: 0px;
    text-align: center;
    font-size: 14px;
    text-indent: 0.4em;
    background-color: transparent;
    -webkit-appearance: auto;

    option {
      line-height: 43px;
      border: 0px;
    }
  }

  .search-input {
    padding: 0px 15px;
    width: 490px;
    height: 43px;
    font-size: 15px;
    line-height: 45px;
    border: 0px;
    background-color: transparent;
    text-transform: none;
    text-shadow: none;
    display: inline-block;
    box-sizing: border-box !important;
  }

  .search-btn {
    cursor: pointer;
    text-align: center;
    height: 43px;
    width: 100px;
    background-color: #000;
    color: white;
    line-height: 43px;
    font-size: 18px;
    font-weight: 500;

    &:hover {
      background: #2b2a2a;
    }
  }
}
</style>