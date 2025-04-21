<template>
  <div class="main">
    <a :id="`${data.title}`" style="scroll-margin-top: calc(65px - 15px - 35px);"></a>
    <div class="module-title">
      <div class="title-left" style="display: flex; align-items: center;">
        <img v-if="data.icon" class="icon" :src="data.icon" style="margin-right: 5px;">
        <span class="text">{{ data.private ? `🔒 ${data.title[0]}***${data.title[data.title.length - 1]}` : data.title }}
        </span>
      </div>
    </div>
    <div class="tab-box">
      <div class="tabs-header">
        <!-- @mouseenter="clickTabsHeaderItem(tab)" -->
        <div class="tabs-header-item" :class="{ 'active': tabsHeaderActive === tab.id }" v-for="tab in data.children"
          :key="tab.id" @click="clickTabsHeaderItem(tab, 'click')">
          <img v-if="tab.icon" class="icon" :src="tab.icon">
          <span class="text">{{ tab.private ? `🔒 ${tab.title[0]}***${tab.title[tab.title.length - 1]}` : tab.title
            }}</span>
        </div>
      </div>
      <div class="tab-container">
        <div class="list" v-if="list3.length">
          <div class="item" :class="{'siteActive':siteActive === site.id}" v-for="site in list3" :key=site.id>
            <div class="button">
              <div @click="clickItem(site, 'nei')">
                内
              </div>
              <div @click="clickItem(site, 'wai')">
                外
              </div>
            </div>
            <div class="top">
              <img v-if="site.icon" class="icon" :src="site.icon">
              <p class="title ellipsis1"><b :title="site.title">{{ site.title }}</b></p>
            </div>
            <p class="desc">{{ site.desc || '描述' }}</p>
          </div>
        </div>
        <div v-else class="empty">
          <svg t="1725088998346" class="icon" viewBox="0 0 1567 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            width="120" height="120">
            <path
              d="M156.662278 699.758173h21.097186A10.444152 10.444152 0 0 1 187.994733 710.202325c0 5.765172-4.490985 10.444152-10.235269 10.444152H156.662278v21.097186A10.444152 10.444152 0 0 1 146.218126 751.978932a10.277045 10.277045 0 0 1-10.444152-10.235269V720.646477H114.676787A10.444152 10.444152 0 0 1 104.441518 710.202325c0-5.765172 4.490985-10.444152 10.235269-10.444152H135.773974v-21.097187A10.444152 10.444152 0 0 1 146.218126 668.425717c5.765172 0 10.444152 4.490985 10.444152 10.235269v21.097187z m1378.628042-83.553215v-21.097186A10.277045 10.277045 0 0 0 1524.846168 584.872503a10.444152 10.444152 0 0 0-10.444152 10.235269v21.097186h-21.097186a10.277045 10.277045 0 0 0-10.235269 10.444152c0 5.598065 4.595427 10.444152 10.235269 10.444152h21.097186v21.097187c0 5.744284 4.67898 10.235269 10.444152 10.235268a10.444152 10.444152 0 0 0 10.444152-10.235268V637.093262h21.097187c5.744284 0 10.235269-4.67898 10.235268-10.444152a10.444152 10.444152 0 0 0-10.235268-10.444152H1535.29032zM776.460024 960.861969H250.596979A20.80475 20.80475 0 0 1 229.77134 939.973665c0-11.530344 9.462402-20.888304 20.825639-20.888303h94.728457A83.010119 83.010119 0 0 1 334.212859 877.413196v-605.96969A83.49055 83.49055 0 0 1 417.849627 187.994733H480.430984V167.001988A83.49055 83.49055 0 0 1 564.067752 83.553215h501.152182A83.448773 83.448773 0 0 1 1148.856702 167.001988v605.969689c0 15.185797-4.052331 29.410732-11.133466 41.672166h115.554096c11.551232 0 20.909192 9.274407 20.909192 20.888304 0 11.530344-9.295295 20.888304-20.888304 20.888304H1002.638576v20.992745c0 15.185797-4.052331 29.410732-11.133466 41.672166h11.196131c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304h-109.893365c9.545955 16.000441 7.478013 36.972297-6.41271 50.863019a41.672166 41.672166 0 0 1-59.072122 0L776.460024 960.861969z m76.367638-41.776607h66.424806c22.977134 0 41.609501-18.59059 41.609501-41.881049V270.461756c0-22.559368-18.047494-40.690416-40.314426-40.690416H416.303892c-22.266932 0-40.314426 18.214601-40.314426 40.690416v606.742557c0 23.123352 18.799473 41.881049 41.588613 41.881049h317.084449l-10.736588-10.757477a41.693054 41.693054 0 0 1-10.861918-40.377091l-19.718558-19.739447A146.259902 146.259902 0 0 1 502.363703 627.693525a146.218126 146.218126 0 0 1 220.517822 190.981761l19.739447 19.739447a41.630389 41.630389 0 0 1 40.377091 10.841029L852.827662 919.085362zM1002.638576 814.643843h62.852906A41.797496 41.797496 0 0 0 1107.080095 772.867236V167.106429c0-23.14424-18.632367-41.776607-41.588613-41.776607H563.775316A41.797496 41.797496 0 0 0 522.207592 167.106429v20.888304h396.794216A83.448773 83.448773 0 0 1 1002.638576 271.443506V814.643843zM266.325872 46.998683h31.123572c8.773088 0 15.875111 6.955805 15.875111 15.666228 0 8.647758-7.102023 15.666228-15.875111 15.666228h-31.123572v31.123572c0 8.773088-6.955805 15.875111-15.666228 15.875111a15.770669 15.770669 0 0 1-15.666228-15.875111V78.331139H203.869844A15.728893 15.728893 0 0 1 187.994733 62.664911c0-8.647758 7.102023-15.666228 15.875111-15.666228h31.123572V15.875111c0-8.773088 6.955805-15.875111 15.666228-15.875111 8.647758 0 15.666228 7.102023 15.666228 15.875111v31.123572zM20.888304 939.973665c0-11.530344 9.462402-20.888304 20.825638-20.888303h125.455152c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304H41.713942A20.80475 20.80475 0 0 1 20.888304 939.973665z m658.733544-135.021995a104.441518 104.441518 0 1 0-147.722083-147.722083 104.441518 104.441518 0 0 0 147.722083 147.722083zM459.542681 313.324555a20.888304 20.888304 0 0 1 20.867415-20.888304H710.202325a20.888304 20.888304 0 1 1 0 41.776608H480.430984A20.825639 20.825639 0 0 1 459.542681 313.324555z m0 104.441518c0-11.530344 9.295295-20.888304 20.742085-20.888303h334.505295c11.44679 0 20.742086 9.274407 20.742086 20.888303 0 11.530344-9.295295 20.888304-20.742086 20.888304H480.284766A20.762974 20.762974 0 0 1 459.542681 417.766073z m0 104.441519c0-11.530344 9.316183-20.888304 20.846527-20.888304h146.301679c11.509455 0 20.846527 9.274407 20.846527 20.888304 0 11.530344-9.316183 20.888304-20.846527 20.888303h-146.301679A20.80475 20.80475 0 0 1 459.542681 522.207592zM62.664911 396.87777a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911zM1357.739739 271.547948a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911z"
              fill="#8A96A3"></path>
          </svg>
          <div class="empty-text">{{ data.private ? '无权限' : '暂无数据' }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storage } from '../../utils/storage'
import sites from '../data/site.js'
import { BookmarkCategory, StorageObj } from '../types';

// const props = defineProps({
//   data: {
//     required: true,
//     type: Object,
//     default: () => { }
//   }
// })

const props = defineProps<{ data: BookmarkCategory }>()

const emit = defineEmits<{
  (e: 'onClick', item: any, type: string): void
}>()

const siteActive = ref(null)

function clickItem(site: any, type: 'nei' | 'wai') {
  siteActive.value = site.id
  emit('onClick', site, type)
}

const list3 = ref([])
const tabsHeaderActive = ref(0)


function clickTabsHeaderItem(tab, operationType?: 'atuo' | 'click') {
  tabsHeaderActive.value = tab.id

  // 开发环境不做缓存处理
  if (import.meta.env.DEV) {
    storage.clear()
    loadSites(tab, operationType)
    return
  }

  // 缓存名称
  const storageCategoryName = `category-${props.data.id}-${tab.id}`
  // 过期时间
  const expiredTime = new Date().getTime() + 3600 * 24 * 1 * 1000
  // 缓存数据
  const storageObj: StorageObj = storage.get(storageCategoryName) || {}

  if (storageObj?.id) {
    console.log('有缓存')
    if (new Date().getTime() > storageObj.expiredTime) {
      console.log('有缓存-已过期')
      loadSites(tab, operationType)
      storage.set(storageCategoryName, {
        id: tab.id,
        title: tab.title,
        list: list3.value,
        expiredTime,
      })
    } else {
      console.log('有缓存-未过期')
      list3.value = storageObj.list
      if (list3.value.length === 0) {
        loadSites(tab, operationType)
      }
    }
  } else {
    console.log('无缓存')
    loadSites(tab, operationType)
    storage.set(storageCategoryName, {
      id: tab.id,
      title: tab.title,
      list: list3.value,
      expiredTime,
    })
  }
}

/**根据分类id加载数据 */
function loadSites(tab, operationType?: 'atuo' | 'click') {
  const categoryId: number = tab.id;
  list3.value = []

  if (!tab?.private) {
    // 不需要权限的数据
    sites.forEach((s) => {
      if (s.categoryId === categoryId) list3.value.push({ ...s })
    })
    if ((operationType && operationType === 'click') && tab?.private !== undefined) {
      list3.value = []
      tab.private = !tab.private
    }
  } else {
    // 需要权限的数据
    if (operationType && operationType === 'click') {
      let ipt = prompt(`请输入 🔒 ${tab.title[0]}***${tab.title[tab.title.length - 1]} 密码进行访问`)
      if (ipt === null) return alert('密码不能为空!')
      if (ipt && ipt !== tab.pawssword) return alert('密码错误!')
      tab.private = false
      sites.forEach((s) => {
        if (s.categoryId === categoryId) list3.value.push({ ...s })
      })
    }
  }
}

onMounted(() => {
  loadSites({ id: 1 })
  // loadSites(props.data.children[0].id)
  clickTabsHeaderItem(
    props.data.children.length ? props.data.children[0] : []
  )
})
</script>

<style scoped lang="scss">
.tab-box {
  margin-top: 10px;

  .tabs-header {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    &-item {
      display: flex;
      align-items: center;
      border-radius: 4px;
      // background-color: #fff;
      background-color: var(--vp-button-alt-bg);
      padding: 6px 15px;
      cursor: pointer;
      transition: background .2s linear;

      &:hover {
        background-color: var(--vp-button-alt-hover-bg);
      }

      .icon {
        width: 16px;
        height: 16px;
        margin-right: 3px;
      }

      .text {
        font-size: 13px;
      }
    }

    &-item.active {
      background-color: var(--vp-button-brand-bg);

      .text {
        color: var(--vp-button-brand-text);
      }
    }
  }

  .tab-container {
    margin-top: 15px;

    .list {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      // grid-template-rows: repeat(3, minmax(0, 1fr));
      gap: 15px;

      .item {
        position: relative;
        cursor: pointer;
        padding: 9px;
        // background-color: #f5f7fd;
        background-color: var(--vp-sidebar-bg-color);
        overflow: hidden;
        // height: 71px;
        color: #333;
        color: var(--vp-c-text-2);
        border-radius: 5px;
        border: 1px solid transparent;
        background-image: var(--maya-home-linear-gradient);
        // border: var(--maya-home-border-solid);
        // box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

        &:hover {
          color: var(--vp-c-text-1);
          box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
          transform: translateY(-2px);

          .button {
            display: flex !important;
          }
        }

        .button {
          position: absolute;
          content: '';
          top: 3px;
          bottom: 3px;
          right: 3px;
          // background-color: aliceblue;
          background-color: var(--vp-button-alt-bg);
          padding: 0px 5px;
          display: flex;
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 10px;
          border-radius: 4px;

          div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 25px;
            height: 25px;
            font-size: 12px;
            font-weight: 600;
            border-radius: 99px;
            background-color: rgb(64, 139, 206);
            background-color: var(--vp-c-bg);

            &:hover {
              border: 1px solid var(--vp-button-alt-bg);
            }
          }
        }


        .top {
          display: flex;
          align-items: center;
          // background-color: #7c7a7a;

          .icon {
            width: 20px;
            height: 20px;
            border-radius: 999px;
          }

          .title {
            // height: 20px;
          }
        }

        .title,
        .desc {
          text-align: left;
          width: 180px;
          font-weight: 400;
          text-indent: 5px;
        }

        .desc {
          width: 180px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
          font-size: 11px;
          color: #7c7a7a;
          text-indent: 0px;
          margin-top: 5px;
        }

      }
      .siteActive{
        border-color: var(--vp-button-alt-bg);
      }
    }

    .empty {
      min-height: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--vp-c-gutter);
      border-radius: 4px;

      path {
        fill: var(--vp-sidebar-bg-color);
        fill: var(--vp-c-text-2);
      }

      &-text {
        font-size: 14px;
        color: var(--vp-c-text-2);
        font-weight: 500;
      }
    }
  }
}

.main {
  padding: 10px 0px;

  @media (min-width: 600px) {
    .tab-container {
      .list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

    }
  }

  @media (min-width: 823px) {
    .tab-container {
      .list {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

    }
  }

  @media (min-width: 1160px) {
    .tab-container {
      .list {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }
    }
  }

  @media (min-width: 1480px) {
    .tab-container {
      .list {
        grid-template-columns: repeat(7, minmax(0, 1fr));
      }
    }
  }
}

.ellipsis1 {
  overflow: hidden; //溢出内容隐藏
  text-overflow: ellipsis; //文本溢出部分用省略号表示
  display: -webkit-box; //特别显示模式
  -webkit-line-clamp: 1; //行数
  -webkit-box-orient: vertical; //盒子中内容竖直排列
}
</style>