import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../../services/data.service";
import {Chart, Charts, Logs} from "../../../../../services/interfaces";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  sideNavStatus: boolean = false;

  public subscription: Subscription = new Subscription();
  public logs: Logs[] = [];
  public charts: Charts[] = [];
  public chart: Chart | undefined;


  constructor(private dataService: DataService) {

  }

  columnDefs = [
    { headerName: 'USER NAME', field: 'username', flex: 1 },
    { headerName: 'EVENT', field: 'event', flex: 1 },
    { headerName: 'DATE', field: 'date', flex: 1 }
  ];

  ngOnInit() {
    const subscribe = this.dataService.getLogs().subscribe(logs => {
      this.logs = logs

    const result: any = {};

    logs.forEach(el => {
       const date = el.date.toString().substring(0, 10);
      if (!result[el.event]) {
        result[el.event] = {};
        if (!result[el.event][date]) {
          result[el.event][date] = 1;
        }
      } else {
        if (!result[el.event][date]) {
          result[el.event][date] = 1;
        } else {
          result[el.event][date] += 1;
        }
      }
    });

    this.charts = Object.keys(result).reduce((acc: Charts[], event: string) => {

      const chart: Chart = {
        x: Object.keys(result[event]),
        y: Object.values(result[event]),
        title: event,
        };

      acc.push(chart);
      return acc;
    }, [] as Charts[]);
    });

    this.subscription.add(subscribe)
  }
}

