<template>
  <h1 class="row-title">第一组</h1>
  <div class="row">
    <!-- 卡片一 -->
    <Duyi-Card img-src="/web.png" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题" />
    <!-- 卡片二 -->
    <Duyi-Card img-src="go.png" summary="Google资深工程师深度讲解Go语言 由浅入深掌握Go语言">
      <!-- 插槽内部的内容样式由用户自己决定 -->
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </Duyi-Card>
  </div>
  <h1 class="row-title">第二组</h1>
  <div class="row">
    <Duyi-Card img-src="java.png" :width="368" :img-height="90">
      <div>路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。</div>
      <!-- 插槽内部的内容样式由用户自己决定 -->
      <template #footer>
        <div class="footer-java">
          <div class="level">3步骤 · 3门课</div>
          <div class="level">10982收藏</div>
        </div>
      </template>
    </Duyi-Card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-java {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>
