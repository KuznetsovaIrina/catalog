export interface IGroup {
  comm: string;
  folder_id: string;
  name: string;
  parent: string;
  sort_index: string;
}

export interface IGroupWithChildrens {
  comm: string;
  folder_id: string;
  name: string;
  parent: string;
  sort_index: string;
  childrens: Array<IGroup>;
}

export interface IService {
  code: string;
  folder_id: string;
  group_c: string;
  group_p: string;
  id: number;
  name: string;
  order_addon_pack_id: string;
  price: string;
  price_id: string;
  sort_index: string;
  top_parent: string;
  unit: string;
  count?: number;
}
