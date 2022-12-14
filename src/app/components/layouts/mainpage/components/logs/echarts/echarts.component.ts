import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {color, EChartsOption} from "echarts";
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
        textStyle: {
          color: '#2d6879'
        },
        text: this.chart ? this.chart.title: '',
        left: 90
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
        itemStyle: {
          borderWidth: 1,
          color: '#5fb993',
          borderType: 'solid',
          shadowBlur: 3
        }
        }
      }

      const myChart = echarts.init(chartDom);
      myChart.setOption(option);
  }
}
