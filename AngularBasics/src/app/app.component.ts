import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBasics';
  imgUrl: string;
  url:string;
  ngOnInit():void {
    this.title="Hello from Bridgelabz";
    this.imgUrl='../assets/Bridgelabz.png';
    this.url="https://www.bridgelabz.com/";
  }
   onClick($event){
    console.log("mouse clicked", $event);
    window.open(this.url);
   }
}
