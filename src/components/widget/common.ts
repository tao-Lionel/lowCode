// 规则属性
export const rulesObject: Record<ExtraRulesType, WidgetExtraRulesItem> = {
  required: {
    type: 'input',
    key: 'required',
    value: 0,
    message: '必填',
    options: [
      {
        key: 1,
        value: '必填'
      },
      {
        key: 0,
        value: '非必填'
      }
    ]
  },
  maxValue: {
    type: 'input',
    key: 'maxValue',
    value: '',
    message: '最大值'
  },
  minValue: {
    type: 'input',
    key: 'minValue',
    value: '',
    message: '最小值'
  }
};

// 公共属性
export const publicObject: Record<ExtraPublicType, widgetExtraPublicItem> = {
  label: {
    type: 'input',
    key: 'label',
    label: '标题',
    value: '标题'
  },
  placeholder: {
    type: 'input',
    key: 'placeholder',
    label: '提示语',
    value: '请输入'
  },
  status: {
    type: 'select',
    key: 'status',
    label: '状态',
    value: 1,
    options: [
      {
        key: 1,
        value: '正常'
      },
      {
        key: 0,
        value: '只读'
      }
    ]
  },
  defaultValue: {
    type: 'input',
    key: 'defaultValue',
    label: '默认值',
    value: ''
  }
};

// 私有属性
export const PrivateObject: Record<ExtraPrivateType, widgetExtraPrivateItem> = {
  options: {
    type: 'options',
    label: '自定义选项',
    key: 'options',
    value: []
  },
  unit: {
    type: 'input',
    key: 'unit',
    label: '单位',
    value: ''
  },
  decimal: {
    type: 'inputNumber',
    label: '小数位数',
    key: 'decimal',
    value: ''
  },
  startDate: {
    type: 'date',
    key: 'startDate',
    label: '默认开始时间',
    value: ''
  },
  endDate: {
    type: 'date',
    key: 'endDate',
    label: '默认结束时间',
    value: ''
  },
  timeFormatType: {
    type: 'date',
    key: 'timeFormatType',
    label: '显示格式',
    value: 0,
    options: [
      {
        key: 1,
        value: '年月日 时分秒'
      },
      {
        key: 0,
        value: '年月日'
      }
    ]
  },
  timeOptionType: {
    type: 'date',
    key: 'timeOptionType',
    label: '类型',
    value: '',
    options: [
      {
        key: 1,
        value: '可选今天之后(含今天)'
      },
      {
        key: 0,
        value: '无限制'
      }
    ]
  }
};
