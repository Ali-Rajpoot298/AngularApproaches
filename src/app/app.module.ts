import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BindingsTypesModule } from './bindings-types/bindings-types.module';

@NgModule({
  declarations: [
    AppComponent,
    // BindingWidgetComponent,
    // OneWayBindingComponent,
    // TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BindingsTypesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
