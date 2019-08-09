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

  // Open modal for adding todo
  expandInput() {
    let input = <HTMLInputElement>document.getElementById("addTodo");
    let modal = <HTMLDivElement>document.querySelector(".modal");
    modal.classList.add("is-active");
  }

  // Close modal on click outside box and reset dropdowns
  closeModal() {
    let priority: any = <HTMLSelectElement>document.getElementById("priority");
    let closeModal = <HTMLDivElement>document.querySelector(".delete");
    let modal = <HTMLDivElement>document.querySelector(".modal");
    let status: any = <HTMLSelectElement>document.getElementById("status");

    modal.classList.remove("is-active");
    status.selectedIndex = 0;
    priority.selectedIndex = 0;
    this.changeOptionColor();
  }

  toggleDropdown() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("is-active");
  }

  changeOptionColor() {
    let priority: any = <HTMLSelectElement>document.getElementById("priority");
    let selectedPriority = priority.options[priority.selectedIndex].value;

    if (selectedPriority === "Medium") {
      priority.classList.remove("nonCritical");
      priority.classList.remove("critical");
      priority.classList.add("medium");
    } else if (selectedPriority === "Critical") {
      priority.classList.remove("medium");
      priority.classList.remove("nonCritical");
      priority.classList.add("critical");
    } else if (selectedPriority === "Non-Critical") {
      priority.classList.remove("critical");
      priority.classList.remove("medium");
      priority.classList.add("nonCritical");
    } else {
      priority.classList.remove("nonCritical");
      priority.classList.remove("critical");
      priority.classList.remove("medium");
    }
  }

  addTodo() {
    let title: string = (<HTMLInputElement>document.getElementById("title"))
      .value;
    let assignee: string = (<HTMLInputElement>(
      document.getElementById("assignee")
    )).value;
    let desc: string = (<HTMLInputElement>document.getElementById("desc"))
      .value;
    let priority: any = <HTMLSelectElement>document.getElementById("priority");
    let selectedPriority = priority.options[priority.selectedIndex].value;
    let status: any = <HTMLSelectElement>document.getElementById("status");
    let selectedStatus = status.options[status.selectedIndex].value;

    let todo: Todo = {
      title: title,
      assignee: assignee,
      description: desc,
      priority: selectedPriority,
      status: selectedStatus
    };

    // Validate title and status fields are filled
    if (title === "" || selectedStatus === "Status") {
      alert("Title and Status must be filled out");
    } else {
      if (selectedStatus == "Pending") {
        this.TodoService.addPendingTodo(todo);
      } else if (selectedStatus == "In-Progress") {
        this.TodoService.addInProgressTodo(todo);
      } else {
        this.TodoService.addcompleteTodo(todo);
      }
      console.log(selectedStatus);
    }

    // Set fields to empty
    (<HTMLInputElement>document.getElementById("title")).value = "";
    (<HTMLInputElement>document.getElementById("assignee")).value = "";
    (<HTMLInputElement>document.getElementById("desc")).value = "";
    priority.selectedIndex = 0;
    status.selectedIndex = 0;
    this.changeOptionColor();
  }
}
