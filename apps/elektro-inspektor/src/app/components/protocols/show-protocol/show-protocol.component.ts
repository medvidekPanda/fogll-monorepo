import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'inspektor-show-protocol',
  templateUrl: './show-protocol.component.html',
  styleUrls: ['./show-protocol.component.scss'],
})
export class ShowProtocolComponent {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  constructor() {
    const definition = localStorage.getItem('definition');
    if (definition) {
      this.fields = JSON.parse(definition);
    }
  }

  submit() {
    console.log('fields', this.fields);
    console.log('model', this.model);
    console.log('form', this.form);
  }
}
