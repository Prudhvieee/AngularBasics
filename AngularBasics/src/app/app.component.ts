import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularBasics';
  imgUrl: string;
  ngOnInit():void {
    this.title="Hello from Bridgelabz";
    this.imgUrl='../assets/Bridgelabz.png';
   }
}
