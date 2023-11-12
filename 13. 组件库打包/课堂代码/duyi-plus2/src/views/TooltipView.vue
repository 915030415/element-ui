<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <Duyi-Tooltip content="this is a test" placement="top" @visible-change="handle">
      <Duyi-Button type="primary">top</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="bottom">
      <Duyi-Button type="warning">bottom</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="left">
      <Duyi-Button type="danger">left</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="right">
      <Duyi-Button type="success">right</Duyi-Button>
    </Duyi-Tooltip>
  </div>
  <h1 class="row-title">切换触发模式</h1>
  <div class="row">
    <Duyi-Tooltip content="this is a test" placement="top" trigger="click">
      <Duyi-Button type="primary">top</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="bottom" trigger="click">
      <Duyi-Button type="warning">bottom</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="left" trigger="click">
      <Duyi-Button type="danger">left</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="right" trigger="click">
      <Duyi-Button type="success">right</Duyi-Button>
    </Duyi-Tooltip>
  </div>
  <h1 class="row-title">手动触发模式</h1>
  <div class="row">
    <Duyi-Tooltip content="this is a test" placement="right" manual ref="tooltipRef">
      <Duyi-Button type="primary">right</Duyi-Button>
    </Duyi-Tooltip>
  </div>
  <div class="row">
    <Duyi-Button @click="openHandler">打开提示框</Duyi-Button>
    <Duyi-Button @click="closeHandler">关闭提示框</Duyi-Button>
  </div>
  <h1 class="row-title">延时触发</h1>
  <div class="row">
    <Duyi-Tooltip
      content="this is a test"
      placement="top"
      :open-delay="2000"
      :close-delay="2000"
      @visible-change="handle"
    >
      <Duyi-Button type="primary">top</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip
      content="this is a test"
      placement="bottom"
      :open-delay="2000"
      :close-delay="2000"
    >
      <Duyi-Button type="warning">bottom</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="left" :open-delay="2000" :close-delay="2000">
      <Duyi-Button type="danger">left</Duyi-Button>
    </Duyi-Tooltip>
    <Duyi-Tooltip content="this is a test" placement="right" :open-delay="2000" :close-delay="2000">
      <Duyi-Button type="success">right</Duyi-Button>
    </Duyi-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tooltipRef = ref(null)
const handle = (isShow) => {
  if (isShow) console.log('提示框显示')
  else console.log('提示框隐藏')
}

const openHandler = () => {
  // 用户要手动打开
  tooltipRef.value.show()
}
const closeHandler = () => {
  // 用户要手动关闭
  tooltipRef.value.hide()
}
</script>

<style lang="scss" scoped></style>
