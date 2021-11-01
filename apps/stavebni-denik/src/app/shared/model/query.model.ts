export interface QueryDb {
  view: string;
  options?: {};
}
export interface QueryRows<T> {
  id: string;
  key: string;
  value: T;
}
export interface QueryResponse<T> {
  offset: number;
  rows: QueryRows<T>[];
  total_rows: number;
}
