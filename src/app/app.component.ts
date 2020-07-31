import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  isUserExist;
  constructor(private authServ: AuthService) { }

  ngOnInit() {
    this.isUserExist = this.authServ.getUser();
  }
  ngDoCheck() {
    this.isUserExist = this.authServ.getUser();
  }
  logoutUser() {
    this.authServ.logoutUser();
  }
}
