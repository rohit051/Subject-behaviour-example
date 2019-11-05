import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BehaviorsViewComponent } from './behaviors-view/behaviors-view.component';
import { BehaviorSubComponent } from './behavior-sub/behavior-sub.component';

import { YourService } from './Service/your.service';

import { MyInterceptor } from './my-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BehaviorsViewComponent,
    BehaviorSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    YourService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
