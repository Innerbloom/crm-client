import {Component, Input} from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-btn-cell-renderer',
  templateUrl: './btn-cell-renderer.component.html',
  styleUrls: ['./btn-cell-renderer.component.scss']
})
export class BtnCellRendererComponent implements ICellRendererAngularComp {

  @Input() row: any;

  agInit(row: any): void {
    this.row = row;
  }

  btnClickedHandler(row: any) {
    this.row.edit(this.row.data);
  }

  btnDeleteHandler(id: number) {
    this.row.delete(this.row.data.id)
  }

  refresh(params: any): boolean {
    return false;
  }
}
