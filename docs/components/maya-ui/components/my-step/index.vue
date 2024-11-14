<template>
	<view class="my-step">
		<!-- easy demo start -->
		<div class="easy-layout-demo">
			<!-- step start -->
			<div class="easy-step-bar">
				<div :class="{
					'easy-step-item': true,
					'easy-step-active': stepActiveIndex == index,
					'easy-step-done': stepActiveIndex >= index,
				}" :style="{
					'--stepColorR': stepActiveIndex == index ? '#bd0000' : '#f5f5f5',
					'--stepColorL': stepActiveIndex == index ? '#ff6b21' : '#fff'
				}" v-for="(i, index) in stepArr" :key="index">
					<span class="step-icon">
						<svg t="1731398852033" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
							p-id="6757" width="16" height="16">
							<path class="icon-svg"
								d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m247.9 387.5L464.4 682.9c-12.8 12.8-33.6 12.8-46.4 0l-154-154c-12.8-12.8-12.8-33.6 0-46.4 12.8-12.8 33.6-12.8 46.4 0l130.8 130.8L713.5 341c12.8-12.8 33.6-12.8 46.4 0 12.7 12.8 12.7 33.7 0 46.5z"
								fill="#cdcdcd" p-id="6758"></path>
						</svg>
					</span>
					<span class="step-info">
						<h2>{{ i.title }}</h2>
						<p>{{ i.desc }}</p>
					</span>
				</div>
			</div>
			<!-- step end -->
			<!-- step start -->
			<div class="easy-step-content">
				<!-- title start -->
				<div class="easy-content-title">
					<h1>{{ stepData.title }}</h1>
					<h2>{{ stepData.desc }}</h2>
				</div>
				<!-- title end -->
				<!-- main start -->
				<div class="easy-content-main">
					<p style="width:100%;text-align:center;font-size:50px;color:#e5e5e5;padding-top:40px;">{{ stepData.desc }}</p>
				</div>
				<!-- main end -->
				<!-- btn start -->
				<div class="easy-content-bottom">
					<div :class="{ 'step-btn-box': true, 'step-btn-disabled': stepActiveIndex == 0 }" @click="doPrev">上一步</div>
					<div class="step-btn-box" v-if="stepActiveIndex < stepArr.length - 1" @click="doNext">下一步</div>
					<div class="step-btn-box" v-if="stepActiveIndex == stepArr.length - 1" @click="emit('onFinish')">完成</div>
				</div>
				<!-- btn end -->
			</div>
			<!-- step end -->
		</div>
		<!-- easy demo end -->
	</view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

defineOptions({
	name: 'MyStep'
})

const emit = defineEmits<{
	(e: 'onNext'): void
	(e: 'onPrev'): void
	(e: 'onFinish'): void
}>()

const props = defineProps({
	stepArr: {
		type: Array,
		default: () => []
	}
})

onMounted(() => {
	getStepData()
})

const stepActiveIndex = ref(0)
const stepData = ref({})
const stepArr = ref([])

/**获取step信息 */
function getStepData() {
	stepArr.value = props.stepArr
	const obj = stepArr.value[stepActiveIndex.value]
	stepData.value = obj
}

/**下一步 */
function doNext() {
	if (stepActiveIndex.value < stepArr.value.length - 1) {
		stepActiveIndex.value++
		getStepData()
		emit('onNext')
	}
}
/**上一步 */
function doPrev() {
	if (stepActiveIndex.value > 0) {
		stepActiveIndex.value--
		getStepData()
		emit('onPrev')
	}
}
</script>

<style scoped lang="scss">
@import url('./style.scss');
</style>