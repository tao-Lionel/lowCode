declare type ExtraOptionsObject = {
  key: number | string;
  value: string;
};

// 属性的表单类型
type ExtraType = 'input' | 'inputNumber' | 'select' | 'radio' | 'selectMultiple' | 'checkbox' | 'options' | 'date';

// 表单规则对象
type WidgetExtraRulesItem = {
  type: ExtraType;
  key: string;
  value: string | number | boolean;
  message: string;
  options?: ExtraOptionsObject[];
};

// 规则属性
type ExtraRulesType = 'required' | 'maxValue' | 'minValue';

// 表单公共属性
type widgetExtraPublicItem = {
  type: ExtraType;
  label: string;
  key: string;
  value: string | number;
  options?: ExtraOptionsObject[];
};

// 公共属性
type ExtraPublicType = 'label' | 'placeholder' | 'status' | 'defaultValue';

// 表单私用属性
type widgetExtraPrivateItem = {
  type: ExtraType;
  key: string;
  label: string;
  value: string | number | Array;
  options?: ExtraOptionsObject[];
};

// 私用属性
type ExtraPrivateType = 'options' | 'unit' | 'decimal' | 'startDate' | 'endDate' | 'timeFormatType' | 'timeOptionType';
