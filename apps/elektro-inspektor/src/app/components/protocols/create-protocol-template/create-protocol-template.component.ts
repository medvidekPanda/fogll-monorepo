import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'inspektor-show-protocol',
  templateUrl: './create-protocol-template.component.html',
  styleUrls: ['./create-protocol-template.component.scss'],
})
export class CreateProtocolTemplateComponent {
  form = new FormGroup({});
  model = {
    protocolRow: [
      {
        protocolCol: [
          { key: 'key1', type: 'input', label: 'label1' },
          { key: 'key2', type: 'input', label: 'label2' },
          { key: 'key3', type: 'input', label: 'label3' },
        ],
      },
      {
        protocolCol: [
          { key: 'key4', type: 'input', label: 'label4' },
          { key: 'key5', type: 'input', label: 'label5' },
        ],
      },
    ],
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'protocolRow',
      type: 'array',
      templateOptions: {
        addText: 'Přidat nový řádek',
        removeText: 'Odstranit řádek',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'array',
            key: 'protocolCol',
            className: 'form-row',
            templateOptions: {
              addText: 'Přidat nový element',
              removeText: 'Odstranit element',
              isRow: true,
            },
            fieldArray: {
              fieldGroup: [
                {
                  type: 'input',
                  key: 'element',
                  templateOptions: {
                    label: 'Element',
                  },
                },
                {
                  type: 'input',
                  key: 'key',
                  templateOptions: {
                    label: 'Klíč',
                  },
                },
                {
                  type: 'input',
                  key: 'value',
                  templateOptions: {
                    label: 'Hodnota',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ];

  submit() {
    // console.log('model', this.model);
    this.createDefinition();
    this.createFinalModel();
  }

  createDefinition() {
    const definition = this.model.protocolRow.flatMap((cols: any) => {
      const group = {
        fieldGroupClassName: 'form-row',
        fieldGroup: cols.protocolCol.map((col: any) => {
          return {
            type: col.type || "input",
            key: col.key,
            templateOptions: {
              label: col.label,
            },
          };
        }),
      };
      return group;
    });

    console.log('definition', definition);
    localStorage.setItem('definition', JSON.stringify(definition));
  }

  createFinalModel() {
    let finalModel = {};
    const model = this.model.protocolRow.flatMap((cols: any) => {
      return cols.protocolCol.map((col: any) => {
        return { [col.key]: col.value || "hodnota" };
      });
    });
    for (const element of model) {
      finalModel = { ...element, ...finalModel };
    }
    console.log('model2', finalModel);
    localStorage.setItem('finalModel', JSON.stringify(finalModel));
  }
}
