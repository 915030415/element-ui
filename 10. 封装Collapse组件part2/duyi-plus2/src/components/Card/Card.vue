<template>
  <!-- 这是最外层容器，会有一个默认的宽度 270px，但是如果用户传递的宽度，那么就使用用户传递的 -->
  <div class="duyi-card" :style="width ? { width: width + 'px' } : {}">
    <!-- 1. 卡片图片 -->
    <div class="duyi-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" />
    </div>
    <!-- 2. 卡片描述 -->
    <div v-if="summary" class="duyi-card-summary">
      {{ summary }}
    </div>
    <div v-else class="duyi-card-summary">
      <slot />
    </div>
    <!-- 3. 卡片的 footer -->
    <!-- 最后的 footer 仅仅提供一个插槽，至于内容以及样式由用户自己来决定 -->
    <div class="duyi-card-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'Duyi-Card'
})

defineProps(propObj)
</script>

<style lang="scss" scoped></style>
