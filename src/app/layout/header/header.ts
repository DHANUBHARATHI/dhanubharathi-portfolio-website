import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Output() menuClicked = new EventEmitter<void>();

  onMenuClick(): void {
    this.menuClicked.emit();
  }

}
