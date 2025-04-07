import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [ReactiveFormsModule, NgFor],
})
export class UsersComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  masterServeice = inject(MasterService);
  allUser = signal<any[]>([]);
  constructor() {}

  ngOnInit() {
    this.getAllUser();
    this.createForm();
  }
  getAllUser() {
    this.masterServeice.getAllUser().subscribe((res) => {
      this.allUser.set(res.data);
    });
  }
  createForm(item?: any) {
    this.userForm = new FormGroup({
      userId: new FormControl(item ? item.userId : 0),
      userName: new FormControl(item ? item.userName : ''),
      emailId: new FormControl(item ? item.emailId : ''),
      fullName: new FormControl(item ? item.fullName : ''),
      password: new FormControl(item ? item.password : ''),
      role: new FormControl(item ? item.role : ''),
    });
  }
  onsave() {
    this.userForm.value;
    this.masterServeice.createUser(this.userForm.value).subscribe(
      (res) => {
        alert(res);
      },
      (error) => {
        alert(error);
      }
    );
  }

  onupdate(item: any) {
    this.createForm(item);
  }

  onUpdate() {
    const formvalue = this.userForm.value;
    formvalue.createdDate = new Date();
    formvalue.projectName = 'IncidentTracking';
    formvalue.refreshToken = new Date();
    formvalue.refreshTokenExpiryTime = new Date();
    this.masterServeice.updateUser(formvalue).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
        this.getAllUser()
      }
    });
    ;
  }
}
