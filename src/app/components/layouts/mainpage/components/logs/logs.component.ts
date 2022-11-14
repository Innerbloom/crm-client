import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../../services/data.service";
import {Logs} from "../../../../../services/interfaces";
import * as echarts from "echarts";
import {Subscription} from "rxjs";
import {GridApi, GridReadyEvent} from "ag-grid-community";



@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  sideNavStatus: boolean = false;
  subscription!: Subscription

  public logs!: Logs[];

  constructor(private dataService: DataService) {
  }

  public columnDefs = [
    { headerName: 'Username', field: 'username', flex: 1, enableRangeSelection: true},
    { headerName: 'Event', field: 'event', flex: 1, enableRangeSelection: true},
    { headerName: 'Date', field: 'date', flex: 1, enableRangeSelection: true}
  ];


  ngOnInit() {
    this.LoadLogs()
    this.LoadEcharts();
  }

  LoadLogs() {
    this.dataService.getLogs().subscribe(logs => this.logs = logs);
  }

  LoadEcharts(): void {
    const chartDom: HTMLElement = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);

    this.subscription = this.dataService.getLogs().subscribe(data => {
      myChart.setOption(this.initBasicEcharts(data))
    })
  }

  initBasicEcharts(data: Logs[]) {

    const result: any = {};

    data.forEach(el => {
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

    const login = {
      x: Object.keys(result.Login),
      y: Object.values(result.Login)};

    const reg = {
      c: Object.keys(result.Registration),
      z: Object.values(result.Registration)};

    return {
      title: {
        text: 'Graphic login and registration.'
      },
      tooltip: {},
      xAxis: [{
        type: 'category',
        data: (login.x, reg.c)
      }],
      yAxis: {
      },
      series: [
        {
          name: 'Login',
          type: 'bar',
          data: login.y
        },
        {
          name: 'Registration',
          type: 'bar',
          data: reg.z
        }
      ]
    };
  }
}

