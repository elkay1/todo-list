import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

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

  deletePendingTodo(todo: Todo) {
    console.log(this.TodoService.pendingTodos);
    console.log(todo);

    this.TodoService.deletePendingTodo(todo);
  }

  editTodo() {
    let card = <HTMLDivElement>document.querySelector(".card");

    card.removeAttribute("cdkDrag");
    card.setAttribute("contenteditable", "true");

    console.log(card);
  }

  // Change card array on drag/drop
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
