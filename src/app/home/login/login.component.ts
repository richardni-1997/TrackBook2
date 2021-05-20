import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  data: any;
  email: string = "";
  user = { email: null, password: null };

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.checkLogin(this.route.snapshot.paramMap.get('id'));
    this.isLoggedIn = false;

  }

  // onSubmit(f: NgForm) {

  //   // let email = form.elements['username'];
  //   // let password = form.elements['password'];


  //   const loginObserver = {
  //     next: x => console.log('User logged in'),
  //     error: err => console.log(err)
  //   };

  //   this.authService.login(f.value).subscribe(loginObserver);

  // }

  checkLogin(email: string): void {
      this.authService.getByEmailId(email).subscribe( info => {
        this.data=info;
        console.log(info);
      },
      error=>{
        console.log(error);
      });
      if (!this.data) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
  }

}
