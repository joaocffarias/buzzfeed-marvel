import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [type]="type"
      (click)="onClick.emit($event)"
      [disabled]="disabled"
      class="px-6 py-3 rounded-xl font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
      [ngClass]="getClasses()">
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;

  @Output() onClick = new EventEmitter<Event>();

  getClasses(): string {
    const base = this.fullWidth ? 'w-full' : '';

    switch (this.variant) {
      case 'primary':
        return `${base} bg-slate-100 text-navy-900 hover:bg-slate-200 focus:ring-slate-400`;
      case 'secondary':
        return `${base} bg-navy-600 text-white hover:bg-navy-500 focus:ring-navy-400`;
      case 'outline':
        return `${base} bg-transparent border-2 border-slate-500 text-slate-300 hover:border-slate-300 hover:text-white focus:ring-slate-500`;
      default:
        return base;
    }
  }
}
