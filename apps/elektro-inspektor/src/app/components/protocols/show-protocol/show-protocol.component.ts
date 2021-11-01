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
  model = {
    test1: 'trtrtr',
    test3: 'refsdf',
    test2: 'fsdfds',
    test4: 'gtrgtrh',
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'form-row',
      fieldGroup: [
        {
          type: 'input',
          key: 'test1',
          templateOptions: {
            label: 'Test1',
          },
        },
        {
          type: 'input',
          key: 'test3',
          templateOptions: {
            label: 'Test3',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'form-row',
      fieldGroup: [
        {
          type: 'input',
          key: 'test2',
          templateOptions: {
            label: 'Test2',
          },
        },
        {
          type: 'input',
          key: 'test4',
          templateOptions: {
            label: 'Test4',
          },
        },
      ],
    },
  ];

  constructor() {
    this.fields = JSON.parse(localStorage.getItem('definition') || '');
    this.model = JSON.parse(localStorage.getItem('finalModel') || '');
  }

  submit() {
    console.log('model', this.model);
    console.log('form', this.form);
  }
}
