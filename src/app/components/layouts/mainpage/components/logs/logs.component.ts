import {Component, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../../../../services/data.service";
import {Logs} from "../../../../../services/interfaces";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  sideNavStatus: boolean = false;

  logs!: Logs[];

  constructor(private dataService: DataService) {}


  ngOnInit() {
    this.dataService.getLogs().subscribe(logs => this.logs = logs);
  }

}

