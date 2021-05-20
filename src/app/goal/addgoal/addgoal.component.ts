
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { GoalService } from 'src/app/services/goal.service';

@Component({
  selector: 'app-addgoal',
  templateUrl: './addgoal.component.html',
  styleUrls: ['./addgoal.component.css']
})
export class AddgoalComponent implements OnInit {
  goalForm: FormGroup;
  private subscription;
  //for checking if an goal has been submitted
  submitted = false;
  valid: boolean = true;
  goal = {
    email: null,
    name: null,
    description: null,
    startDate: null,
    targetDate: null,
    targetSavings: null,
    currentSavings: null,
    priority: null
  }
 
 
  constructor(private goalService: GoalService)
     { }

  ngOnInit(): void {}
    
   
    
//Add new goal
  saveGoal(): void {
  // this.validationErrors();
  
     const data = {
      email: this.goal.email,
      name: this.goal.name,
      description: this.goal.description,
      startDate: this.goal.startDate,
      targetDate: this.goal.targetDate,
      currentSavings: this.goal.currentSavings,
      targetSavings: this.goal.targetSavings,
      priority: this.goal.priority
     
      
    };
    if (this.valid==true){
      console.log("create");
    this.goalService.createGoal(data)
      .subscribe(response => {
        
        console.log(response); 
         this.submitted = true;
       }); 
      //  error => {
      //    console.log("Invalid Data");
      //  };
  
      } 
}

  newGoal(): void {
    this.submitted = false;
    this.goal = {
      email:'',
      name:'',
      description:'',
      startDate: null,
      targetDate: null,
      currentSavings: null,
      targetSavings: null,
      priority:''
    };
    
  }
  validationErrors(): void{
    
    this.valid=true;
    if ((this.goal.startDate>this.goal.targetDate)){
    this.goal.targetDate='';
    alert("Start date is before target date, please choose future target date");
    this.valid=false;
    }
    if (Number(this.goal.currentSavings) >= Number(this.goal.targetSavings)){
     this.goal.targetSavings= '';
     this.valid = false;
     alert("current savings cannot be more than target savings"); 
    }
    if (this.valid==true)
    this.saveGoal();

  }
}
