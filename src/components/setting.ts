// 初始化组件排序
const initWidgetSort = (list: RenderItem[], parentSortIndex = ''): RenderItem[] => {
  list.forEach((item: RenderItem, index: number) => {
    item.sortAllIndex = parentSortIndex + index + ',';
    // if (item.children) {
    //   const childrenList = initWidgetSort(item.children, item.sortAllIndex);
    //   item.children = childrenList;
    // }
  });
  return list;
};

const getRenderMap = (list: RenderItem[], map: Map<string, RenderItem>) => {
  list.forEach((item: RenderItem) => {
    map.set(item.componentKey, item);
  });
};

export { initWidgetSort, getRenderMap };
