<script setup lang="ts"></script>

<template>
  <a-input :key="item.componentKey" v-model:value="value" :placeholder="item.props.placeholder" :disabled="disabled" />
</template>

<style scoped lang="scss"></style>
