<script setup lang="ts">
import WidgetList from './widgetList.vue';
import RenderList from './renderList.vue';
import { initWidgetSort, getRenderMap } from './setting.ts';

const props = defineProps({
  defaultData: {
    type: String,
    default: ''
  }
});

const defaultData: RenderItem[] = props.defaultData ? JSON.parse(props.defaultData) : [];

const renderList = initWidgetSort(defaultData);
const renderMap = new Map<string, RenderItem>();
const renderResMap = getRenderMap(renderList, renderMap);
</script>

<template>
  <div class="flex m-5">
    <!-- 控件 -->
    <div class="w-1/4 mr-5 box">
      <WidgetList></WidgetList>
    </div>
    <!-- 渲染 -->
    <div class="w-1/2 mr-5 box"><RenderList></RenderList></div>
    <!-- 属性 -->
    <div class="w-1/4 box">123</div>
  </div>
</template>

<style scoped lang="scss"></style>
