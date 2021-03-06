import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneTwoBindingComponent } from './one-two-binding/one-two-binding.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { FormatterPipe } from './formatter.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ServiceExampleComponent } from './service-example/service-example.component';
import {ActiveInactiveUserService} from './active-inactive-user.service'
@NgModule({
  declarations: [
    AppComponent,
    OneTwoBindingComponent,
    DirectivesExampleComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    FormatterPipe,
    CustomDirectiveDirective,
    ServiceExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [ActiveInactiveUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
