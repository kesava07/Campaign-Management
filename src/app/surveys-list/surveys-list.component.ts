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
    this.surveyData = this.surveySer.getSurveys();
    console.log(this.surveyData);
  }

}
