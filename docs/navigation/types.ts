export interface BookmarkCategory {
  id:number;
  title:string | number;
  icon?:string;
  description?:string;
  parentId:number;
  privately?:boolean; // 是否私有
  children?:BookmarkState[];
}

export interface BookmarkState {
  id:number;
  categoryId:number;
  title:string | number;
  url:string;
  icon:string;
  desc:string;
}

export interface StorageObj {
  id: number
  title: string
  list: any[]
  expiredTime: number
}

