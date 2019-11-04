import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BehaviorsViewComponent } from './behaviors-view/behaviors-view.component';
import { BehaviorSubComponent } from './behavior-sub/behavior-sub.component';

import { YourService } from './Service/your.service';

@NgModule({
  declarations: [
    AppComponent,
    BehaviorsViewComponent,
    BehaviorSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    YourService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
