import { Component, OnInit } from "@angular/core";

import { Todo } from "../../models/Todo";
import { TodoService } from "src/app/service/todo.service";

@Component({
  selector: "app-whiteboard",
  templateUrl: "./whiteboard.component.html",
  styleUrls: ["./whiteboard.component.scss"]
})
export class WhiteboardComponent implements OnInit {
  pendingTodos = [];
  completeTodos = [];
  inProgressTodos = [];

  constructor(private TodoService: TodoService) {}

  ngOnInit() {
    this.pendingTodos = this.TodoService.getPendingTodos();
    this.completeTodos = this.TodoService.getCompleteTodos();
    this.inProgressTodos = this.TodoService.getInProgressTodos();
  }
}
