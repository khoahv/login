import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../Shared/Services/user.service';
@Component({
  selector: 'app-doashboard',
  templateUrl: './doashboard.component.html',
  styleUrls: ['./doashboard.component.scss']
})
export class DoashboardComponent implements OnInit {
user: any = {
  name: ''
};
  constructor(private userService: UserService, private router : Router) { }

  ngOnInit() {
    this.userService.getUserByToken()
    .subscribe(user => {
      
      this.user = user.json();
    });
  }
  conectProfile(){
    this.router.navigate(['./layout/profile'])
  }
logOut(){
  localStorage.removeItem('x');
  this.router.navigate([''])
}
  }
  
