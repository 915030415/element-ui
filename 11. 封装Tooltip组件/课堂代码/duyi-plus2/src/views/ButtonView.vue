<template>
  <h1 class="row-title">普通展示</h1>
  <div class="row">
    <Duyi-Button>默认按钮</Duyi-Button>
    <Duyi-Button type="primary">主要按钮</Duyi-Button>
    <Duyi-Button type="info">信息按钮</Duyi-Button>
    <Duyi-Button type="success">成功按钮</Duyi-Button>
    <Duyi-Button type="warning">警告按钮</Duyi-Button>
    <Duyi-Button type="danger">危险按钮</Duyi-Button>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <Duyi-Button plain>默认按钮</Duyi-Button>
    <Duyi-Button type="primary" plain>主要按钮</Duyi-Button>
    <Duyi-Button type="info" plain>信息按钮</Duyi-Button>
    <Duyi-Button type="success" plain>成功按钮</Duyi-Button>
    <Duyi-Button type="warning" plain>警告按钮</Duyi-Button>
    <Duyi-Button type="danger" plain>危险按钮</Duyi-Button>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <Duyi-Button round>默认按钮</Duyi-Button>
    <Duyi-Button type="primary" round>主要按钮</Duyi-Button>
    <Duyi-Button type="info" round>信息按钮</Duyi-Button>
    <Duyi-Button type="success" plain round>成功按钮</Duyi-Button>
    <Duyi-Button type="warning" plain round>警告按钮</Duyi-Button>
    <Duyi-Button type="danger" plain round>危险按钮</Duyi-Button>
  </div>
  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <Duyi-Button disabled>默认按钮</Duyi-Button>
    <Duyi-Button type="primary" disabled>主要按钮</Duyi-Button>
    <Duyi-Button type="info" disabled>信息按钮</Duyi-Button>
    <Duyi-Button type="success" disabled>成功按钮</Duyi-Button>
    <Duyi-Button type="warning" disabled>警告按钮</Duyi-Button>
    <Duyi-Button type="danger" disabled>危险按钮</Duyi-Button>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <Duyi-Button loading>默认按钮</Duyi-Button>
    <Duyi-Button type="primary" loading>主要按钮</Duyi-Button>
    <Duyi-Button type="info" loading>信息按钮</Duyi-Button>
    <Duyi-Button type="success" loading round>成功按钮</Duyi-Button>
    <Duyi-Button type="warning" loading round>警告按钮</Duyi-Button>
    <Duyi-Button type="danger" loading round>危险按钮</Duyi-Button>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <Duyi-Button icon="file">默认按钮</Duyi-Button>
    <Duyi-Button type="primary" icon="gear">主要按钮</Duyi-Button>
    <Duyi-Button type="info" icon="folder" plain>信息按钮</Duyi-Button>
    <Duyi-Button type="success" icon="bug" plain>成功按钮</Duyi-Button>
    <Duyi-Button type="warning" icon="code" round>警告按钮</Duyi-Button>
    <Duyi-Button type="danger" icon="cube" round>危险按钮</Duyi-Button>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <Duyi-Button icon="file" size="small">默认按钮</Duyi-Button>
    <Duyi-Button type="primary" icon="gear" size="small">主要按钮</Duyi-Button>
    <Duyi-Button type="info" icon="folder" plain>信息按钮</Duyi-Button>
    <Duyi-Button type="success" icon="bug" plain>成功按钮</Duyi-Button>
    <Duyi-Button type="warning" icon="code" plain size="large">警告按钮</Duyi-Button>
    <Duyi-Button type="danger" icon="cube" plain size="large">危险按钮</Duyi-Button>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <Duyi-Button type="danger" circle>验</Duyi-Button>
    <Duyi-Button type="primary" icon="gear" circle></Duyi-Button>
    <Duyi-Button type="info" icon="folder" circle plain></Duyi-Button>
    <Duyi-Button type="success" icon="bug" circle plain></Duyi-Button>
    <Duyi-Button type="warning" icon="code" circle disabled></Duyi-Button>
    <Duyi-Button type="danger" icon="cube" circle disabled></Duyi-Button>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <Duyi-Button type="primary" @click="clickHandler" ref="btnRef">主要按钮</Duyi-Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const btnRef = ref(null)

function clickHandler() {
  window.alert('按钮被点击了')
  console.log(btnRef.value.ref)
}
</script>

<style lang="scss" scoped></style>
