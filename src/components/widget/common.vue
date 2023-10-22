<template>
  <div>
    <div>
      <div>{{ item?.props.label }}</div>
    </div>

    <!-- 控件展示 -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';

const props = defineProps({
  item: {
    type: Object as PropType<RenderItem>,
    require: true
  }
});

const item = ref(props.item);
</script>

<style scoped lang="scss"></style>
