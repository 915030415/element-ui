<template>
  <h1 class="row-title">基础用法</h1>
  <div class="row">
    <Duyi-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      hideAfterClick
    >
      <Duyi-Button type="primary">点击打开下拉菜单</Duyi-Button>
    </Duyi-Dropdown>
  </div>
  <h1 class="row-title">手动打开和关闭</h1>
  <div class="row">
    <Duyi-Dropdown
      placement="bottom"
      trigger="click"
      manual
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      ref="dropdownRef"
    >
      <Duyi-Button type="primary">手动打开下拉菜单</Duyi-Button>
    </Duyi-Dropdown>
  </div>
  <div class="row">
    <Duyi-Button @click="openClick">打开</Duyi-Button>
    <Duyi-Button @click="closeClick">关闭</Duyi-Button>
  </div>
  <h1 class="row-title">支持VNode节点</h1>
  <div class="row">
    <Duyi-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options2"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
    >
      <Duyi-Button type="primary">点击打开下拉菜单</Duyi-Button>
    </Duyi-Dropdown>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'

const dropdownRef = ref(null)

const options = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' }
]

const options2 = [
  { key: 1, label: h('div', { class: 'bar', innerHTML: 'hello' }) },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' }
]

// 下拉列表显示状态改变的时候对应的回调函数
const visibleChangeHandler = (e) => {
  console.log(`当前下拉组件的状态为${e ? '显示' : '隐藏'}状态`)
}

// 在选择具体下拉项目的时候对应的回调函数
const selectHandler = (item) => {
  console.log(`你点击的项目为：${item.label}`)
}

const openClick = () => {
  dropdownRef.value.show()
}

const closeClick = () => {
  dropdownRef.value.hide()
}
</script>

<style lang="scss" scoped></style>
