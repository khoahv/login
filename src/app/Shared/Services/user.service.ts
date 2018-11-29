import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private htpp: Http,
    private tokenService: TokenService
) { }
private token= this.tokenService.getToken();

checkLogin(email: String, password: String): Observable<any> {
  return this.htpp.post('http://localhost:3000/api/auth/login', { email: email, password: password })
    .pipe(map(token => {
      console.log(token.json());
      return token.json();
    }))
}

getUserByToken() {
  return this.htpp.get('http://localhost:3000/api/auth', this.tokenService.addToken())
  .pipe(map(user => {
    return user;
  }))
}

}
