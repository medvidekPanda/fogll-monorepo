import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-array-list',
  templateUrl: './array-list.component.html',
  styleUrls: ['./array-list.component.scss'],
})
export class ArrayListComponent extends FieldType implements OnInit {
  items = [];

  constructor() {
    super();
   }

  ngOnInit() {
    const key = this.field.key as string;
    this.items = this.model[key];
  }

}
