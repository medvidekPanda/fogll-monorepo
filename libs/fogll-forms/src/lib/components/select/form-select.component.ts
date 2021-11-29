import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'form-select-type',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
})
export class FormSelectTypeComponent extends FieldType {
  change(event: number) {
    this.formControl.setValue(event);
  }
}
