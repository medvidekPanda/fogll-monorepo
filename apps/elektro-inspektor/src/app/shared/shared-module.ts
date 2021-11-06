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
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyArrayComponent } from '../components/shared/formly/array/formly-array.component';
import { FormlyInputTypeComponent } from '../components/shared/formly/input/formly-input.component';
import { MultiSchemaTypeComponent } from '../components/shared/formly/multischema/formly-multischema.component';
import { ObjectTypeComponent } from '../components/shared/formly/object/formly-object.component';
import { FormlySelectTypeComponent } from '../components/shared/formly/select/formly-select.component';

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
    FlexLayoutModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule,
    NbInputModule,
    NbSelectModule,
    NbThemeModule.forRoot({ name: 'default' }),
    ReactiveFormsModule,
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
    FormlyBootstrapModule,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    NbSelectModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
  ],
})
export class SharedModule {}
