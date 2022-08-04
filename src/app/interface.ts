export interface RegRes {

page:number,
per_page:number,
total:number,
total_pages:number,
data:datas[],
support:supports[]
}

export interface datas{
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar:string,
}

export interface supports{
  url:string,
  text:string,
}
