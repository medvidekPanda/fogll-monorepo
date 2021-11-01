import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';

import { ArrayListComponent } from './formly-types/array-list/array-list.component';
import { CheckboxListComponent } from './formly-types/checkbox-list/checkbox-list.component';
import { ModalHeaderComponent } from './modal-header/modal-header.component';

@NgModule({
  declarations: [
    CheckboxListComponent,
    ModalHeaderComponent,
    ArrayListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      types: [
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        { name: 'array-list', component: ArrayListComponent },
        { name: 'checkbox-list', component: CheckboxListComponent },
      ],
    }),
    FormlyIonicModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ArrayListComponent,
    CheckboxListComponent,
    FormsModule,
    FormlyModule,
    FormlyIonicModule,
    IonicModule,
    ModalHeaderComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
