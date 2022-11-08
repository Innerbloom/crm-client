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

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.subscription = this.dataService.getLogs().subscribe(data => {
      this.initBasicEchart(data);
    })
  }

  private initBasicEchart(charData: Logs[]) {
    console.log(JSON.stringify(charData))

    this.option = {
      tooltip: {
        show: true,
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        type: "value",
      },
      series: [{
        data: charData.map(m => ({
          name: m.event
        })),
        type: 'line'
      }]
    }
  }
}