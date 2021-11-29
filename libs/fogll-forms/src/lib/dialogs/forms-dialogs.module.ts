import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
} from '@nebular/theme';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormArrayComponent } from '../components/array/form-array.component';
import { FormObjectTypeComponent } from '../components/object/form-object.component';
import { FormInputTypeComponent } from '../components/input/form-input.component';
import { FormMultiSchemaTypeComponent } from '../components/multischema/form-multischema.component';
import { FormSelectTypeComponent } from '../components/select/form-select.component';
import { AddEditSelectItemsDialog } from './add-edit-select-items/add-edit-select-items.dialog';

@NgModule({
  declarations: [
    AddEditSelectItemsDialog,
  ],
  imports: [
    CommonModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbSelectModule,
    NbCardModule,
    FlexLayoutModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'array', component: FormArrayComponent },
        { name: 'multischema', component: FormMultiSchemaTypeComponent },
        { name: 'object', component: FormObjectTypeComponent },
        { name: 'enum', component: FormSelectTypeComponent },
        { name: 'select', component: FormSelectTypeComponent },
        { name: 'string', extends: 'input' },
        { name: 'input', component: FormInputTypeComponent },
      ],
    }),
    ReactiveFormsModule,
  ],
  exports: [
    AddEditSelectItemsDialog,
  ]
})
export class FormDialogsModule {}
