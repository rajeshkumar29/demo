import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { TaskModule } from './features';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        TaskModule,
        CommonModule,
        BrowserModule,
        MatToolbarModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/task/list', pathMatch: 'full' },
            { path: '', loadChildren: () => import('./features/task/task.module').then(m => m.TaskModule) }
        ]),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 50,
            connectInZone: true,
        }),
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
    providers: [provideNativeDateAdapter()],
})
export class AppModule { }
