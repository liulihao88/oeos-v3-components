<template>
  <div class="o-input" v-bind="subAttrs" :style="{ ...proxy.processWidth(props.width) }">
    <el-tooltip :content="'' + $attrs.modelValue" :disabled="inWidth || hideTooltip" v-bind="tooltipAttrs">
      <div>
        <el-autocomplete
          v-if="props.options"
          :fetch-suggestions="querySearch"
          :placeholder="handlePlaceholder()"
          :clearable="$attrs.clearable !== false"
          v-bind="$attrs"
          @mouseover.native="inputOnMouseOver($event)"
          :style="{ ...proxy.processWidth(props.width) }"
        >
          <template v-if="$attrs.title" #prepend>
            <div v-bind="titleAttrs">
              {{ $attrs.title }}
            </div>
          </template>
        </el-autocomplete>

        <el-input
          v-bind="$attrs"
          v-else
          :placeholder="handlePlaceholder()"
          class="kd-ipt"
          :showPassword="showPassword"
          :clearable="$attrs.clearable !== false"
          :class="{ 'kd-textarea': $attrs.type === 'textarea' }"
          :style="{ ...proxy.processWidth(props.width) }"
          :maxlength="handleMaxLength"
          :rows="$attrs.rows || 2"
          resize="none"
          height="100px"
          :show-word-limit="handleShowWordLimit()"
          @focus="focusHandler($event)"
          @mouseover.native="inputOnMouseOver($event)"
        >
          <template v-if="$attrs.title" #prepend>
            <div v-bind="titleAttrs">
              {{ $attrs.title }}
            </div>
          </template>
        </el-input>
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
/**
* @使用方法
<o-input
  title="名字"
  @keyup.enter="close"
  v-model="aaa"
  width="200"
  size="default"
  :titleAttrs = "{
    onClick: close,
    style: {color: 'blue'}
  }"
  class="m-l-100"
></o-input>
*/
import { ref, getCurrentInstance, computed, useAttrs, watch } from 'vue'
const { proxy } = getCurrentInstance()
const attrs = useAttrs()

const props = defineProps({
  titleAttrs: {
    type: Object,
    default: () => {},
  },
  width: {
    type: [String, Number],
    default: '',
  },
  showWordLimit: {
    type: [Boolean, String],
    default: '',
  },
  block: {
    type: Boolean,
    default: false,
  },
  // placeholder在disabled的情况下是不显示的. 如果想要在这种情况下显示placeholder, 那么就用这个属性
  disPlaceholder: {
    type: String,
    default: '',
  },
  subAttrs: {
    type: Object,
    default: () => {
      return {}
    },
  },
  tooltipAttrs: {
    type: Object,
    default: () => {
      return {}
    },
  },
  hideTooltip: {
    type: Boolean,
    default: false,
  },
  // 适用于el-autocomplete
  options: {
    type: Array,
  },
})
const restaurants = ref([])
const inWidth = ref(true)

const handleMaxLength = computed(() => {
  if (attrs.type === 'textarea') {
    return attrs.maxlength || 1000
  } else {
    return attrs.maxlength || ''
  }
})

watch(
  () => props.options,
  (val) => {
    if (!val) {
      return
    }
    restaurants.value = val.map((v) => {
      if (proxy.getType(v) === 'object') {
        return v
      } else {
        return {
          value: v,
        }
      }
    })
  },
  {
    deep: true,
    immediate: true,
  },
)

function handlePlaceholder() {
  let res = attrs.disabled === undefined ? attrs.placeholder || '请输入' : props.disPlaceholder
  return res
}
// 是否显示showWordLimit属性
function handleShowWordLimit() {
  if (typeof props.showWordLimit === 'boolean') {
    return props.showWordLimit
  }
  if (attrs.type === 'textarea') {
    return true
  }
  return false
}
// 如果是密码输入框, focus直接选中文本
function focusHandler(evt) {
  if (attrs.type === 'password') {
    evt.currentTarget.select()
  }
}
function inputOnMouseOver(event) {
  const target = event.target
  if (target.offsetWidth + 4 < target.scrollWidth) {
    inWidth.value = false
  } else {
    inWidth.value = true
  }
}
const showPassword = computed(() => {
  if (attrs.type === 'password' && attrs.showPassword !== false) {
    return true
  }
  return false
})

// 新增对el-auto-complete的支持
const querySearch = (queryString, cb) => {
  const results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value
  cb(results)
}

const createFilter = (queryString: string) => {
  return (v) => {
    return v.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
</script>

<style lang="scss" scoped>
.o-input {
  width: 100%;
  display: inline-block;
}

// el-input的宽度会随着鼠标移入显示clearable而改变, 所以加下面这两行代码
:deep(.el-input__suffix:not(.el-select .el-input__suffix)) {
  margin-left: -22px;
}
:deep(.el-input__inner:not(.el-select .el-input__inner)) {
  padding-right: 22px;
}
:deep(.el-textarea__inner) {
  padding-bottom: 20px;
}
</style>
