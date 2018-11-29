import { UserService } from './../../Shared/Services/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    User : any = {
      name: '',
      email: '',
      role: ''

    }
  constructor(private userSV: UserService) { }

  ngOnInit() {
    this.userSV.getUserByToken().subscribe(user=>{
      console.log(user);
      
      this.User = user.json();
    })
  }

}
