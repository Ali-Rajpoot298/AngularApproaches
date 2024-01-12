import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneWayBindingComponent } from './bindings-types/one-way-binding/one-way-binding.component';
import { TwoWayBindingComponent } from './bindings-types/two-way-binding/two-way-binding.component';
import { BindingWidgetComponent } from './bindings-types/binding-widget/binding-widget.component';

const routes: Routes = [
  { path: '', component: BindingWidgetComponent },
  { path: 'OneWayBindingComponent', component: OneWayBindingComponent },
  { path: 'TwoWayBindingComponent', component: TwoWayBindingComponent },

  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
