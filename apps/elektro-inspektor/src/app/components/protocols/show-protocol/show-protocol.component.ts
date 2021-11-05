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
    const definition = localStorage.getItem('definition');
    const finalModel = localStorage.getItem('finalModel');
    if (definition) {
      console.log('definition', definition)
      this.fields = JSON.parse(definition);
    }
    if (finalModel) {
      console.log('finalModel', finalModel)
      this.model = JSON.parse(finalModel);
    }
  }

  submit() {
    console.log('model', this.model);
    console.log('form', this.form);
  }
}
