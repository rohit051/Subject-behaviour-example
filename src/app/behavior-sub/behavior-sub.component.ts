import { Component, OnInit } from '@angular/core';
import { YourService } from '../Service/your.service';
 
@Component({
selector: 'app-behavior-sub',
templateUrl: './behavior-sub.component.html',
styleUrls: ['./behavior-sub.component.css']
})
export class BehaviorSubComponent implements OnInit {
 
private behaviorValue: string = '';
 
constructor(
private yourServ: YourService,
) { }
 
ngOnInit() {
this.yourServ.getBehaviorView().subscribe(v => {
this.behaviorValue = v['textVal'];
})
}
 
}