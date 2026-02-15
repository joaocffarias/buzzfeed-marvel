import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="w-full bg-navy-900/90 backdrop-blur-md border-b border-navy-700 py-4 px-6 fixed top-0 z-50 shadow-md">
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <a routerLink="/" class="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 transition-opacity">
          MARVEL<span class="text-white">QUIZ</span>
        </a>
        
        <nav class="hidden sm:flex gap-4">
          <a routerLink="/" class="text-slate-400 hover:text-white font-medium transition-colors">Home</a>
          <a routerLink="/about" class="text-slate-400 hover:text-white font-medium transition-colors">Sobre</a>
        </nav>
      </div>
    </header>
    <!-- Spacer para compensar o header fixo -->
    <div class="h-16"></div>
  `
})
export class HeaderComponent { }
