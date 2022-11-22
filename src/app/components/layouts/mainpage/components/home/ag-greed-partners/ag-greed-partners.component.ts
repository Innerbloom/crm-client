import {Component, Input, OnInit} from '@angular/core';
import {Partners} from "../../../../../../services/interfaces";

@Component({
  selector: 'app-ag-greed-partners',
  templateUrl: './ag-greed-partners.component.html',
  styleUrls: ['./ag-greed-partners.component.scss']
})
export class AgGreedPartnersComponent implements OnInit {

  @Input() partners: Partners[] = [];
  @Input() columnDef: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
