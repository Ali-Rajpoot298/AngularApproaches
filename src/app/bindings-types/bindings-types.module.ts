import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingWidgetComponent } from './binding-widget/binding-widget.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BindingWidgetComponent,
    OneWayBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BindingWidgetComponent,

  ],
})
export class BindingsTypesModule { }
