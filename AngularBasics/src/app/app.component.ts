import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  userName="";
  ngOnInit():void {
    this.title="Hello from Bridgelabz";
    this.imgUrl='../assets/Bridgelabz.png';
    this.url="https://www.bridgelabz.com/";
    this.userName;
  }
   onClick($event){
    console.log("mouse clicked", $event);
    window.open(this.url);
   }
}
