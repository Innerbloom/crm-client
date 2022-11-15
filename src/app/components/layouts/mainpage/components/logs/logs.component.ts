import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../../services/data.service";
import {Logs} from "../../../../../services/interfaces";
import * as echarts from "echarts";
import {Subscription} from "rxjs";



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

  columnDefs = [
    { headerName: 'USER NAME', field: 'username', flex: 1},
    { headerName: 'EVENT', field: 'event', flex: 1},
    { headerName: 'DATE', field: 'date', flex: 1}
  ];


  ngOnInit() {
    this.LoadLogs()
    this.LoadEcharts()
  }

  LoadLogs() {
    this.dataService.getLogs().subscribe(logs => this.logs = logs);
  }

  LoadEcharts(): void {
    const chartDom: HTMLElement = document.getElementById('e-chart') as HTMLElement;
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


    return {
      title: {
        text: 'Graphic login.'
      },
      tooltip: {},
      xAxis: [{
        type: 'category',
        data: login.x
      }],
      yAxis: {
      },
      series: [
        {
          name: 'Login',
          type: 'bar',
          data: login.y
        }
      ]
    };
  }
}
