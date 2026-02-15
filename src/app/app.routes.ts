import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { QuizComponent } from './pages/quiz/quiz';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quiz', component: QuizComponent },
    { path: '**', redirectTo: '' }
];
