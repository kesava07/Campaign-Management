import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveys = [];

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
