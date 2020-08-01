import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authServ.getUser()) {
      this.router.navigate(["/survey"]);
    }
  }

}
