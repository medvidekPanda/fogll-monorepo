import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'form-array-type',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent extends FieldArrayType {
  editItem(index: number) {
    this.to.editItem(this.model[index]);
  }
}
