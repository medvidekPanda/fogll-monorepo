import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { take } from 'rxjs';
import { SelectItemsComponent } from '../select-items/select-items.component';

interface ProtocolRow {
  protocolCol: ProtocolCol[];
}

interface ProtocolCol {
  dbKey: string;
  elementType: string;
  elementLabel: string;
}

interface FormModel {
  protocolLabel?: string;
  protocolRow?: ProtocolRow[];
}

@Component({
  selector: 'inspektor-show-protocol',
  templateUrl: './create-protocol-template.component.html',
  styleUrls: ['./create-protocol-template.component.scss'],
})
export class CreateProtocolTemplateComponent {
  form = new FormGroup({});
  model: FormModel = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'protocolRow',
      type: 'array',
      templateOptions: {
        addText: 'Nový řádek',
        removeText: 'Odstranit řádek',
        editItem: ($event: any) => {
          console.log($event)
          this.openWindow();
        }
      },
      fieldArray: {
        fieldGroupClassName: 'form-row',
        fieldGroup: [
          {
            type: 'array',
            key: 'protocolCol',
            className: 'form-row',
            templateOptions: {
              addText: 'Nová buňka',
              removeText: 'Odstranit element',
              isRow: true,
              editItem: ($event: any) => {
                console.log($event)
                this.openWindow();
              }
            },
            fieldArray: {
              fieldGroup: [
                {
                  type: 'select',
                  key: 'elementType',
                  defaultValue: 'input',
                  templateOptions: {
                    label: 'Typ elementu',
                    options: [
                      { label: 'Vstupní pole', value: 'input' },
                      { label: 'Textové pole', value: 'textarea' },
                      { label: 'Zaškrtávací pole', value: 'checkbox' },
                      { label: 'Radio button', value: 'radio' },
                      { label: 'Select', value: 'select' },
                    ],
                  },
                },
                {
                  type: 'input',
                  key: 'dbKey',
                  templateOptions: {
                    label: 'Databázový klíč',
                  },
                },
                {
                  type: 'input',
                  key: 'elementLabel',
                  templateOptions: {
                    label: 'Název',
                  },
                }
              ],
            },
          },
        ],
      },
    },
  ];

  selectValues: any[] = []

  constructor(private dialogService: NbDialogService) {
    this.loadDefaultForm();
  }

  clearStorage() {
    localStorage.clear();
  }

  openWindow() {
    const dialog = this.dialogService.open(
      SelectItemsComponent,
    );
    dialog.onClose.pipe(
      take(1)
    ).subscribe(res => this.selectValues = res);
  }

  submit() {
    this.saveDefaultForm();
    this.createDefinition();
  }

  private saveDefaultForm() {
    localStorage.setItem('deafultFields', JSON.stringify(this.fields));
    localStorage.setItem('deafultModel', JSON.stringify(this.model));
  }

  private createDefinition() {
    const definition = this.model.protocolRow?.flatMap((cols) => {
      const group = {
        fieldGroupClassName: 'form-row',
        fieldGroup: cols.protocolCol.map((col) => {
          return {
            type: col.elementType,
            key: col.dbKey,
            templateOptions: {
              label: col.elementLabel,
              options: this.selectValues
            },
          };
        }),
      };
      return group;
    });
    localStorage.setItem('definition', JSON.stringify(definition));
  }

  private loadDefaultForm() {
    const deafultFields = localStorage.getItem('deafultFields');
    const deafultModel = localStorage.getItem('deafultModel');
    if (deafultFields && deafultModel) {
      this.fields = JSON.parse(deafultFields);
      this.model = JSON.parse(deafultModel);
    }
  }
}
