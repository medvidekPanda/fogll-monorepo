import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-select-type',
  templateUrl: './formly-select.component.html',
  styleUrls: ['./formly-select.component.scss'],
})
export class FormlySelectTypeComponent extends FieldType implements OnInit {
  selectOptions?: any[];

  ngOnInit() {
    this.selectOptions = this.field.templateOptions?.options as any[];
  }

  change(event: number) {
    this.formControl.setValue(event);
  }
}
