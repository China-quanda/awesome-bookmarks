<template>
  <div v-if="show" class="iframe-box" :class="{ 'full-screen': screenStatus === 'off-screen' }">
    <iframe class="iframe-tag" ref="iframeRef" :src="site.url" frameborder="0" allowfullscreen
      sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation"
      @load="onLoad" @error="onError"></iframe>
    <div class="loading" v-if="loading">
      <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20"
          stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20"
          stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20"
          stroke-dasharray="0 440" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20"
          stroke-dasharray="0 440" stroke-linecap="round"></circle>
      </svg>
    </div>
    <div class="btn-group">
      <button v-if="!loading" @click="togglePreviewStatus">
        <svg v-if="previewStatus === 'preview-close'" width="16" height="16" viewBox="0 0 48 48" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z"
            fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
          <path
            d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"
            fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round" />
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16"
            stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M28.9775 24L31.048 31.7274" stroke="#333" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M37.3535 21.3536L43.0103 27.0104" stroke="#333" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M5.00004 27.0103L10.6569 21.3534" stroke="#333" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M16.9278 31.7276L18.9983 24.0001" stroke="#333" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
      <button v-if="previewStatus === 'preview-close' && !loading" @click="visit">
        <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="34.6074" y="3.4939" width="14" height="18" rx="2" transform="rotate(45 34.6074 3.4939)" stroke="#333"
            stroke-width="4" stroke-linejoin="round" />
          <rect x="16.2227" y="21.8787" width="14" height="18" rx="2" transform="rotate(45 16.2227 21.8787)"
            stroke="#333" stroke-width="4" stroke-linejoin="round" />
          <path d="M31.0723 16.929L16.9301 31.0711" stroke="#333" stroke-width="4" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>
      <button v-if="previewStatus === 'preview-close' && !loading" @click="toggleFullScreen">
        <svg v-if="screenStatus === 'full-screen'" width="16" height="16" viewBox="0 0 48 48" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M33 6H42V15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M42 33V42H33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 42H6V33" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6 15V6H15" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M33 6V15H42" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 6V15H6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M15 42V33H6" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M33 42V33H41.8995" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button v-if="previewStatus === 'preview-close'" @click="close">
        <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L40 40" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8 40L40 8" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted ,watch} from 'vue'
import { useData } from 'vitepress'

const { title } = useData()
const show = defineModel(false)

const props = withDefaults(defineProps<{
  site:any
}>(), {
  url: '',
});

const loading = ref(true)
const screenStatus = ref<'full-screen' | 'off-screen'>('full-screen')
const previewStatus = ref<'preview-open' | 'preview-close'>('preview-close')

watch(()=>props.site,()=>{
  console.log('watch',props.site)
  loading.value = true
  document.title = `${props.site.title} - ${title.value}`
})

function close() {
  show.value = false
  loading.value = false
  document.title = title.value
}

function visit() {
  window.open(props.site.url)
  close()
}

function togglePreviewStatus() {
  if (previewStatus.value === 'preview-open') {
    previewStatus.value = 'preview-close'
  } else {
    previewStatus.value = 'preview-open'
  }
}
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    enterFullScreen();
    screenStatus.value = 'off-screen'
  } else {
    exitFullScreen();
    screenStatus.value = 'full-screen'
  }
}
function enterFullScreen() {
  let element = document.querySelector('.iframe-box');
  if (element?.requestFullscreen) {
    element?.requestFullscreen();
  } else if (element?.mozRequestFullScreen) { /* Firefox */
    element?.mozRequestFullScreen();
  } else if (element?.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    element?.webkitRequestFullscreen();
  } else if (element?.msRequestFullscreen) { /* IE/Edge */
    element?.msRequestFullscreen();
  }
}
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document?.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document?.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document?.msExitFullscreen) { /* IE/Edge */
    document?.msExitFullscreen();
  }
}

function onLoad() {
  console.log('load scuss')
  loading.value = false
}
function onError() {
  console.log('load error')

}

defineExpose({
  close,
  toggleFullScreen,
  togglePreviewStatus,
  visit,
  loading,
  screenStatus
})
</script>

<style scoped lang="scss">
.iframe-box {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.iframe-tag {
  width: 100%;
  height: calc(100vh - 64px - 30px);
}

.loading {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  background-color: var(--vp-c-bg);
  display: flex;
  justify-content: center;
  align-items: center;

  /* From Uiverse.io by Nawsome */
  .pl {
    width: 6em;
    height: 6em;
  }

  .pl__ring {
    animation: ringA 2s linear infinite;
  }

  .pl__ring--a {
    stroke: #f42f25;
  }

  .pl__ring--b {
    animation-name: ringB;
    stroke: #f49725;
  }

  .pl__ring--c {
    animation-name: ringC;
    stroke: #255ff4;
  }

  .pl__ring--d {
    animation-name: ringD;
    stroke: #f42582;
  }

  /* Animations */
  @keyframes ringA {

    from,
    4% {
      stroke-dasharray: 0 660;
      stroke-width: 20;
      stroke-dashoffset: -330;
    }

    12% {
      stroke-dasharray: 60 600;
      stroke-width: 30;
      stroke-dashoffset: -335;
    }

    32% {
      stroke-dasharray: 60 600;
      stroke-width: 30;
      stroke-dashoffset: -595;
    }

    40%,
    54% {
      stroke-dasharray: 0 660;
      stroke-width: 20;
      stroke-dashoffset: -660;
    }

    62% {
      stroke-dasharray: 60 600;
      stroke-width: 30;
      stroke-dashoffset: -665;
    }

    82% {
      stroke-dasharray: 60 600;
      stroke-width: 30;
      stroke-dashoffset: -925;
    }

    90%,
    to {
      stroke-dasharray: 0 660;
      stroke-width: 20;
      stroke-dashoffset: -990;
    }
  }

  @keyframes ringB {

    from,
    12% {
      stroke-dasharray: 0 220;
      stroke-width: 20;
      stroke-dashoffset: -110;
    }

    20% {
      stroke-dasharray: 20 200;
      stroke-width: 30;
      stroke-dashoffset: -115;
    }

    40% {
      stroke-dasharray: 20 200;
      stroke-width: 30;
      stroke-dashoffset: -195;
    }

    48%,
    62% {
      stroke-dasharray: 0 220;
      stroke-width: 20;
      stroke-dashoffset: -220;
    }

    70% {
      stroke-dasharray: 20 200;
      stroke-width: 30;
      stroke-dashoffset: -225;
    }

    90% {
      stroke-dasharray: 20 200;
      stroke-width: 30;
      stroke-dashoffset: -305;
    }

    98%,
    to {
      stroke-dasharray: 0 220;
      stroke-width: 20;
      stroke-dashoffset: -330;
    }
  }

  @keyframes ringC {
    from {
      stroke-dasharray: 0 440;
      stroke-width: 20;
      stroke-dashoffset: 0;
    }

    8% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -5;
    }

    28% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -175;
    }

    36%,
    58% {
      stroke-dasharray: 0 440;
      stroke-width: 20;
      stroke-dashoffset: -220;
    }

    66% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -225;
    }

    86% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -395;
    }

    94%,
    to {
      stroke-dasharray: 0 440;
      stroke-width: 20;
      stroke-dashoffset: -440;
    }
  }

  @keyframes ringD {

    from,
    8% {
      stroke-dasharray: 0 440;
      stroke-width: 20;
      stroke-dashoffset: 0;
    }

    16% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -5;
    }

    36% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -175;
    }

    44%,
    50% {
      stroke-dasharray: 0 440;
      stroke-width: 20;
      stroke-dashoffset: -220;
    }

    58% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -225;
    }

    78% {
      stroke-dasharray: 40 400;
      stroke-width: 30;
      stroke-dashoffset: -395;
    }

    86%,
    to {
      stroke-dasharray: 0 440;
      stroke-width: 20;
      stroke-dashoffset: -440;
    }
  }
}

.btn-group {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 10px;
  padding: 10px 15px;

  button {
    padding: 8px;
    border-radius: 999px;
    // background-color: var(--vp-c-bg);
    border: 1px solid var(--vp-c-brand);
    color: var(--vp-c-brand);
    -webkit-backdrop-filter: saturate(180%) blur(3px);
    backdrop-filter: saturate(180%) blur(3px);
    background: hsla(0, 0%, 100%, .5);
    // box-shadow: 0px 0px 10px rgb(238 242 245 / 100%);

    &:hover {

      // background-color: var(--vp-c-brand);
      svg {

        path,
        rect {
          stroke: var(--vp-c-brand);
        }
      }
    }
  }
}

.full-screen {
  .iframe-tag {
    height: calc(100vh);
  }
}
</style>