<template>
  <div>
    <div>组件库</div>
    <div class="flex-col items-center">
      <template v-for="item in allWidgetConfig" :key="item.name">
        <div style="text-align: center">{{ item.name }}</div>

        <div v-for="cItem in item.list" :key="cItem.type">
          <!-- :filter="cItem.dragOnce ? '.disdraggable' : ''" -->
          <Draggable
            v-model:list="cItem.data"
            :clone="cloneData"
            :group="{ name: 'widget', pull: 'clone', put: false }"
            :sort="false"
            ghost-class="ghost"
            item-key="name"
            tag="div"
          >
            <template #item="{ element }">
              <div :key="element.name" class="">
                <div class="btn">
                  {{ element.label }}
                </div>
              </div>
            </template>
          </Draggable>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import allWidgetConfig from './widget/menu';
import Draggable from 'vuedraggable-es';
import { getRandomNumber } from '../utils';

function cloneData(obj: WidgetItem) {
  const { privateList, publicList, rulesList } = obj.props;

  const privateObject = privateList.reduce((prev: Record<string, any>, cur: WidgetExtraPrivateItem) => {
    if (cur.key === 'options') {
      return {
        ...prev,
        [cur.key]: [
          { key: `option_${getRandomNumber()}`, value: '选项1' },
          { key: `option_${getRandomNumber()}`, value: '选项2' }
        ]
      };
    }
    return { ...prev, [cur.key]: cur.value };
  }, {});

  const publicObject = publicList.reduce((prev: Record<string, any>, cur: WidgetExtraPublicItem) => {
    if (cur.key === 'label') {
      // 标题默认为类型
      cur.value = obj.label;
    }
    return { ...prev, [cur.key]: cur.value };
  }, {});

  const rulesObject = rulesList.reduce((prev: Record<string, any>, cur: WidgetExtraRulesItem) => {
    return { ...prev, [cur.key]: cur.value };
  }, {});

  const renderItem: RenderItem = {
    label: obj.label,
    componentKey: `${obj.type}_${getRandomNumber()}`,
    type: obj.type,
    props: {
      ...publicObject,
      ...privateList,
      ...rulesObject
    }
  };

  return renderItem;
}
</script>

<style scoped lang="scss">
.btn {
  width: 50%;
  border: 1px solid #e8e8e8;
  background-color: #f9f9f9;
  padding: 5px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
}
</style>
