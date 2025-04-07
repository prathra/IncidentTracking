export class logModel {
  userName: string;
  password: string;

  constructor(){
    this.password = "";
    this.userName = ""
  }
}
export interface logRes {
  message: string
  result: boolean
  data: any
}
export class createINciModel {
  incidentId: number;
  title: string;
  description: string;
  priority: string;
  status: string;
  createdBy: number;
  assignedTo: null;
  createdDate: Date;
  resolvedDate: null;

  constructor(){
    this.incidentId = 0,
    this.title = '',
    this.description = '',
    this.priority = '',
    this.status = '',
    this.createdBy = 0,
    this.assignedTo = null,
    this.createdDate = new Date(),
    this.resolvedDate = null
  }
}
