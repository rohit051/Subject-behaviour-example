import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs/internal/Rx';  
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
 
@Injectable() export class YourService { 
 
private behave = new BehaviorSubject<Object>({textVal: 'Hello'});
  
constructor( ) { } 
 
setBehaviorView(behave: Object) { 
    this.behave.next(behave); 
} 
getBehaviorView(): Observable<any> { 
    return this.behave.asObservable(); 
}
}