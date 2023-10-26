<template>
  <div class="flex m-5">
    <!-- 控件 -->
    <div class="w-1/4 mr-5 box">
      <WidgetList></WidgetList>
    </div>
    <!-- 渲染 -->
    <div class="w-1/2 mr-5 box">
      <RenderList :list="renderList"></RenderList>
    </div>
    <!-- 属性 -->
    <div class="w-1/4 box">
      <AttrList v-if="attrKey" :key="attrKey" :attr-key="attrKey"></AttrList>
    </div>
  </div>
</template>

<script setup lang="ts">
import WidgetList from './widgetList.vue';
import RenderList from './renderList.vue';
import AttrList from './attrList.vue';
import { initWidgetSort, getRenderMap } from './setting.ts';
import { Emitter } from './emitter';
import { provide, ref, reactive, watch } from 'vue';
import { getRandomNumber } from '../utils.ts';

const props = defineProps({
  defaultData: {
    type: String,
    default: ''
  }
});

const emitter = new Emitter();

const defaultData: RenderItem[] = props.defaultData ? JSON.parse(props.defaultData) : [];

// 渲染的数据
const renderList = ref(initWidgetSort(defaultData));
const renderMap = new Map<string, RenderItem>();
const renderResMap = ref(getRenderMap(renderList.value, renderMap));

const getRenderList = () => {
  // 获取最新的renderList
  return renderList.value;
};

const getRenderResMap = () => {
  // 获取最新的renderResMap
  return renderResMap.value;
};

// 组件对应的属性key
const attrKey = ref('');

const asyncRenderIndexFnList = ref([]);

const addAsyncRenderFn = (fn: Function) => {
  asyncRenderIndexFnList.value.push(fn);
};

// 选择组件
const selectRenderFn = (obj: RenderItem) => {
  attrKey.value = obj.componentKey;
  console.log('attrKey', attrKey.value);
  // 同步所有组件的逻辑
  asyncRenderIndexFnList.value.forEach((fn: Function) => {
    fn(obj.componentKey);
  });
};

//添加render的方法
emitter.on('addAsyncRenderFn', (fn: Function) => {
  addAsyncRenderFn(fn);
});

// 注册选择组件方法
emitter.on('selectRenderFn', (obj: RenderItem) => {
  selectRenderFn(obj);
});

// 注册组件删除方法
emitter.on('deleteRenderItem', ({ index }: { index: number }) => {
  if (index !== undefined) {
    renderList.value.splice(index, 1);
  }
});

// 注册属性变化的方法
emitter.on('asyncAttrChangeFn', ({ key, propsItem }: { key: string; propsItem?: RenderPropsItem }) => {
  const renderItem = renderResMap.value.get(key);
  renderItem.reloadKey = getRandomNumber();
  if (propsItem) {
    renderItem.props = propsItem;
  }
  renderResMap.value.set(key, renderItem);

  const renderIndex = renderList.value.findIndex((item) => {
    return item.componentKey === renderItem.componentKey;
  });
  renderList.value[renderIndex] = renderItem;
});

provide('dynamicFormEmitter', emitter);
provide('getRenderResMap', getRenderResMap);

watch(
  () => renderList.value,
  (val: RenderItem[]) => {
    const renderMap = new Map<string, RenderItem>();
    const renderResultMap = getRenderMap(val, renderMap);
    renderResMap.value = renderResultMap;
  },
  {
    deep: true,
    immediate: true
  }
);
</script>

<style scoped lang="scss"></style>
