<template>
  <div class="duyi-tooltip" v-on="outerEvents">
    <!-- 触发的元素，设置为一个插槽 -->
    <div class="duyi-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot />
    </div>
    <!-- 要显示的提示内容 -->
    <!-- 考虑有些时候提示内容会比较复杂，因此这里仍然是提供插槽的形式 -->
    <div class="duyi-tooltip__popper" ref="popperRef" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
      <!-- 箭头 -->
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, reactive, computed } from 'vue'
import { createPopper } from '@popperjs/core'
import propObj from './props'
import { debounce } from 'lodash-es'
defineOptions({
  name: 'Duyi-Tooltip'
})
const props = defineProps(propObj)

// 存储触发元素
const triggerRef = ref(null)
// 存储提示框元素
const popperRef = ref(null)

const emit = defineEmits(['visible-change'])

// 存储 createPopper 返回的 popper 实例
let popperInstance = null

// 首先，提示框是否要显示出来，我们这里需要一个变量来控制
const isOpen = ref(false)

// 该对象用于存储各种事件，回头触发元素在绑定事件的时候直接绑定这个对象里面的事件即可
let events = reactive({})
let outerEvents = reactive({})

// 这里创建一个计算属性，该计算属性用于构建 createPopper 方法的第三个参数
const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 6]
      }
    }
  ]
}))

const openDebounce = debounce(() => {
  isOpen.value = true
  emit('visible-change', true)
}, props.openDelay)

const closeDebounce = debounce(() => {
  isOpen.value = false
  emit('visible-change', false)
}, props.closeDelay)

const open = () => {
  closeDebounce.cancel()
  openDebounce()
}
const close = () => {
  openDebounce.cancel()
  closeDebounce()
}

// 接下来我们需要创建具体的 popper 实例
// 这个 popper 实例是通过 createPopper 方法创建的
// popper 实例应该是在 isOpen 发生变化的时候创建

watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      // 说明要显示提示框，所以我们就创建 popper 实例
      // 这里我们需要一个 trigger 元素和一个 popper 元素
      if (triggerRef.value && popperRef.value) {
        // 创建 popper 实例
        popperInstance = createPopper(triggerRef.value, popperRef.value, popperOptions.value)
      } else {
        popperInstance?.destroy()
      }
    }
  },
  { flush: 'post' }
)

// 接下来我们需要给我们的触发元素绑定相应事件
// 调用 attachEvents 方法，就能够给触发元素绑定事件
const attachEvents = () => {
  // 在这儿里面就需要进行一个判断，判断触发方式
  if (props.trigger === 'hover') {
    // 鼠标移入触发
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    // 点击触发
    // 点击事件对应的回调就是根据 isOpen 的值来判断调用打开方法还是隐藏方法
    events['click'] = () => (isOpen.value ? close() : open())
  }
}

// 这里我们需要判断用户是否要自定义处理
// 只有在用户不需要自定义处理的时候，我们才绑定事件
if (!props.manual) {
  attachEvents()
}

// 这里我们需要给用户提供两个方法，让用户可以手动打开和关闭提示框
defineExpose({
  show: open,
  hide: close
})
</script>

<style lang="scss" scoped></style>
