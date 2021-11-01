import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbLayoutModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule
} from '@nebular/theme';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyArrayComponent } from '../components/shared/formly/array/formly-array.component';
import { EnumTypeComponent } from '../components/shared/formly/enum/formly-enum.component';
import { MultiSchemaTypeComponent } from '../components/shared/formly/multischema/formly-multischema.component';
import { ObjectTypeComponent } from '../components/shared/formly/object/formly-object.component';

@NgModule({
  declarations: [
    FormlyArrayComponent,
    MultiSchemaTypeComponent,
    ObjectTypeComponent,
    EnumTypeComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule,
    NbSelectModule,
    NbThemeModule.forRoot({ name: 'default' }),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'array', component: FormlyArrayComponent },
        { name: 'multischema', component: MultiSchemaTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'enum', component: EnumTypeComponent },
        { name: 'string', extends: 'input' },
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
  ],
})
export class SharedModule {}
