import { Component, OnInit, VERSION } from '@angular/core';

export interface UserData {
  name: string;
  gender: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {}
}
