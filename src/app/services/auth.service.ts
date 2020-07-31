import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router) { }
    loginUser(user) {
        this.storeUser(user);
        setTimeout(() => {
            this.router.navigate(["/create-survey"]);
        }, 500);
    }

    storeUser(user) {
        localStorage.setItem("UserData", user)
    }
    removeUser() {
        localStorage.removeItem("UserData");
    }
    getUser() {
        return !!localStorage.getItem("UserData");
    }
    logoutUser() {
        this.removeUser();
        setTimeout(() => {
            this.router.navigate(["/login"]);
        }, 500);
    }
}