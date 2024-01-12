import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binding-widget',
  templateUrl: './binding-widget.component.html',
  styleUrls: ['./binding-widget.component.scss']
})
export class BindingWidgetComponent {

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
