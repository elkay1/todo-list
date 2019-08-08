import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

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

  editTodo() {
    let card: any = <HTMLDivElement>document.querySelector(".card");
    card.contentEditable = true;
    console.log(card);
  }

  // Add handle for dragging
  addHandle() {
    let card: any = <HTMLDivElement>document.querySelector(".card");

    card.classList.add("handle");
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
