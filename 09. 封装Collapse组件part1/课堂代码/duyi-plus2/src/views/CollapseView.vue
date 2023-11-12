<template>
  <h1 class="row-title">折叠面板</h1>
  <div class="row">
    <Duyi-Collapse v-model="openedValue" @change="changeHandle">
      <Duyi-CollapseItem name="a" title="home">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, temporibus.
      </Duyi-CollapseItem>
      <Duyi-CollapseItem name="b" title="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, facilis?
      </Duyi-CollapseItem>
      <Duyi-CollapseItem name="c" title="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint voluptatem fugit
        accusantium! Molestias, quod?
      </Duyi-CollapseItem>
      <Duyi-CollapseItem name="d" title="contact">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ab nam necessitatibus!
      </Duyi-CollapseItem>
    </Duyi-Collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const openedValue = ref(['a', 'b'])

const changeHandle = () => {
  console.log('changed!')
}
</script>

<style lang="scss" scoped></style>
