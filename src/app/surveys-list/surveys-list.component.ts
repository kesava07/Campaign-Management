import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit {

  surveyData;

  constructor(private surveySer: SurveyService) { }

  ngOnInit() {
    const mySurveys = this.surveySer.getSurveys();
    this.surveyData = mySurveys.map(survey => {
      return {
        ...survey,
        status: this.getStatus(survey.surveyStartDate, survey.surveyEndDate)
      }
    })
    console.log(this.surveyData);
  }

  getStatus(start, end) {
    let status;
    const s = new Date(start);
    const e = new Date(end);
    const c = new Date();
    if (c < s) {
      status = "Upcoming";
    } else if (c > s && c < e) {
      status = "Active";
    } else if (c > e) {
      status = "Expired";
    } else {
      status = "Uncertain"
    }
    return status
  }

  getClass(status) {
    switch (status) {
      case "Upcoming": return "primary";
      case "Active": return "success";
      case "Expired": return "danger";
      default: return "dark";
    }
  }

}
