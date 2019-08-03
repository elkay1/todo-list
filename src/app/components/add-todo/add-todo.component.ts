import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  constructor(public TodoService: TodoService) {}

  ngOnInit() {}

  expandInput() {
    let input = <HTMLInputElement>document.getElementById("addTodo");
    let modal = <HTMLDivElement>document.querySelector(".modal");
    modal.classList.add("is-active");
  }

  closeModal() {
    let closeModal = <HTMLDivElement>document.querySelector(".delete");
    let modal = <HTMLDivElement>document.querySelector(".modal");
    modal.classList.remove("is-active");
  }

  toggleDropdown() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("is-active");
  }

  addTodo() {
    let title: string = (<HTMLInputElement>document.getElementById("title"))
      .value;
    let assignee: string = (<HTMLInputElement>(
      document.getElementById("assignee")
    )).value;
    let desc: string = (<HTMLInputElement>document.getElementById("desc"))
      .value;
    let priority: any = <HTMLSelectElement>document.getElementById("select");
    let selectedPriority = priority.options[priority.selectedIndex].value;

    let todo: Todo = {
      title: title,
      assignee: assignee,
      description: desc,
      priority: selectedPriority
    };

    this.TodoService.addTodo(todo);
    console.log(this.TodoService.pendingTodos.length);

    (<HTMLInputElement>document.getElementById("title")).value = "";
    (<HTMLInputElement>document.getElementById("assignee")).value = "";
    (<HTMLInputElement>document.getElementById("desc")).value = "";
  }
}
