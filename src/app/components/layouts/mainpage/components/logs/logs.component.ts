import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../../services/data.service";
import {Logs} from "../../../../../services/interfaces";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  sideNavStatus: boolean = false;

  constructor(private dataService: DataService) {}

  logs!: Logs[];

  columnDefs = [
    { headerName: 'Username', field: 'username' },
    { headerName: 'Event', field: 'event' },
    { headerName: 'Date', field: 'date' }
  ];



  ngOnInit() {
    this.dataService.getLogs().subscribe(logs => this.logs = logs);
  }

}
