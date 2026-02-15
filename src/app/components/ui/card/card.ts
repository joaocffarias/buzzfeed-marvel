import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="bg-navy-800 border border-slate-700 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:border-slate-600"
      [ngClass]="customClass">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardComponent {
  @Input() customClass: string = '';
}
