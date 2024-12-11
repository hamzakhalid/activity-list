import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, ActivityComponent, TaskAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'activities';
}
