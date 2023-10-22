// 动态表单类型
type WidgetType = 'input' | 'textarea';

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
type WidgetExtraPublicItem = {
  type: ExtraType;
  label: string;
  key: string;
  value: string | number;
  options?: ExtraOptionsObject[];
};

// 公共属性
type ExtraPublicType = 'label' | 'placeholder' | 'status' | 'defaultValue';

// 表单私用属性
type WidgetExtraPrivateItem = {
  type: ExtraType;
  key: string;
  label: string;
  value: string | number | Array;
  options?: ExtraOptionsObject[];
};

// 私用属性
type ExtraPrivateType = 'options' | 'unit' | 'decimal' | 'startDate' | 'endDate' | 'timeFormatType' | 'timeOptionType';

// 单个条件列表对象
declare type WidgetItem = {
  type: WidgetType; // 装置的类型
  label: string; // 装置的名称
  props: {
    privateList: WidgetExtraPrivateItem[];
    publicList: WidgetExtraPublicItem[];
    rulesList: WidgetExtraRulesItem[];
  };
};

// Render 类型
type RenderPropsType = ExtraRulesType | ExtraPublicType | ExtraPrivateType;

// 属性类型
declare type RenderPropsItem = Partial<Record<RecordPropsType, number | boolean | string | Array>>;

// 1 可编辑、2 只读、3 隐藏
declare type FormItemStatusType = 1 | 2 | 3;

// render 类型
declare type RenderItem = {
  label: string; // 属性名称
  componentKey: string; // 控件标识
  reloadKey?: string; // 控件是否刷新
  sortAllIndex?: string; // 完整的排序
  type: WidgetType; // 校验类型
  props: RenderPropsItem; // 附加属性
  status?: FormItemStatusType; // 回显表单时的状态
  value?: string | number;
};

declare type WidgetDropItem = {
  name: string;
  type: WidgetType; // 装置类型
  date: WidgetItem[];
};

// 单个组件库类别对象
declare type WidgetCateItem = {
  name: string; // 名称
  list: WidgetDropItem[];
};
