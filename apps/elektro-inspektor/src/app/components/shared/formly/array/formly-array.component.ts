import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  templateUrl: './formly-array.component.html',
  styleUrls: ['./formly-array.component.scss'],
})
export class FormlyArrayComponent extends FieldArrayType {}
