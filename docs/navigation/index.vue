<template>
  <div class="home-page">
    <div class="home-top" v-show="!showIframe">
      <Search v-model="keyword"></Search>
    </div>
    <div class="home-bottom">
      <Iframe v-model="showIframe" :site="iframeData"></Iframe>
    </div>
    <main class="home-main" v-if="true">
      <div class="home-left" v-show="showLeft">
        <Sidebar :list="categoryList" />
      </div>
      <div class="home-right">
        <!-- <Main :list="categoryList" @onClick="clickItem"/> -->
        <ItemCard v-for="item in categoryList" :key="item.id" :data="item" @onClick="clickItem"/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
// import Main from './components/main.vue'
import Sidebar from './components/sidebar.vue'
import Search from './components/search.vue'
import Iframe from './components/iframe.vue'
import ItemCard from './components/ItemCard.vue'
import categorys from './data/category.json'
import { buildTree } from '../utils/tree'


// 是否显示iframe
const showIframe = ref(false)
const iframeData = ref({})
// fetch('http://127.0.0.1:3000/h')
//   .then(async (result) => {
//     const res = await result.json()
//     console.log('res', res)
//   })
//   .catch((err) => { console.log(err) })
function clickItem(site: any,type: 'nei'|'wai'){
  if(type === 'nei'){
    iframeData.value = site
    if(!showIframe.value){
      showIframe.value = true
    }
  }else{
    window.open(site.url)
  }
}
// 搜索关键词
const keyword = ref('')
// 是否显示左侧导航
const showLeft = ref(true)
// 分类数据列表
const categoryList = ref([])
// 加载分类数据列表
function loadCategoryList(){
  categoryList.value = buildTree(categorys)
  // console.log('categoryList loaded', categoryList.value)
}
function handleResize() {
  if (window.innerWidth <= 960) {
    showLeft.value = false
  } else {
    showLeft.value = true
  }
}

onMounted(() => {
  loadCategoryList()
  handleResize()
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
})
</script>

<style scoped lang="scss">
.home-page {
  position: relative;
  padding: 15px;
}

.home-top {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}

.home-main {
  position: relative;
  display: flex;
  gap: 15px;
  height: calc(100vh - 64px - 60px - 30px);
  // min-height: calc(100vh - 64px - 113px);
  overflow-y: scroll;

  // background-color: aqua;
  &::-webkit-scrollbar {
    display: none;
  }

  .home-left {
    position: sticky;
    top: 40px;
    left: 0;
    flex-wrap: 0;
  }

  .home-right {
    flex: 1;
  }
}
</style>