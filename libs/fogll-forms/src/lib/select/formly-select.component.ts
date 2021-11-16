import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-select-type',
  templateUrl: './formly-select.component.html',
  styleUrls: ['./formly-select.component.scss'],
})
export class FormlySelectTypeComponent extends FieldType {
  change(event: number) {
    this.formControl.setValue(event);
  }
}
