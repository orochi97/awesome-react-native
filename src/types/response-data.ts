export type CheckDataRowInfo = {
  id: string;
  cip: string;
  cname: string;
  count: string;
  favor: string;
  referrer: string;
  createdAt: string;
  updatedAt: string;
};
export type CheckData = {
  data: any;
  type?: string;
  pageSize?: number;
  page?: number;
};
