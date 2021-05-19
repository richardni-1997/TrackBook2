import { Component, OnInit } from '@angular/core';
import { Goal } from '../model/goal';
import { GoalschartService } from '../services/goalschart.service';

@Component({
  selector: 'app-goalchart',
  templateUrl: './goalchart.component.html',
  styleUrls: ['./goalchart.component.css']
})
export class GoalchartComponent implements OnInit {

  goals: Goal[] = [];
  private subscription;
  goalsArray=[{
    "name": "Vacation",
    "value": 5000
  },{
    "name": "Home",
    "value": 40000

  },{
    "name": "car",
    "value": 10000

  },{
    "name": "Debt",
    "value": 5000
  },{
    "name": "Emergency Fund",
    "value": 6000
  }];
  goalschart = 
    {
      "name": "Vacation",
      value: 600
    }
  
    

  constructor(private goalschartService: GoalschartService) { }

  ngOnInit(): void {
    this.goalschartService.getGoals().subscribe((data: any[])=> {
      this.goals = data;
      this.getGoalsChartData();
    })
  }

  getGoalsChartData() {

    this.goals.forEach((goal) => {
      for (let i =0; i< this.goalsArray.length; i++){
      this.goalschart[i].name =goal.name;
      console.log(this.goalschart.name);
      this.goalschart[i].value=goal.currentSavings;
      this.goalsArray.push(this.goalschart[i]);
      }
    })
  }
}


