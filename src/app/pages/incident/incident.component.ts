import { Component, inject, OnInit } from '@angular/core';
import { createINciModel } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  imports: [FormsModule],
})
export class IncidentComponent implements OnInit {
  incicreate: createINciModel = new createINciModel();
  masterService = inject(MasterService);
  logUserData: any;
  constructor() {

    this.logUserData = JSON.parse(localStorage.getItem('userdata') || '{}');

  }

  ngOnInit() {}
  onsave() {
    debugger;
    const formvalue = this.incicreate;
    this.incicreate.createdBy = this.logUserData.userId;


    this.masterService.createIncident(this.incicreate).subscribe((res: any) => {
     confirm(res.message)
    });
  }
}
