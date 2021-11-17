import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'inspektor-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.scss'],
})
export class SelectItemsComponent<T> {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'protocolRow',
      type: 'array',
      templateOptions: {
        addText: 'Nová položka',
        removeText: 'Odstranit položku',
      },
      fieldArray: {
        fieldGroupClassName: 'form-row',
        fieldGroup: [
          {
            type: 'input',
            key: 'value',
            templateOptions: {
              label: 'Hodnota',
            },
          },
          {
            type: 'input',
            key: 'label',
            templateOptions: {
              label: 'Název',
            },
          },
        ],
      },
    },
  ];

  constructor(protected dialogRef: NbDialogRef<T>) {}

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.model.protocolRow);
  }
}
