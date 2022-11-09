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


  myChart = echarts.init(document.getElementById('main')!);
  option!: EChartsOption;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.subscription = this.dataService.getLogs().subscribe(data => {
      this.initBasicEchart(data);
    })
  }

  private initBasicEchart(data: Logs[]) {

    this.myChart.setOption({
      title: {
        text: 'ECharts Getting Started Example'
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }
}



/*    const result: any = {};

    data.forEach(el => {
      //const date = el.date.toDateString().substring(0, 10);
      if (!result [el.event]) {
        result[el.event] = {};
        if (!result[el.event]) {
          result[el.event] = 1;
        }
      } else {
        if (!result[el.event]) {
          result[el.event] = 1;
        } else {
          result[el.event] += 1;
        }
      }
    });*/

/*
const sortData = Object.keys(result).reduce((acc, key) => {
  acc[key] = Object.keys(result[key])
      .map(el => new Date(el).getTime())
      .sort((a, b) => a - b)
      .map(date => {
        return new Date(date).getFullYear() + '-' + ( new Date(date).getMonth() + 1 )
            + '-' + ( new Date(date).getDate() < 10 ? '0' + new Date(date).getDate() : new Date(date).getDate() );
      }).reduce((red, strDate) => {
        red[strDate] = result[key][strDate];
        return red;
      }, {} );
  return acc;
}, {});*/
