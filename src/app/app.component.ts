import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fwSideFulllMode: boolean;
  ngOnInit(): void {
    this.fwSideFulllMode = false;
  }
  toggleMode(): void{
    this.fwSideFulllMode = this.fwSideFulllMode === true ? false : true;
  }
}
