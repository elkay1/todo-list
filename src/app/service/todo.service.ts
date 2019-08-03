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
      priority: "Critical",
      status: "pending",
      assignee: "Johnny"
    },
    {
      title: "Get bread",
      description: "blah blah",
      priority: "Pressing",
      status: "pending",
      assignee: "Liam"
    }
  ];

  inProgressTodos: Todo[] = [
    {
      title: "Sleep",
      description: "You know what",
      priority: "Non-critical",
      status: "in-progress",
      assignee: "Fred"
    }
  ];
  completeTodos: Todo[] = [
    {
      title: "Slept",
      description: "You know what",
      priority: "Non-critical",
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
