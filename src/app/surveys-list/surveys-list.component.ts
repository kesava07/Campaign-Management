import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit {

  surveyData;

  constructor(private surveySer: SurveyService, private router: Router) { }

  ngOnInit() {
    const mySurveys = this.surveySer.getSurveys();
    this.surveyData = mySurveys.map(survey => {
      return {
        ...survey,
        status: this.surveySer.getStatus(survey.surveyStartDate, survey.surveyEndDate)
      }
    })
    // console.log(this.surveyData);
  }
  startSurvey(id) {
    this.router.navigate(["participate", id]);
  }

}
