<template>
  <div class="main">
    <div class="web-page-module" v-for="item in list" :key="item">
      <a :id="`${item.title}`" style="scroll-margin-top: calc(65px - 15px - 35px);"></a>
      <div class="module-title">
        <div class="title-left">
          <img v-if="item.icon" class="icon" :src="item.icon">
          <span class="text">{{ item.title }}</span>
        </div>
      </div>
      <div class="list">
        <a class="item" v-for="site in item.children" :key=site.id :href="site.url" target="_blank">
          <div class="top">
            <img v-if="site.icon" class="icon" :src="site.icon">
            <p class="title"><b>{{ site.title }}</b></p>
          </div>
          <p class="desc">{{ site.desc || '描述' }}</p>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
defineProps({
  list: {
    required: true,
    type: Object,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.main {
  width: 100%;
}

.web-page-module {
  position: relative;
  margin-bottom: 15px;
  width: 100%;
  min-height: 10px;
  height: auto;
  padding: 20px 15px;
  // background-color: white;
  font-size: 14px;
  border-radius: 8px;

  --maya-home-box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
  --maya-home-border-solid: 1px solid var(--vp-c-gutter);
  // --maya-home-linear-gradient: linear-gradient(0deg, #fff, #f3f5f8);
  // --maya-home-linear-gradient: linear-gradient(0deg, var(--vp-c-bg), var(--vp-sidebar-bg-color));

  /* box-shadow: 0px 0px 20px rgb(238 242 245 / 80%); */
  background-image: var(--maya-home-linear-gradient);
  // border: 2px solid var(--vp-c-gutter);
  // box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
  // box-shadow: var(--maya-home-box-shadow);

  // 公共标题 左右布局
  .module-title {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .title-left {
      display: flex;
      align-items: center;
      line-height: 30px;
      text-align: left;
      font-weight: 600;
      margin-top: -5px;
      color: #666;

      .icon {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
    }

    .title-right {
      display: flex;
      align-items: center;
      padding: 5px 15px;
      border-radius: 20px;
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1), -8px -8px 20px 0 #fff;
      background-image: linear-gradient(0deg, #ffffff 0%, #f3f5f8 100%);
      border: 2px solid #fff;

      &:hover {
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
        transform: translateY(3px);
      }

      .text {
        font-size: 13px;
        color: #111;
      }

      .icon {
        path {
          stroke: #111;
        }

      }
    }
  }

  .list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    // grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 15px;

    .item {
      padding: 9px;
      // background-color: #f5f7fd;
      background-color: var(--vp-c-bg);
      background-color: var(--vp-sidebar-bg-color);
      overflow: hidden;
      height: 71px;
      color: #333;
      color: var(--vp-c-text-2);
      border-radius: 5px;
      background-image: var(--maya-home-linear-gradient);
      // border: var(--maya-home-border-solid);
      // box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);

      &:hover {
        color: var(--vp-c-text-1);
        box-shadow: 0 1px 3px hsl(0deg 0% 7% / 10%);
        transform: translateY(3px);
      }

      .top {
        display: flex;
      }

      .icon {
        width: 20px;
        height: 20px;
        border-radius: 999px;
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
  }


}

.main {
  @media (min-width: 600px) {
    .web-page-module {
      .list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

    }
  }

  @media (min-width: 823px) {
    .web-page-module {
      .list {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

    }
  }

  @media (min-width: 1160px) {
    .web-page-module {
      .list {
        grid-template-columns: repeat(5, minmax(0, 1fr));
      }
    }
  }

  @media (min-width: 1480px) {
    .web-page-module {
      .list {
        grid-template-columns: repeat(7, minmax(0, 1fr));
      }
    }
  }
}
</style>