<template>
  <div @click="handleRender">
    <component :is="`r-` + item.type" :item="item"></component>
    <div>
      <span>删除</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
