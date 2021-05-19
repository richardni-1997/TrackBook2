import { Component, OnInit } from '@angular/core';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  targetDate: Date;
  monthlySavings: number;
  targetSavings: number;
  biWeeklySavings: number;
  monthPlan:  boolean = false;
  biweekPlan: boolean = false;
  presentDay = new Date();
  
  duration: number;
  
  

  

 
  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
  }
//Monthly Savings given a target amount and date
monthlyPlan(): void {

  //console.log("month")



  this.monthPlan = true;

  this.duration = new Date(this.targetDate).getMonth() - new Date().getMonth();

  console.log(this.duration);

  this.monthlySavings = this.targetSavings / (this.duration);

  console.log(this.monthlySavings);

}



biWeeklyPlan(): void {

  this.biWeeklySavings = this.monthlySavings / 2;

  console.log(this.biWeeklySavings);

}


//clear values and button upon reset 
   clear(){
    this.targetDate = null;
    this.targetSavings = 0;
    this.monthPlan = false;
    this.biweekPlan = false;
  }

//   today = new Date();
// past = new Date(this.targetDate); // remember this is equivalent to 06 01 2010
//dates in js are counted from 0, so 05 is june

//  calcDate(date1,date2) {
//     var diff = Math.floor(date1.getTime() - date2.getTime());
//     var day = 1000 * 60 * 60 * 24;

//     var days = Math.floor(diff/day);
//     var months = Math.floor(days/31);
//     var years = Math.floor(months/12);

//     var message = date2.toDateString();
//     message += " was "
//     message += days + " days " 
//     message += months + " months "
//     message += years + " years ago \n"

//     return message
//     }


// /a = calcDate(today,past)
// /console.log() // returns Tue Jun 01 2010 was 1143 days 36 months 3 years ago
}
