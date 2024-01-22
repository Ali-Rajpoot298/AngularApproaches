import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
 
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements AfterViewInit {
  @ViewChild('myParagraph') paragraphRef!: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

 
  ngAfterViewInit(): void {
    this.paragraphRef.nativeElement.style.color = 'green';

    const divElement = this.elementRef.nativeElement.querySelector('div');
    this.renderer.setStyle(divElement, 'color', 'red');
    this.renderer.setStyle(divElement, 'font-size', '18px')

   }

}
