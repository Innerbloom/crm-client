import { Component, OnInit } from '@angular/core';
import {EChartsOption} from "echarts";
import * as echarts from 'echarts';
import {DataService} from "../../../../../../services/data.service";
import {Logs} from '../../../../../../services/interfaces';
import {Subscription} from "rxjs";
@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent implements OnInit {
  sideNavStatus: boolean = false;
  subscription!: Subscription;
  option!: EChartsOption;

  constructor(private dataService: DataService) {
  }


  ngOnInit(): void {
    const chartDom: HTMLElement = document.getElementById('main') as HTMLElement;
    const myChart = echarts.init(chartDom);
    this.subscription = this.dataService.getLogs().subscribe(data => {
      myChart.setOption(this.initBasicEchart(data))
    })
  }

  private initBasicEchart(data: Logs[]) {

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
      xAxis: {
        type: 'category',
        data: (reg.c, login.x)
      },
      yAxis: {
      },
      series: [
        {
          name: 'Login',
          type: 'bar',
          data: login.y,
        },
        {
          name: 'Registration',
          type: 'bar',
          data: reg.z,
        }
      ]
    };
  }
}
