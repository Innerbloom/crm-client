import {Component, OnInit} from '@angular/core';
import {Partners} from "../../../../../services/interfaces";
import {DataService} from "../../../../../services/data.service";
import {Subscription} from "rxjs";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogPartnersComponent} from "./dialog-partners/dialog-partners.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public subscription: Subscription = new Subscription();
  public partners: Partners[] = [];

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';

    dialogConfig.data = {
      id: 1,
      title: "Hello"
    }

      this.dialog.open(DialogPartnersComponent, dialogConfig)
  }

  columnDef = [
    { headerName: 'Partner Name', field: 'username', flex: 1 },
    { headerName: 'Date', field: 'date', flex: 1 },
    { headerName: 'Event', field: 'partnersEvent', flex: 1 },
    { headerName: 'Email', field: 'email', flex: 1 }
  ];

  ngOnInit(): void {
    const partner = this.dataService.getPartners().subscribe(partners => {
      this.partners = partners
    })

    this.subscription.add(partner)
  }

}
