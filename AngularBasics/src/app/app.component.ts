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
  userName:string="";
  nameError:string="";
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
   onInput($event){
    console.log("Mouse input", $event);
    var testRegex=RegExp("^[A-Z]{1}[A-Za-z\\s]{2,}$");
    if((testRegex.test(this.userName)) || (this.userName="")){
      this.nameError="";
      return;
    }
    this.nameError="Name is incorrect";
  }
}
