import { Injectable } from "@angular/core";
import { init_tasks } from "../assets/activity-list.json";
import { Task } from "../app/shared/models/task.model";

@Injectable({
  providedIn: "root",
})
export class TaskStorageService {
  private tasks: Task[] = [];
  private initialized = false;

  constructor() {}

  /**
   * Returns all tasks
   */
  getTasks(): Task[] {
    this.init(); // Ensure initialization before retrieving tasks
    return this.tasks;
  }

  /**
   * Remove the task with the given ID from the list
   *
   * @param id Task ID to remove
   */
  delete(id: number): boolean {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} deleted.`);
    return true;
  }

  /**
   * Return the task based on the given ID
   *
   * @param id Task ID to retrieve
   */
  get(id: number): Task | null {
    this.init();
    return this.tasks.find(task => task.id === id) || null;
  }

  /**
   * Create a new task based on the given data (+ generate a new ID)
   *
   * @param note Task note
   * @param type Task type
   * @param title Task title
   * @param timestamp Task timestamp
   * @param user Task user
   */
  add(note: string, type: string, title: string, timestamp: string, user: string): void {
    const newTask = new Task(note, type, title, timestamp, user, this.getHighestId() + 1);
    this.tasks.unshift(newTask);
    console.log(`Task with title "${title}" added.`);
  }

  /**
   * Initialize tasks from JSON file (now encapsulated)
   */
  private init(): void {
    if (this.initialized) {
      console.log("Already initialized");
      return;
    }

    console.log("Loading data from JSON file");

    if (init_tasks.length === 0) {
      console.log("No tasks to initialize.");
    } else {
      this.tasks = init_tasks.map(task =>
        new Task(task.note, task.type, task.title, task.timestamp, task.user, task.id)
      );
    }

    this.initialized = true;
  }

  /**
   * Public method to trigger initialization
   */
  public initialize(): void {
    this.init(); // Call the private init method
  }

  /**
   * Returns the highest task ID from the list
   */
  private getHighestId(): number {
    this.init(); // Ensure initialization before computing the highest ID
    return this.tasks.reduce((highest, task) => Math.max(highest, task.id), 0);
  }
}
