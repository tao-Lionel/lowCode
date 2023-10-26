<template>
  <div>
    <component :is="`r-` + item.type" :item="item"></component>
    <div class="renderItem">
      <span class="renderItemText">{{ item.label }}</span>
      <DeleteOutlined @click="deleteItem()" />
    </div>
  </div>
</template>

<script setup lang="ts">
import rInput from './widget/input/render.vue';
import { inject, ref } from 'vue';

const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  componentKey: {
    type: String,
    required: true
  }
});

defineOptions({
  components: { rInput }
});

// 注入动态表单的公用方法
const getRenderResMapFn = inject<Function>('getRenderResMap');
const dynamicFormEmitter = inject<Function>('dynamicFormEmitter');

console.log('props.componentKey===', props.componentKey);
console.log(getRenderResMapFn());

const item: WidgetItem = ref(getRenderResMapFn().get(props.componentKey));

console.log('item=======', item);

const handleRender = (event: Event) => {
  event.stopPropagation();
};

const deleteItem = () => {
  dynamicFormEmitter.emit('deleteRenderItem', { index: props.index });
};
</script>

<style scoped lang="scss">
.renderItem {
  position: absolute;
  bottom: -25px;
  right: 0;
  display: none;
  z-index: 2;
  align-items: flex-end;
  cursor: pointer;
  .renderItemText {
    margin-right: 10px;
    color: gray;
  }
}
</style>
