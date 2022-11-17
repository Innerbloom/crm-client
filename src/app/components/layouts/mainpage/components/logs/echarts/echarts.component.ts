import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {EChartsOption} from "echarts";
import * as echarts from "echarts";
import {Chart} from "../../../../../../services/interfaces";


@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})


export class EchartsComponent implements AfterViewInit {

  @ViewChild('chartContainer', {static: false}) public chartContainer!: ElementRef;

  @Input() chart: Chart | undefined;


  ngAfterViewInit(): void {

    const chartDom: HTMLElement = this.chartContainer.nativeElement;

    const option: EChartsOption = {
      title: {
        text: this.chart ? this.chart.title: '',
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: this.chart ? this.chart.x: [],
      },
      yAxis: {
      },
      series: {
          name: this.chart ? this.chart.title: '',
          type: 'bar',
          data: this.chart ? this.chart.y: [],
        }
      }
      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
  }
}