import { MasterService } from './../../services/master.service';
import { Component, inject, OnInit } from '@angular/core';
import { logModel, logRes } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css'],
  imports:[FormsModule]
})
export class LogInComponent implements OnInit {

  logForm : logModel = new logModel();
  router = inject(Router)
  constructor(private MasterService:MasterService) { }

  ngOnInit() {
  }
  onSave(){
    this.MasterService.getLogIn(this.logForm).subscribe((res:logRes)=>{
      if(res.result){
        alert(res.message)
        localStorage.setItem("userdata",JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard')
      }else{
        alert(res.message);

      }
    },error=>{
      alert("api error"+error)
    })
  }
}
