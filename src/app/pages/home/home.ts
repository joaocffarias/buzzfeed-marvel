import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button';
import { CardComponent } from '../../components/ui/card/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, CardComponent],
  template: `
    <div class="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8 animate-fade-in">
      
      <div class="space-y-4 max-w-2xl">
        <h1 class="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 drop-shadow-sm">
          QUAL VINGADOR VOCÊ É?
        </h1>
        <p class="text-xl text-slate-400">
          Responda a perguntas estratégicas e descubra qual herói da Marvel mais combina com a sua personalidade.
        </p>
      </div>

      <app-card customClass="w-full max-w-md bg-navy-800/50 backdrop-blur border-navy-600">
        <div class="space-y-6">
          <div class="flex items-center justify-center space-x-4 text-4xl mb-4">
            <span>🛡️</span>
            <span>⚡</span>
            <span>🕸️</span>
            <span>🦾</span>
          </div>
          
          <div class="space-y-2 text-slate-300">
            <p>✅ 7 Perguntas de personalidade</p>
            <p>✅ Análise de perfil de herói</p>
            <p>✅ Compartilhe seu resultado</p>
          </div>

          <a routerLink="/quiz" class="block">
            <app-button variant="primary" [fullWidth]="true" class="text-lg py-4 shadow-xl shadow-red-500/20 hover:shadow-red-500/40">
              INICIAR QUIZ OMEGA
            </app-button>
          </a>
        </div>
      </app-card>

    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.8s ease-out forwards;
    }
  `]
})
export class HomeComponent { }
