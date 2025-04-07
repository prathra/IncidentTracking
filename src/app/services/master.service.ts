import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { logModel, logRes } from '../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  baseURL = "http://projectapi.gerasim.in/api/IncidentTracking/";
  http = inject(HttpClient);

  getLogIn(logData:logModel):Observable<logRes>{
    return this.http.post<logRes>(`${this.baseURL}login`,logData);
  }

  updateUser(logData:any){
    return this.http.post(`${this.baseURL}UpdateUser`,logData);
  }

  getAllUser(){
    return this.http.get<logRes>(`${this.baseURL}GetAllUsers`);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.baseURL}DeleteUserByUserId?userId=${id}`);
  }

  createUser(logData:any){
    return this.http.post<logRes>(`${this.baseURL}Register`,logData);
  }


  //incident
  createIncident(logData:any){
    return this.http.post<logRes>(`${this.baseURL}createIncident`,logData);
  }
}
