export type OriginDataItem = {
  name?: string;
  w?: number;
  h?: number;
  left?: number;
  right?: number;
  top?: number;
  zoom?: [number, number, number];
};

// 数据源
export const widgetLayout: OriginDataItem[] = [
  {
    name: "xxxx",
    w: 300,
    h: 200,
    left: 0,
    top: 0
  },
  {
    name: "zzzz",
    w: 300,
    h: 300,
    left: 0,
    top: 200
  },
  {
    name: "yyyyyy",
    w: 300,
    h: 350,
    left: 0,
    top: 500
  },
  {
    name: "qqqq",
    w: 300,
    h: 230,
    left: 0,
    top: 850
  },
  {
    name: "test",
    w: 300,
    h: 230,
    right: 0,
    top: 850
  }
];

// 设计宽度
export const designWidth = 1920;
// 设计高度
export const designHeight = 1080;
