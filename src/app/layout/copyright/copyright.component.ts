import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent {
  getYear(): number {
    return new Date().getFullYear();
  }
}
