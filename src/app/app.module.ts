import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { FirstDirectiveDirective } from './first-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectivesDemoComponent,
    FirstDirectiveDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
