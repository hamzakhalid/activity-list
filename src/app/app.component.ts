import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, ActivityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'activities';
}
