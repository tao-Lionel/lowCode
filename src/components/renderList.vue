<template>
  <div>
    <a-button>保存</a-button>

    <div>
      <Draggable
        :key="renderList.length"
        v-model:list="renderList"
        :animation="100"
        :group="{ name: 'widget', put: true }"
        :swap-threshold="0.7"
        :class="renderList.length > 0 ? 'render-box' : 'render-box render-default'"
        filter=".disdraggable"
        ghost-class="ghost"
        item-key="key"
      >
        <template #item="{ element, index }">
          <div
            :class="element.componentKey === selectKey ? 'render-select render-item' : 'render-item'"
            :style="getColumnStyle(element)"
            @click.stop="() => selectRender(element)"
          ></div>
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable-es';
import RenderItem from './ren';
</script>

<style scoped lang="scss"></style>
