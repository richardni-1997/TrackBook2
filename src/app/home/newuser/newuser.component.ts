import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  private subscription;
  //for checking if a user has been submitted
  submitted = false;
  user = {
    email:null,
    password:null,
    confirmPassword:null,
  }
 error: boolean=false;
  
  email = new FormControl('', [Validators.required, Validators.email]);
  password= new FormControl('',[Validators.required]);
  confirmPassword = new FormControl('',[Validators.required]);

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    
  }

 
//Add new user
  saveUser(): void {
      
     const data = {
      email: this.user.email,
      password: this.user.password
    };
    console.log(data);

    
    this.userService.createUser(data)
      .subscribe(response => {
        
        console.log(response); 
         this.submitted = true;
       }); 
       error => {
         console.log(error);
       };
  
}

  newUser(): void {
    this.submitted = false;
    this.user = {
      email:'',
      password:'',
      confirmPassword:''
    };
  }

  getErrorEmail() {
      this.error=true;
      if (this.email.hasError('required')) {
        
        return 'Email is required';
      }

    return this.email.hasError('email')  ? 'Not a valid email' : '';
    
  }
  
}