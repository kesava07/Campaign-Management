import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveys = [
    { "surveyName": "Test Survey", "surveyStartDate": "2020-07-28T20:43", "surveyEndDate": "2020-07-31T20:43", "questions": [{ "question": "What is your 3rd month in the year?", "questionType": "single", "options": ["Febravary", "April", "March", "June"] }] }
  ];

  getSurveys() {
    return this.surveys;
  }

  createSurvey(survey) {
    return this.surveys.push(survey);
  }

  deleteSurvey(index) {
    return this.surveys.filter((_, i) => i !== index);
  }

}
