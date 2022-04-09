import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightDirective } from './highlight.directive';
import { DayelapsedPipe } from './dayelapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HighlightDirective,
    DayelapsedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
