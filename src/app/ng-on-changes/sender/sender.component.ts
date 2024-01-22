import { Component } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent {
  name: string = '';
  email: string = '';

  currentUser: { name: string; email: string } = { name: 'John Doe', email: 'john@example.com' };

  updateUser(): void {
    // Simulating a user data update
    this.currentUser = { name: this.name, email: this.email };
  }
}
