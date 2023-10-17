export interface IFilter {
  id: number | string;
  title: string;
  checked?: boolean;
}

export interface IFilterGroup {
  id: number;
  title: string;
  filters: Array<IFilter>;
}
