import { publicObject, rulesObject } from '../common';

const obj: WidgetItem = {
  type: 'input',
  label: '单行文本',
  props: {
    publicList: [publicObject.label, publicObject.placeholder, publicObject.status, publicObject.defaultValue],
    privateList: [],
    rulesList: [rulesObject.required]
  }
};

export default obj;
