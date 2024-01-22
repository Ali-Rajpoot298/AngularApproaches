import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reciver',
  templateUrl: './reciver.component.html',
  styleUrls: ['./reciver.component.scss']
})
export class ReciverComponent  implements OnChanges {
  @Input()
  user!: { name: string; email: string; };
  
  ngOnChanges(changes: SimpleChanges): void {
   // Check if the 'user' input property has changed
   if (changes['user'] && !changes['user'].firstChange) {
    // Perform actions when 'user' input changes
    console.log('User data changed:', changes['user'].currentValue);
    // Additional logic can be added here, such as updating the component's state
  }
}
}
