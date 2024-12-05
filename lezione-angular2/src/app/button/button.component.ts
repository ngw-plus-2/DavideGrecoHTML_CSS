import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: false
 
})
export class ButtonComponent {
  @Input() textButton: string = ""
  
}

