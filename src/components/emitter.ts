import { reactive, ref } from 'vue';

// 事件总线
export class Emitter {
  // 响应式的数据中心
  private state = reactive({});
  private events: any = ref({});

  // 用于注册事件
  on(eventName: string, eventHandle: Function) {
    this.events[eventName] = eventHandle;
  }

  // 删除事件
  off(eventName: string) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }

  // 触发事件
  emit(eventName: string, ...rest: any[]) {
    if (this.events[eventName]) {
      this.events[eventName](...rest);
    }
  }
}
