import { Component, OnInit } from '@angular/core';
import { YourService } from '../Service/your.service';
 
@Component({
selector: 'app-behaviors-view',
templateUrl: './behaviors-view.component.html',
styleUrls: ['./behaviors-view.component.css']
})
export class BehaviorsViewComponent implements OnInit {
 
constructor(
private yourServ: YourService,
) { }
 
ngOnInit() {
}
 
sendValue(value) {
this.yourServ.setBehaviorView({textVal: value});
}
 
}