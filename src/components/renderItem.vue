<template>
  <div @click="handleRender">
    <component :is="`r-` + item.type" :item="item"></component>
    <div>
      <span>删除</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import rInput from './widget/input/render.vue'



const handleRender = (event:Event){
  event.stopPropagation()
}
</script>

<style scoped lang="scss"></style>
