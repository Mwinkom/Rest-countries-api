import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent {
  @Input() search = '';
  @Input() region = '';
  @Output() searchChange = new EventEmitter<string>();
  @Output() regionChange = new EventEmitter<string>();

  regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get isDarkMode(): boolean {
    return document.body.classList.contains('dark-theme');
  }
}
