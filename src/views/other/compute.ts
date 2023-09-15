import { widgetLayout, designHeight, type OriginDataItem } from "./data";

export const autoCompute = (clientW?: number, clientH?: number) => {
  clientW = clientW || document.body.clientWidth;
  clientH = clientH || document.body.clientHeight;
  const rateH = clientH / designHeight;
  const data: OriginDataItem[] = widgetLayout.map(item => {
    const { w, h, top, name } = item;
    // 判断是左还是右侧信息
    const isLeft = Object.keys(item).includes("left");
    return {
      name,
      w,
      h,
      top: top * rateH,
      left: isLeft ? 0 : clientW - w * rateH,
      zoom: [rateH, rateH, 1]
    };
  });
  return data;
};
