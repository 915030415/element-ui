<template>
  <!-- 这个是最外层的容器 -->
  <div
    class="duyi-pager"
    :class="{
      [`duyi-pager--${type}`]: type,
      [`duyi-pager--${size}`]: size
    }"
  >
    <!-- 首页 -->
    <a :class="currentPage === 1 ? 'disabled' : ''" @click.prevent="goToFirstPage">首页</a>
    <a
      :class="currentPage === 1 ? 'disabled' : ''"
      :disabled="currentPage === 1 ? true : false"
      @click.prevent="prevClick"
    >
      <Duyi-Icon icon="angles-left" />
    </a>
    <!-- 上一页 -->
    <!-- 接下来我们的重点就是中间应该如何进行渲染 -->
    <!-- 我们需要根据计算出来的 pager 来进行渲染 -->
    <a v-if="total > pagerCount && currentPage > 5" @click.prevent="pageClick(1)">1</a>
    <a v-if="total > pagerCount && currentPage > 5">
      <Duyi-Icon icon="ellipsis" size="sm" />
    </a>
    <a
      v-for="page in pager"
      :key="page"
      :class="page === currentPage ? 'active' : ''"
      @click.prevent="pageClick(page)"
      >{{ page }}</a
    >
    <a v-if="total > pagerCount && currentPage < total - 4">
      <Duyi-Icon icon="ellipsis" size="sm" />
    </a>
    <a v-if="total > pagerCount && currentPage < total - 4" @click.prevent="pageClick(total)">
      {{ total }}
    </a>
    <!-- 下一页 -->
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="nextClick"
      :disabled="currentPage === total ? true : false"
    >
      <Duyi-Icon icon="angles-right" />
    </a>
    <!-- 尾页 -->
    <a :class="currentPage === total ? 'disabled' : ''" @click.prevent="goToLastPage">尾页</a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import propObj from './props'
defineOptions({
  name: 'Duyi-Pager'
})
const props = defineProps(propObj)

// 接下来我们需要对页面进行相关的计算
const pager = computed(() => {
  // 该数组用于存放要渲染的页码
  const renderPage = []
  // 接下来就需要根据情况来进行判断了
  // 可以全部渲染的情况
  if (props.total <= props.pagerCount) {
    for (let i = 1; i <= props.total; i++) {
      renderPage.push(i)
    }
  } else {
    // 进入 else 说明总页码数是大于可渲染页面数，无法全部渲染，只能渲染一部分
    // 这里又分为三种情况
    // 当前页比较靠前：[1] 2 3 4 5 ... 20
    // 当前页比较靠中间：1 ... 5 6 [7] 8 9 ... 20
    // 当前页比较靠后：1 ... 16 17 18 19 [20]
    if (props.currentPage <= 5) {
      // 当前页比较靠前
      for (let i = 1; i <= 5; i++) {
        renderPage.push(i) // 1 2 3 4 5
      }
    } else if (props.currentPage >= props.total - 4) {
      // 当前页比较靠后
      for (let i = props.total - 4; i <= props.total; i++) {
        renderPage.push(i) // 16 17 18 19 20
      }
    } else {
      // 当前页比较靠中间
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        renderPage.push(i) // 5 6 7 8 9
      }
    }
  }

  return renderPage
})

const emit = defineEmits(['current-change'])

// 关于页码的跳转所对应的事件处理函数
// 无论是上一页，下一页、首页、尾页，还是点击具体的页码，做的事情都是一样的
// 都是要触发 current-change 事件，只不过传递的参数不一样
// 总之会将最新的当前页码传递给父组件，让父组件去处理

const goToFirstPage = () => {
  emit('current-change', 1)
}
const goToLastPage = () => {
  emit('current-change', props.total)
}

const prevClick = () => {
  if (props.currentPage === 1) return
  emit('current-change', props.currentPage - 1)
}

const nextClick = () => {
  if (props.currentPage === props.total) return
  emit('current-change', props.currentPage + 1)
}

const pageClick = (page) => {
  emit('current-change', page)
}
</script>

<style lang="scss" scoped></style>
