import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin(form: NgForm) {
    if (form.valid) {
      const user = {
        email: form.value.email,
        password: form.value.password
      }
      this.authServ.loginUser(JSON.stringify(user));
    } else {
      alert("Email and password required");
    }
  }

}
