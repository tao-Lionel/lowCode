<script setup lang="ts">
import widgetList from './widgetList.vue';
import renderList from './renderList.vue';
</script>

<template>
  <div class="flex m-5">
    <!-- 控件 -->
    <div class="w-1/4 mr-5 box">
      <widgetList></widgetList>
    </div>
    <!-- 渲染 -->
    <div class="w-1/2 mr-5 box"><renderList></renderList></div>
    <!-- 属性 -->
    <div class="w-1/4 box">123</div>
  </div>
</template>

<style scoped lang="scss"></style>
