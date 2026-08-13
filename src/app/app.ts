import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Sidebar } from './layout/sidebar/sidebar';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Skills } from './features/skills/skills';
import { Experience } from './features/experience/experience';
import { Education } from './features/education/education';
import { Contact } from './features/contact/contact';
import { Projects } from './features/projects/projects';

@Component({
  selector: 'app-root',
  imports: [Header,Sidebar,Home,About,Skills,Experience,Projects,Education,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dhanu-portfolio');
  sidebarOpen:boolean = true;
   toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
