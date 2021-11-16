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
import { FormlyArrayComponent } from './array/formly-array.component';
import { FormlyInputTypeComponent } from './input/formly-input.component';
import { MultiSchemaTypeComponent } from './multischema/formly-multischema.component';
import { ObjectTypeComponent } from './object/formly-object.component';
import { FormlySelectTypeComponent } from './select/formly-select.component';

@NgModule({
  declarations: [
    FormlyArrayComponent,
    MultiSchemaTypeComponent,
    ObjectTypeComponent,
    FormlySelectTypeComponent,
    FormlyInputTypeComponent,
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
        { name: 'array', component: FormlyArrayComponent },
        { name: 'multischema', component: MultiSchemaTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'enum', component: FormlySelectTypeComponent },
        { name: 'select', component: FormlySelectTypeComponent },
        { name: 'string', extends: 'input' },
        { name: 'input', component: FormlyInputTypeComponent },
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
