<template>
  <div>
    <div class="render-nav">
      <a-button>保存</a-button>
    </div>

    <div class="render-content">
      <Draggable
        :key="renderList.length"
        v-model:list="renderList"
        :animation="100"
        :group="{ name: 'widget', put: true }"
        :swap-threshold="0.7"
        class="render-box"
        :class="renderList.length > 0 ? '' : 'render-default'"
        filter=".disdraggable"
        ghost-class="ghost"
        item-key="key"
      >
        <template #item="{ element, index }">
          <div
            class="render-item"
            :class="element.componentKey === selectKey ? 'render-select' : ''"
            :style="getColumnStyle(element)"
            @click.stop="() => selectRender(element)"
          >
            <render-item
              :key="element.reloadKey + '_' + element.componentKey"
              :component-key="element.componentKey"
              :index="index"
            >
            </render-item>
          </div>
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable-es';
import RenderItem from './renderItem.vue';
import { ref, watch, inject } from 'vue';

const props = defineProps({
  list: {
    type: Array as PropType<Array<RenderItem>>,
    required: true
  }
});

const renderList = ref(props.list ? props.list : []);
const selectKey = ref('');

const formAsyncSelectKeyFn = (key: string) => {
  selectKey.value = key;
};

//注入动态表单公用方法
const dynamicFormEmitter = inject<Emitter>('dynamicFormEmitter');

dynamicFormEmitter && dynamicFormEmitter.emit('addAsyncRenderFn', formAsyncSelectKeyFn);

// 行内样式
const getColumnStyle = (item: RenderItem) => {
  if (item.type === 'contain' || item.type === 'table') {
    return `width: 100%;`;
  }
  if (item.parentType === 'contain') {
    const { formObject } = item;
    let { formColumn } = formObject;
    formColumn === undefined && (formColumn = 3);
    return `width: ${(100 / formColumn).toFixed(2)}%;`;
    // return `width: 100%;`
  }
  return `width: 50%;`;
};

const selectRender = (item: RenderItem) => {
  dynamicFormEmitter.emit('selectRenderFn', item);
};

watch(
  () => props.list,
  (val) => {
    renderList.value = val;
  }
);
</script>

<style scoped lang="scss">
.render-select {
  background: #ee964a3d;
  border: 1px solid #ee964a;
}
.render-list {
  width: 100%;
}

.render-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  min-height: 100vh;
}

.render-item {
  position: relative;
  margin-bottom: 25px;
}

.render-default {
  min-height: 300px;
}
</style>
