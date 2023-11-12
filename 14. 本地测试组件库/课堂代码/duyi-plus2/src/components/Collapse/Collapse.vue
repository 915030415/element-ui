<template>
  <div class="duyi-collapse">
    <slot />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import { collapseProps, collapseContextKey } from './props'
defineOptions({
  name: 'Duyi-Collapse'
})

const emit = defineEmits(['change', 'update:modelValue'])

const props = defineProps(collapseProps)

// 关于展开面板的核心逻辑，其实就是判断数组里面的值
// 然后根据值来判断是否展开
// ['a'] 代表 a 这个面板是展开的
// ['a', 'b'] 代表 a 和 b 这两个面板是展开的
// 因此核心就是针对这个数组进行操作

// 拿到用户所传递的哪些面板是打开的数组
const activeNames = ref(props.modelValue)

// Collapse 组件有一个核心的方法，就是项目相关的点击事件
/**
 *
 * @param {*} itemName 用户所点击的项目的 name 值
 */
// 这个方法谁来用，当用户点击 CollapseItem 的时候，就会触发这个方法
// 那么这里就会涉及到一个问题，如何将该方法传递给 CollapseItem 组件
// 因为这里 CollapseItem 组件是通过插槽的形式插入进入的
// 因此我们这里打算使用依赖注入的形式来为 CollapseItem 组件提供这个方法
const handleItemClick = (itemName) => {
  // 先展开为一个数组
  let _activeNamesArr = [...activeNames.value]
  // 接下来针对这个数组来做操作
  // 要做的操作其实就是往数组里面添加值或者删除值

  if (props.accordion) {
    // 说明当前是手风琴模式
    // 这里创建了一个新的数组，这个数组里面只有一个元素，就是用户点击的那个面板
    // 如果该元素已经存在于 activeNames 数组中，那么就说明用户点击的是已经打开的面板
    // 那么就应该把这个面板关闭，所以清空数组
    _activeNamesArr = [activeNames.value[0] === itemName ? '' : itemName]
  } else {
    // 说明是普通折叠面板，可以打开多个的
    // 首先我们寻找点击的这个项目是否存在与数组中
    const index = _activeNamesArr.indexOf(itemName)
    if (index > -1) {
      // 说明当前点击的这个项目已经存在于数组中
      // 因此需要从数组中删除这个项目
      _activeNamesArr.splice(index, 1)
    } else {
      // 不存在，那么就把这个项目添加到数组中
      _activeNamesArr.push(itemName)
    }
  }
  // 无论你是哪一种模式，经过上面的代码，都已经准备好了最新的数组值
  activeNames.value = _activeNamesArr
  // 接下来我们需要触发两个事件
  emit('update:modelValue', _activeNamesArr)
  emit('change', _activeNamesArr)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style lang="scss" scoped></style>
