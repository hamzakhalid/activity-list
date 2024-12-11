import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TaskStorageService } from "../task-storage.service";
import { Task } from "../shared/models/task.model";
import { TaskAddComponent } from "../task-add/task-add.component";
import moment from "moment";


@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"],
  imports: [TaskAddComponent, CommonModule],
})
export class ActivityComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private storage: TaskStorageService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  delete(id: number): void {
    if (confirm("Are you sure you want to delete this task?")) {
      this.storage.delete(id);
      this.loadTasks();
    }
  }

  calculateDaysPassed(timestamp: string): string {
    return moment(timestamp).fromNow();
  }

  private loadTasks(): void {
    this.storage.initialize(); // Use the public initialize method
    this.tasks = this.storage.getTasks();
  }
}
