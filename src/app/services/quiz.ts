import { Injectable } from '@angular/core';
import { Question, questions, results } from '../data/quiz.data';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = questions;
  private answers: string[] = [];

  constructor() { }

  getQuestions() {
    return this.questions;
  }

  submitAnswer(alias: string) {
    this.answers.push(alias);
  }

  calculateResult() {
    const frequency: { [key: string]: number } = {};
    let maxAlias = '';
    let maxCount = 0;

    this.answers.forEach(alias => {
      frequency[alias] = (frequency[alias] || 0) + 1;
      if (frequency[alias] > maxCount) {
        maxCount = frequency[alias];
        maxAlias = alias;
      }
    });

    // Fallback se empatar ou der vazio, pega o ultimo ou A
    if (!maxAlias) maxAlias = 'A';

    return results[maxAlias as keyof typeof results];
  }

  resetQuiz() {
    this.answers = [];
  }
}
