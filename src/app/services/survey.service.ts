import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveys = [
    {
      "surveyName": "Test Survey", "surveyStartDate": "2020-07-28T20:43", "surveyEndDate": "2020-08-01T20:43", "questions": [{ "question": "What is your 3rd month in the year?", "questionType": "single", "options": ["Febravary", "April", "March", "June"] },
      { "question": "What is your 3rd month in the year 1?", "questionType": "single", "options": ["Febravary", "April", "March", "June"] },
      { "question": "What is your 3rd month in the year 2?", "questionType": "multiple", "options": ["Febravary", "April", "March", "June"] },
      { "question": "What is your 3rd month in the year 3?", "questionType": "single", "options": ["Febravary", "April", "March", "June"] },
      { "question": "What is your 3rd month in the year 4?", "questionType": "summery", "options": ["Febravary", "April", "March", "June"] }]
    },
    {
      "surveyName": "User Survey", "surveyStartDate": "2020-08-01T19:07", "surveyEndDate": "2020-08-04T19:07", "questions": [{ "question": "What is your 3rd month in the year?", "questionType": "single", "options": ["Febravary", "April", "March", "June"] }],
    }
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

  getOneSurvey(id) {
    const surveys = [...this.surveys];
    return surveys[id]
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

}
