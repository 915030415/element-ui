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
      <Duyi-CollapseItem name="d" title="contact" disabled>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ab nam necessitatibus!
      </Duyi-CollapseItem>
    </Duyi-Collapse>
  </div>
  <h1 class="row-title">手风琴模式</h1>
  <div class="row">
    <Duyi-Collapse v-model="openedValue2" @change="changeHandle" accordion>
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
      <Duyi-CollapseItem name="d" title="contact" disabled>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ab nam necessitatibus!
      </Duyi-CollapseItem>
    </Duyi-Collapse>
  </div>
  <h1 class="row-title">自定义标题</h1>
  <div class="row">
    <Duyi-Collapse v-model="openedValue3" accordion>
      <Duyi-CollapseItem name="Consistency" title="Consistency">
        <template #title>
          <div class="titleContainer">
            <span class="title">Consistency</span>
            <Duyi-Icon icon="house" />
          </div>
        </template>
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such as: design style,
          icons and texts, position of elements, etc.
        </div>
      </Duyi-CollapseItem>
      <Duyi-CollapseItem name="Feedback">
        <template #title>
          <div class="titleContainer">
            <span class="title">Feedback</span>
            <Duyi-Icon icon="image" />
          </div>
        </template>
        <div>
          Operation feedback: enable the users to clearly perceive their operations by style updates
          and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging elements of the page.
        </div>
      </Duyi-CollapseItem>
      <Duyi-CollapseItem name="Efficiency">
        <template #title>
          <div class="titleContainer">
            <Duyi-Icon icon="phone" />
            <span class="title">Efficiency</span>
          </div>
        </template>
        <div>Simplify the process: keep operating process simple and intuitive;</div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the users can quickly
          understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps the users to
          identify and frees them from memorizing and recalling.
        </div>
      </Duyi-CollapseItem>
      <Duyi-CollapseItem name="Controllability" title="Controllability">
        <template #title>
          <div class="titleContainer">
            <Duyi-Icon icon="star" />
            <span class="title">Controllability</span>
          </div>
        </template>
        <div>
          Decision making: giving advices about operations is acceptable, but do not make decisions
          for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to operate, including
          canceling, aborting or terminating current operation.
        </div>
      </Duyi-CollapseItem>
    </Duyi-Collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const openedValue = ref(['a', 'b'])
const openedValue2 = ref(['a'])
const openedValue3 = ref(['a'])

const changeHandle = (arr) => {
  console.log(arr)
}
</script>

<style lang="scss" scoped>
.titleContainer {
  display: flex;
}
.title {
  margin: 0 5px;
}
</style>
