<template>
  <div>
    <a-form name="basic">
      <a-form-item v-if="propsItem.hasOwnProperty('label')" label="标题">
        <a-input v-model:value="propsItem.label" :max-length="10" @change="() => onFormChange()" />
      </a-form-item>

      <a-form-item v-if="propsItem.hasOwnProperty('placeholder')" label="提示语">
        <a-input v-model:value="propsItem.placeholder" :max-length="30" @change="() => onFormChange()" />
      </a-form-item>

      <a-form-item v-if="propsItem.hasOwnProperty('status')" label="状态">
        <a-select
          v-model:value="propsItem.status"
          :options="extraObject['status'].options"
          @change="() => onFormChange()"
        ></a-select>
      </a-form-item>

      <a-form-item v-if="propsItem.hasOwnProperty('defaultValue')" label="默认值">
        <a-input-number
          v-if="mapItem.type === 'inputNumber'"
          v-model:value="propsItem.defaultValue"
          placeholder="请输入默认值"
          @change="() => onFormChange()"
        />
        <a-input
          v-else
          v-model:value="propsItem.defaultValue"
          placeholder="请输入默认值"
          @change="() => onFormChange()"
        />
      </a-form-item>

      <a-form-item v-if="propsItem.hasOwnProperty('unit')" label="单位">
        <a-input v-model:value="propsItem.unit" :max-length="4" @change="() => onFormChange()" />
      </a-form-item>

      <a-form-item v-if="propsItem.hasOwnProperty('decimal')" label="小数位数">
        <a-input-number v-model:value="propsItem.decimal" :max="6" @change="() => onFormChange()" />
      </a-form-item>

      <div class="">校验相关</div>

      <a-form-item v-if="propsItem.hasOwnProperty('required')" label="是否必填">
        <a-radio-group
          v-model:value="propsItem.required"
          :options="extraObject['required'].options"
          @change="() => onFormChange()"
        />
      </a-form-item>

      <a-form-item v-if="propsItem.hasOwnProperty('maxValue')" label="最大值">
        <a-input-number
          v-model:value="propsItem.maxValue"
          :min="propsItem.minValue ? (propsItem.maxValue ? propsItem.minValue : undefined) : undefined"
          @change="() => onFormChange()"
        />
      </a-form-item>

      <a-form-item v-if="propsItem.hasOwnProperty('minValue')" label="最小值">
        <a-input-number
          v-model:value="propsItem.minValue"
          :max="propsItem.maxValue ? propsItem.maxValue : undefined"
          @change="() => onFormChange()"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { deepClone } from '../utils.ts';
import { publicObject, privateObject, rulesObject } from './widget/common.ts';

const props = defineProps({
  attrKey: {
    type: String,
    required: true
  }
});

const dynamicFormEmitter = inject<Emitter>('dynamicFormEmitter');
const getRenderResMap = inject<Function>('getRenderResMap');

const mapItem: RenderItem = deepClone(getRenderResMap().get(props.attrKey));
const propsItem: RenderPropsItem = ref(mapItem.props);

const extraObject = ref({ ...publicObject, ...privateObject, ...rulesObject });

//监听表单变化
const onFormChange = () => {
  console.log(`onFormChange进来==============`);
  console.log(`监听到表单变化.renderState.propsItem=====`, props.attrKey, propsItem.value);
  dynamicFormEmitter.emit('asyncAttrChangeFn', {
    key: props.attrKey,
    propsItem: propsItem.value
  });
};
</script>

<style scoped lang="scss"></style>
