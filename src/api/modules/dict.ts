import { http } from "@/utils/http";
import { prefix } from "../prefix";

// 字典列表参数
export interface DictListParams {
  pageNum?: number;
  pageSize?: number;
  keyword?: string;
}

// 字典
export interface DictsItem {
  dictId?: string;
  dictName?: string;
  dictType?: number; // 字典类型：0-字符型，1-数字型
  dictCode?: string;
  description?: string;
}

// 字典列表返回
export interface ReturnDictList {
  total?: number;
  list?: DictsItem[];
  currentPage?: number;
  totalPage?: number;
}

// 字典项
export interface DictItem {
  description?: string;
  dictId?: string;
  id?: string;
  itemName?: string;
  itemValue?: string;
  sort?: number;
}

// 字典项参数
export interface DictItemsParams extends DictListParams {
  dictId?: string;
}

// 字典项返回
export interface ReturnDictItems {
  total?: number;
  list?: DictItem[];
  currentPage?: number;
  totalPage?: number;
}

export type DictNoPageParams = Pick<DictListParams, "keyword">;

// ===== 分页查询字典 =====
export const getDictByPage = (params: DictListParams) =>
  http.get<DictListParams, ReturnDictList>(`${prefix.sys}/dict/page`, {
    params
  });

// ===== 新增字典项 =====
export const addDictItem = (data: DictsItem) =>
  http.post<DictItem, any>(`${prefix.sys}/dict/item`, {
    data
  });

// ===== 修改字典项 =====
export const updateDictItem = (data: DictsItem) =>
  http.put<DictItem, any>(`${prefix.sys}/dict/item`, {
    data
  });

// ===== 删除字典项 =====
export const deleteDictItem = (dictId: string) =>
  http.delete<
    {
      ids: string[];
    },
    any
  >(`${prefix.sys}/dict/item`, {
    data: {
      ids: [dictId]
    }
  });
