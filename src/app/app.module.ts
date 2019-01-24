import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemanComponent } from './teman/teman.component';
import { TemanAddComponent } from './teman/teman-add/teman-add.component';
import { TemanListComponent } from './teman/teman-list/teman-list.component';
import { HoverHiglightDirective } from './hover-higlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemanComponent,
    TemanAddComponent,
    TemanListComponent,
    HoverHiglightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
