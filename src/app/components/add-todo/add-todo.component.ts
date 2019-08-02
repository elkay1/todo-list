import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { TodoService } from "../../service/todo.service";

@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  constructor(private TodoService: TodoService) {}

  ngOnInit() {}

  addTodo() {
    let title: string = (<HTMLInputElement>document.getElementById("title"))
      .value;
    let assignee: string = (<HTMLInputElement>(
      document.getElementById("assignee")
    )).value;
    let desc: string = (<HTMLInputElement>document.getElementById("desc"))
      .value;
    let todo: Todo = { title: title, assignee: assignee, description: desc };

    this.TodoService.addTodo(todo);

    (<HTMLInputElement>document.getElementById("title")).value = "";
    (<HTMLInputElement>document.getElementById("assignee")).value = "";
    (<HTMLInputElement>document.getElementById("desc")).value = "";
  }
}
