import { Injectable } from "@angular/core";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  pendingTodos: Todo[] = [
    {
      title: "Get milk",
      description: "blah blah",
      priority: "urgent",
      status: "pending",
      assignee: "ur mom"
    },
    {
      title: "Get bread",
      description: "blah blah",
      priority: "pressing",
      status: "pending",
      assignee: "Liam"
    }
  ];

  inProgressTodos: Todo[] = [
    {
      title: "Sleep",
      description: "You know what",
      priority: "non-critical",
      status: "in-progress",
      assignee: "Fred"
    }
  ];
  completeTodos: Todo[] = [
    {
      title: "Slept",
      description: "You know what",
      priority: "non-critical",
      status: "complete",
      assignee: "Fred"
    }
  ];

  constructor() {}

  getPendingTodos() {
    return this.pendingTodos;
  }

  getCompleteTodos() {
    return this.completeTodos;
  }
  getInProgressTodos() {
    return this.inProgressTodos;
  }
  addTodo(todo) {
    this.pendingTodos.push(todo);
  }
}
