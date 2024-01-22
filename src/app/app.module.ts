import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgOnChangesModule } from './ng-on-changes/ng-on-changes.module';
import { FormsModule } from '@angular/forms';
import { NgAfterViewInitModule } from './ng-after-view-init/ng-after-view-init.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOnChangesModule,
    FormsModule,
    NgAfterViewInitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
