import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/task/task.module').then(m => m.TaskModule) }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
