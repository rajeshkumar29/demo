import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";

import { TaskModule } from './features';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent { }
