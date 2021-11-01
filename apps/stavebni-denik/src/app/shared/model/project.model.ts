export interface Project {
  _id?: string;
  _rev?: string;
  name: string;
  type: string;
  projectId: string;
  isChecked?: boolean;
}
