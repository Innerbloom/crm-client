import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Partners} from "../../../../../../services/interfaces";
import {BehaviorSubject, Observable} from "rxjs";
import {values} from "ag-grid-community/dist/lib/utils/generic";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-ag-greed-partners',
  templateUrl: './ag-grid-partners.component.html',
  styleUrls: ['./ag-grid-partners.component.scss']
})
export class AgGridPartnersComponent implements OnInit, OnChanges {

  @Input() partners: Partners[] = [];
  @Input() columnDef: any[] = []


  gridApi: any;
  gridColumnApi: any;

  constructor() { }

  OnGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    window.onresize = () => {
      this.gridApi.sizeColumnsToFit();
    }
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}