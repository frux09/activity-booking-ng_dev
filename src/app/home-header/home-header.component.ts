import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  @Input() numberOfActivities: number = 0;
  @Output() sort: EventEmitter<void> = new EventEmitter<void>();

  onButtonClick() {
    this.sort.emit();
  }
}
