import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() sidebarOpen: boolean = false;
  scrollToSection(sectionId: string): void {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
}
