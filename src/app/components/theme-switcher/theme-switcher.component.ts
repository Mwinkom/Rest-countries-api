import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Moon } from 'lucide-angular';

@Component({
  selector: 'app-theme-switcher',
  imports: [LucideAngularModule],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent implements OnInit {
  readonly MoonIcon = Moon;
  isDarkMode = false;

  ngOnInit(): void {
    const storedTheme = localStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark';
    this.applyTheme(this.isDarkMode);
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme(this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyTheme(isDark: boolean): void {
    const classList = document.body.classList;
    isDark ? classList.add('dark-theme') : classList.remove('dark-theme');
  }
}
