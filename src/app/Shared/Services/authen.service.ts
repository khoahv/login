import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private router: Router) { }
  canActivate() {
    const checkToken = localStorage.getItem('x');
    return checkToken ? true : this.router.navigate([''])
  }

}
