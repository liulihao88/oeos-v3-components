<template>
  <div class="o-title" :style="{ ...margin }" v-bind="$attrs">
    <div class="o-title__left">
      <span class="title-text">{{ title }}</span>
      <slot></slot>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script setup lang="ts">
/**
<o-title title="使用hooks1" t="100"></o-title>
<o-title title="我说呢" sub-title="test/t2.vue"></o-title>
* 
*/
import { ref, computed, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '', // 默认margin 16px 0
  },
  // 本地开发. 用来对文件命名. 可以快速定位到文件的名字
  subTitle: {
    type: String,
    default: '',
  },
  t: {
    type: [String, Number],
    default: '',
  },
  b: {
    type: [String, Number],
    default: '',
  },
  l: {
    type: [String, Number],
    default: '',
  },
})

const margin = computed(() => {
  const { t, b, l } = props
  if (!t && !b && !l) {
    return {}
  } else {
    let obj = {}
    if (t) {
      obj.marginTop = proxy.processWidth(t, true)
    }
    if (b) {
      obj.marginBottom = proxy.processWidth(b, true)
    }
    if (l) {
      obj.marginLeft = proxy.processWidth(l, true)
    }
    return obj
  }
})
// copy成功的提示文案
</script>

<style scoped lang="scss">
.o-title {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-between;
  .o-title__left {
    width: 100%;
    padding-left: 8px;
    align-items: center;
    position: relative;
    font-weight: 500;
    box-sizing: border-box;
    display: flex;
    &::before {
      position: absolute;
      left: 0;
      content: '';
      width: 2px;
      height: 12px;
      background-color: blue;
      background-color: var(--lc, var(--blue)); // 左侧的竖条颜色
    }
    .title-text {
      letter-spacing: 0;
      font-weight: 500;
    }
  }
}
</style>
