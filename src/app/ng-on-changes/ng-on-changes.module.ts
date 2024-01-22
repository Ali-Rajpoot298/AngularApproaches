import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenderComponent } from './sender/sender.component';
import { ReciverComponent } from './reciver/reciver.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SenderComponent,
    ReciverComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    SenderComponent,
    ReciverComponent
  ]
})
export class NgOnChangesModule { }
