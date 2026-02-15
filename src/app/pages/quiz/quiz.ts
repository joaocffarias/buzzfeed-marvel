import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz';
import { CardComponent } from '../../components/ui/card/card';
import { ButtonComponent } from '../../components/ui/button/button';
import { Question } from '../../data/quiz.data';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  template: `
    <div class="max-w-2xl mx-auto py-8">
      
      <!-- Quiz em progresso -->
      <div *ngIf="!finished" class="space-y-6 animate-fade-in">
        
        <!-- Header / Progresso -->
        <div class="flex justify-between items-center text-slate-400 mb-4">
          <span class="text-sm font-semibold tracking-wider">PERGUNTA {{currentQuestionIndex + 1}} DE {{questions.length}}</span>
          <span class="text-xs bg-navy-800 px-2 py-1 rounded border border-navy-700">MARVEL QUIZ</span>
        </div>

        <div class="w-full bg-navy-800 h-2 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-500" [style.width.%]="getProgress()"></div>
        </div>

        <app-card>
          <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">{{currentQuestion?.label}}</h2>

          <div class="grid gap-4">
            <app-button 
              *ngFor="let option of currentQuestion?.options" 
              variant="outline" 
              [fullWidth]="true"
              class="text-left justify-start hover:border-red-500 hover:text-red-500 transition-colors py-4 bg-navy-900/40"
              (onClick)="selectAnswer(option.alias)">
              {{option.name}}
            </app-button>
          </div>
        </app-card>

      </div>

      <!-- Resultado Final -->
      <div *ngIf="finished" class="space-y-8 animate-fade-in text-center">
        <h2 class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          SEU RESULTADO
        </h2>

        <app-card customClass="bg-gradient-to-b from-navy-800 to-navy-900 border-red-500/30 shadow-red-500/10">
          <div class="space-y-6">
            <div class="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-red-500 shadow-xl shadow-red-500/20">
              <!-- Placeholder image se a URL falhar ou para garantir aspecto -->
               <img [src]="result?.img" alt="Hero Image" class="w-full h-full object-cover">
            </div>
            
            <h3 class="text-3xl font-bold text-white">{{result?.name}}</h3>
            <p class="text-slate-300 text-lg leading-relaxed">{{result?.description}}</p>

            <app-button variant="primary" (onClick)="restart()" class="mt-6 w-full md:w-auto min-w-[200px]">
              REFAZER QUIZ
            </app-button>
          </div>
        </app-card>
      </div>

    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.5s ease-out forwards;
    }
  `]
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  currentQuestion: Question | undefined;
  currentQuestionIndex = 0;
  finished = false;
  result: any = null;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  selectAnswer(alias: string) {
    this.quizService.submitAnswer(alias);
    this.nextQuestion();
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.finishQuiz();
    }
  }

  finishQuiz() {
    this.finished = true;
    this.result = this.quizService.calculateResult();
  }

  restart() {
    this.finished = false;
    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[0];
    this.quizService.resetQuiz();
  }

  getProgress() {
    return ((this.currentQuestionIndex) / this.questions.length) * 100;
  }
}
