import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from './../../Shared/Services/user.service';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;

  User: any = {
    username: '',
    password: ''
  }
  constructor(private userSV: UserService,
    private router: Router,
    private toastSV: ToastrService,
    private ngxSpinner: NgxSpinnerService
    
) { }

  ngOnInit() {
  }
  checkLogin() {
    this.ngxSpinner.show();
    setTimeout(() => {
      this.userSV.checkLogin(this.User.username, this.User.password).subscribe(data => {
        if (data.token) {
          localStorage.setItem('x', data.token);
          this.toastSV.success(data.message)
          this.router.navigate(["./layout/doashboard"])
        }else{
        this.toastSV.error(data.message)
        }
      })
      this.ngxSpinner.hide();
  }, 2000);
    
  }


}
