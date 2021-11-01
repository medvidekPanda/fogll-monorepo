import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
})
export class CheckboxListComponent extends FieldType {
  readonly itemOptions = this.to.options as any[];

  constructor() {
    super();
  }

  checkboxChange(event) {
    const key = this.key as string;
    const index = this.form.value[key].findIndex(
      (item: string) => item === event.detail.value
    );
    const array = this.form.value[key];

    if (index >= 0) {
      array.splice(index, 1);
    } else {
      array.push(event.detail.value);
    }

    const payload = { [key]: array };
    this.form.patchValue(payload);
  }
}
