export interface DaySubEventFull {
  _id?: string;
  _rev?: string;
  type: string;
  parentEventId: string;
  title: string;
  author: string;
  description: string;
  createdDate: string;
  key?: string;
  editDate?: string;
  startTime?: string;
  endTime?: string;
  editedBy?: string;
  coAuthors?: [
    {
      id: string,
      name: string,
    }
  ];
}
