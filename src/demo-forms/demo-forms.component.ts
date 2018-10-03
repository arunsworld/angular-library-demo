import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Select2Component, Select2Data, DatetimePickerComponent } from 'projects/library/public_api';
import * as moment from 'moment';

@Component({
  templateUrl: 'demo-forms.component.html',
  styles: []
})
export class DemoFormsComponent implements OnInit {

  signInForm: FormGroup;
  us_states: Array<Select2Data>;

  @ViewChild('usState') usStateElem: Select2Component;
  @ViewChild('myDateTime') myDateTime: DatetimePickerComponent;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.us_states = [
      new Select2Data('1', 'Texas'),
      new Select2Data('2', 'California')
    ];
    setTimeout(() => {
      const new_us_states = [
        new Select2Data('1', 'Karnataka'),
        new Select2Data('2', 'Assam'),
        new Select2Data('3', 'Kashmir'),
        new Select2Data('4', 'Kerela'),
        new Select2Data('5', 'New Delhi'),
        new Select2Data('6', 'Goa')
      ];
      this.us_states = new_us_states;
    }, 500);
    setTimeout(() => {
      this.myDateTime.set('5-Oct-2018');
    }, 1000);
  }

  createForm() {
    this.signInForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      address: null,
      state: [null, Validators.required],
      datetime: [null, Validators.required]
    });
  }

  reset_form() {
    this.signInForm.reset();
    this.usStateElem.reset();
    this.myDateTime.reset();
  }

  state_changed(new_state: Select2Data) {
    this.signInForm.patchValue({state: new_state});
    if (new_state !== null) {
      this.signInForm.markAsTouched();
    }
  }

  datetime_changed(new_date: null | Date) {
    this.signInForm.patchValue({datetime: new_date});
    if (new_date !== null) {
      this.signInForm.markAsTouched();
    }
  }

}
