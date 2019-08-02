import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { WhiteboardComponent } from "./components/whiteboard/whiteboard.component";
import { AddTodoComponent } from './components/add-todo/add-todo.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, WhiteboardComponent, AddTodoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
