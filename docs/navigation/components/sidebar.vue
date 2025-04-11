<template>
  <div class="sidebar">
    <div class="list">
      <template v-for="item in list" :key="item">
        <div class="item">
          <a :href="`#${item.title}`"><button>{{ item.private ? `🔒 ${item.title[0]}***${item.title[item.title.length -1]}` : item.title }}</button></a>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookmarkCategory } from '../types';
defineProps<{ list: BookmarkCategory[]}>()
</script>

<style scoped lang="scss">
.sidebar {
  // position: fixed;
  // left: calc((100% - 1200px) / 2 - 75px);
  // width: 60px;
  // height: 450px;
  text-align: center;
  top: 200px;
  background-color: white;
  background-color: var(--vp-sidebar-bg-color);
  padding: 5px;
  border-radius: 8px;
  overflow: hidden;
  /* box-shadow: 0px 0px 20px rgb(238 242 245 / 80%); */
  // box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, .1);
  border-top: 3px solid #007AFF;

  .list {
    height: 70vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
  }

    // display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;
    // gap: 10px;
    .item {
      // width: 100px;
      // height: 100px;
      // background-color: red;
    }
  }

  button {
    // width: 50px;
    text-align: center;
    height: 32px;
    cursor: pointer;
    border-radius: 3px;
    // background-color: white;
    color: #666;
    color: var(--vp-c-text-2);
    font-weight: 500;
    font-size: 13px;

    &:hover {
      color: #111;
      font-weight: 700;
      color: var(--vp-c-text-1);
    }
  }
}
</style>