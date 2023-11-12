<template>
  <!-- 外层容器 -->
  <div
    class="duyi-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <!-- 标题部分 -->
    <div
      class="duyi-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        // isActive 并非父组件传递过来的
        // 而是回头我们会创建一个 computed 来计算，计算该面板是否处于活动状态
        'is-active': isActive
      }"
      :id="`item-header-${name}`"
      @click="itemClickHandle"
    >
      <slot name="title">{{ title }}</slot>
      <!-- 右侧的图标 -->
      <Duyi-Icon icon="angle-right" class="header-angle" />
    </div>
    <!-- 内容部分 -->
    <Transition name="slide" v-on="transitionEvents">
      <div class="duyi-collapse-item__wrapper" v-show="isActive">
        <div class="duyi-collapse-item__content" :id="`item-content-${title}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { collapseItemProps, collapseContextKey } from './props'
defineOptions({
  name: 'Duyi-CollapseItem'
})

// 通过 inject 可以拿到 Collapse 组件提供的方法
// 回头就可以通过 collapseContext 来调用 Collapse 组件提供的方法
// collapseContext.handleItemClick()
const collapseContext = inject(collapseContextKey)

const props = defineProps(collapseItemProps)

// 接下来我们需要有一个计算属性来计算是否是激活状态
// 如果当前 CollapseItem 的 name 值存在于 Collapse 组件提供的 activeNames 数组中
// 说明当前项目是激活状态
const isActive = computed(() => collapseContext.activeNames.value.includes(props.name))

const itemClickHandle = () => {
  if (props.disabled) return
  // 这里就触发 Collapse 组件提供的方法
  collapseContext.handleItemClick(props.name)
}

// 在这个对象里面，会指定过渡开始和结束时的不同样式
const transitionEvents = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = el.scrollHeight + 'px'
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>

<style lang="scss" scoped></style>
