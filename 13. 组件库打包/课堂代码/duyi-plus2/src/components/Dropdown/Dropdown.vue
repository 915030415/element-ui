<template>
  <!-- 最外层的容器 -->
  <div class="duyi-dropdown">
    <!-- 触发元素 -->
    <Duyi-Tooltip
      :trigger="trigger"
      :placement="placement"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChangeHandler"
      ref="tooltipRef"
    >
      <slot />
      <!-- 生成具体的提示内容，插入到 content 具名插槽里面 -->
      <template #content>
        <ul class="duyi-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <!-- 这个li标签是用来做分割线的 -->
            <li v-if="item.divided" class="divided-placeholder"></li>
            <li
              class="duyi-dropdown__item"
              :class="{
                'is-disabled': item.disabled
              }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <RenderVNode :v-node="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Duyi-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import propObj from './props'
import RenderVNode from '../Common/RenderVnode'
defineOptions({
  name: 'Duyi-Dropdown'
})
const emit = defineEmits(['select', 'visible-change'])

const tooltipRef = ref(null)
const props = defineProps(propObj)

const itemClick = (item) => {
  if (item.disabled) return
  emit('select', item)
  // 之后我们再这里添加一个判断
  // 如果用户传递了 hideAfterClick 属性
  // 说明需要点击后关闭下拉菜单
  // 这里我们就手动的调用 hide 方法关闭即可
  if (props.hideAfterClick) tooltipRef.value.hide()
}

const visibleChangeHandler = (e) => {
  emit('visible-change', e)
}

defineExpose({
  show: () => {
    tooltipRef.value.show()
  },
  hide: () => {
    tooltipRef.value.hide()
  }
})
</script>

<style lang="scss" scoped>
.bar {
  color: red;
  font-style: italic;
}
</style>
