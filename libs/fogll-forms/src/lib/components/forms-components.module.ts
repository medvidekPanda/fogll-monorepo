import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbSelectModule,
  NbSidebarModule
} from '@nebular/theme';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormArrayComponent } from './array/form-array.component';
import { FormInputTypeComponent } from './input/form-input.component';
import { FormMultiSchemaTypeComponent } from './multischema/form-multischema.component';
import { FormObjectTypeComponent } from './object/form-object.component';
import { FormSelectTypeComponent } from './select/form-select.component';

@NgModule({
  declarations: [
    FormArrayComponent,
    FormInputTypeComponent,
    FormSelectTypeComponent,
    FormSelectTypeComponent,
    FormMultiSchemaTypeComponent,
    FormObjectTypeComponent,
  ],
  imports: [
    CommonModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbSelectModule,
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
    FormlyModule,
    ReactiveFormsModule,
  ]
})
export class FogllFormsModule {}
