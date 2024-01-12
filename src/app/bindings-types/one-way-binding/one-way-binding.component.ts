import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent {
  value!:string;
  isVisible=false;
  isvisible2=!this.isVisible;
  isButtonDisabled=true;
  ShowHide(){
    this.isVisible=!this.isVisible
  }
  name:string='Muhammad Ali'
  imageUrl='https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?w=740&t=st=1705086241~exp=1705086841~hmac=212ee420ca494dff460ee1712727355b0632f4f92ed5d9da92acf0afe7ce0f89'
  clickMe(){
    alert('Click Me');
  }
  isHighlighted1=false;
  isHighlighted2=true;
  textColor='blue';
  isLargeText1=false;
  isLargeText2=true;

  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }
  dynamicClass: string = "highlight";


  Show(newValue: string) {
    this.value = newValue;
  }
}
