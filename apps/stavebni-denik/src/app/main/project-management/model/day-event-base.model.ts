export interface DayEventBase {
  _id: string;
  _rev: string;
  type: string;
  date: string;
  key: string;
  projectId: string;
}
