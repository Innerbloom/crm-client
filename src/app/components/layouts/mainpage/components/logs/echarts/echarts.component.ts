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


/*  dom = document.getElementById('main')!;
  myChart = echarts.init(this.dom, {
    renderer: 'canvas',
    useDirtyRect: false
  })*/

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.subscription = this.dataService.getLogs().subscribe(data => {
      this.initBasicEchart(data);
    })
  }

  private initBasicEchart(data: Logs[]) {

    const result: any = {};

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
    });

    this.option = {
      xAxis: {
        type: "category",
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [12, 25, 15, 17, 85],
          type: "bar",
        }
      ]
    }
  }
}





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
