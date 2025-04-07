import { MasterService } from './../../services/master.service';
import { Component, OnInit } from '@angular/core';
import { logModel } from '../../models/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logIn',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css'],
  imports:[FormsModule]
})
export class LogInComponent implements OnInit {

  logForm : logModel = new logModel();
  constructor(private MasterService:MasterService) { }

  ngOnInit() {
  }
  onSave(){
    this.MasterService.getLogIn(this.logForm).subscribe((res)=>{
      if(res){
        alert("success")
        localStorage.setItem("userdata",JSON.stringify(res));
      }
    },error=>{
      alert("api error")
    })
  }
}
