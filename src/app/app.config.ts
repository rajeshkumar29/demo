import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

export const routes: Routes = [
  { path: '', redirectTo: '/task/list', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./features/task/task.module').then(m => m.TaskModule) }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideAnimationsAsync(),
  provideNativeDateAdapter()]
};
