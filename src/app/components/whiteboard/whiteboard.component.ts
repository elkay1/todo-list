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

  listenForDoubleClick(element) {
    element.contentEditable = true;
    setTimeout(function() {
      if (document.activeElement !== element) {
        element.contentEditable = false;
      }
    }, 300);
  }

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
