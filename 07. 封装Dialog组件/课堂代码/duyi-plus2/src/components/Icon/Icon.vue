<template>
  <i class="duyi-icon" :class="{ [`duyi-icon--${type}`]: type }">
    <!-- 注意这个组件是 fontawesome为我们提供的组件 -->
    <!-- 我们需要对这个组件进行一个二次封装 -->
    <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
  </i>
</template>

<script setup>
import { computed } from 'vue'
import propObj from './props'
import { omit } from 'lodash-es'
defineOptions({
  name: 'Duyi-Icon'
})
const props = defineProps(propObj)
// 我们使用 omit 可以将我们不需要的属性进行过滤
const filteredProps = computed(() => omit(props, ['type']))
</script>

<style lang="scss" scoped></style>
