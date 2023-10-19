<script setup lang="ts">
import renderCommon from '../common.vue';
</script>

<template>
  <renderCommon>
    <a-input
      :key="item.componentKey"
      v-model:value="value"
      :placeholder="item.props.placeholder"
      :disabled="disabled"
    />
  </renderCommon>
</template>

<style scoped lang="scss"></style>
