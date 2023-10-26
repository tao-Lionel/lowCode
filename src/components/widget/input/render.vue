<template>
  <renderCommon :item="item">
    <a-input
      :key="renderState.item?.componentKey"
      v-model:value="renderState.value"
      :placeholder="renderState.item?.props.placeholder"
      :disabled="renderState.disabled"
    />
  </renderCommon>
</template>

<script setup lang="ts">
import { PropType, reactive, watch } from 'vue';
import renderCommon from '../common.vue';

defineOptions({
  name: 'rInput'
});

const props = defineProps({
  item: {
    type: Object as PropType<RenderItem>,
    require: true
  }
});

const emit = defineEmits(['update:value']);

const renderState = reactive({
  item: props.item,
  value: props.item?.value ? props.item.value : '',
  placeholder: props.item?.props.placeholder,
  disabled: props.item?.status === 1 ? false : true
});

watch(
  () => renderState.value,
  (val) => {
    emit('update:value', val);
  }
);
</script>

<style scoped lang="scss"></style>
