<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <Duyi-Icon icon="user-secret" />
    <Duyi-Icon icon="bars" />
    <Duyi-Icon icon="shield-halved" />
    <Duyi-Icon icon="file" />
    <Duyi-Icon icon="filter" />
    <Duyi-Icon icon="gear" />
    <Duyi-Icon icon="barcode" />
    <Duyi-Icon icon="folder" />
    <Duyi-Icon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <Duyi-Icon icon="user-secret" size="2xs" />
    <Duyi-Icon icon="bars" size="xs" />
    <Duyi-Icon icon="shield-halved" size="sm" />
    <Duyi-Icon icon="file" size="lg" />
    <Duyi-Icon icon="filter" size="xl" />
    <Duyi-Icon icon="gear" size="2xl" />
    <Duyi-Icon icon="barcode" size="2x" />
    <Duyi-Icon icon="folder" size="3x" />
    <Duyi-Icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <Duyi-Icon icon="user-secret" rotation="90" size="xl" />
    <Duyi-Icon icon="bars" rotation="270" size="xl" />
    <Duyi-Icon icon="shield-halved" rotation="180" size="xl" />
    <Duyi-Icon icon="file" flip="horizontal" size="xl" />
    <Duyi-Icon icon="filter" flip="vertical" size="xl" />
    <Duyi-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <Duyi-Icon icon="user-secret" size="xl" beat />
    <Duyi-Icon icon="bars" size="xl" beat-fade />
    <Duyi-Icon icon="shield-halved" size="xl" bounce />
    <Duyi-Icon icon="file" size="xl" fade />
    <Duyi-Icon icon="filter" size="xl" flip />
    <Duyi-Icon icon="gear" size="xl" shake />
    <Duyi-Icon icon="barcode" size="xl" spin />
    <Duyi-Icon icon="folder" size="xl" spin spin-reverse />
    <Duyi-Icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <Duyi-Icon icon="user-secret" size="xl" type="primary" />
    <Duyi-Icon icon="bars" size="xl" type="success" />
    <Duyi-Icon icon="shield-halved" size="xl" type="info" />
    <Duyi-Icon icon="file" size="xl" type="warning" />
    <Duyi-Icon icon="filter" size="xl" type="danger" />
    <Duyi-Icon icon="gear" size="xl" color="#e47412" />
    <Duyi-Icon icon="barcode" size="xl" color="#7ec102" />
    <Duyi-Icon icon="folder" size="xl" color="skyblue" />
    <Duyi-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
