import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog-partners',
  templateUrl: './dialog-partners.component.html',
  styleUrls: ['./dialog-partners.component.scss']
})
export class DialogPartnersComponent implements OnInit {

  partnersForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.partnersForm = this.formBuilder.group({
      username: ['', Validators.required],
      status: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  addPartner() {
    console.log(this.partnersForm.value)
  }

}
