import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { WhiteboardComponent } from "./components/whiteboard/whiteboard.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { TodoService } from "../app/service/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhiteboardComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
