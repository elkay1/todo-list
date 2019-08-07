import { Injectable } from "@angular/core";
import { Todo } from "../models/Todo";
import { Observable } from "rxjs";
import { AddTodoComponent } from "../components/add-todo/add-todo.component";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  pendingTodos: Todo[] = [
    {
      title: "Get milk",
      description: "Get some milk from IGA",
      priority: "Critical",
      status: "Pending",
      assignee: "Johnny"
    },
    {
      title: "Get bread",
      description: "Bread from IGA",
      priority: "Medium",
      status: "Pending",
      assignee: "Liam"
    }
  ];

  inProgressTodos: Todo[] = [
    {
      title: "Sleep",
      description: "I need it",
      priority: "Non-Critical",
      status: "In-Progress",
      assignee: "Liam"
    }
  ];
  completeTodos: Todo[] = [
    {
      title: "Slept",
      description: "I got it",
      priority: "Non-Critical",
      status: "Complete",
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
  addPendingTodo(todo: Todo) {
    this.pendingTodos.push(todo);
  }
  addInProgressTodo(todo: Todo) {
    this.inProgressTodos.push(todo);
  }
  addcompleteTodo(todo: Todo) {
    this.completeTodos.push(todo);
  }
}
