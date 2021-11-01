import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-enum-type',
  templateUrl: './formly-enum.component.html',
  styleUrls: ['./formly-enum.component.scss'],
})
export class EnumTypeComponent extends FieldType implements OnInit {
  selectOptions?: any[];

  ngOnInit() {
    this.selectOptions = this.field.templateOptions?.options as any[];
  }

  change(event: number) {
    this.formControl.setValue(event);
  }
}
