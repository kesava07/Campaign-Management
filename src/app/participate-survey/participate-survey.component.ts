import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-participate-survey',
  templateUrl: './participate-survey.component.html',
  styleUrls: ['./participate-survey.component.css']
})
export class ParticipateSurveyComponent implements OnInit, OnDestroy {

  constructor(private surveySer: SurveyService, private route: ActivatedRoute) { }

  survey;
  status;
  isStartedSurvey = false
  subscription: Subscription;
  questionIndex = 0;
  isShowFinalButton = false;
  surveyResultData = [];
  answer;
  form ;
  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.survey = this.surveySer.getOneSurvey(params.id);
      }
    })
    if (this.survey) {
      console.log(this.survey);
      this.status = this.surveySer.getStatus(this.survey.surveyStartDate, this.survey.surveyEndDate);
      this.isShowFinalButton = this.survey.questions.length === 1 ? true : false
    }
    console.log(this.survey.questions.length);
  }

  onHandleNext() {
    if (this.survey) {
      const newData = {
        question: this.survey.questions[this.questionIndex].question,
        answer: this.answer
      }
      this.answer = "";
      this.surveyResultData.push(newData);
      if (this.questionIndex < this.survey.questions.length - 2) {
        this.questionIndex++;
      } else {
        this.questionIndex++;
        this.isShowFinalButton = true;
      }
    }
  }
  finishSurvey() {
    console.log(this.form);
    const newData = {
      question: this.survey.questions[this.questionIndex].question,
      answer: this.answer
    }
    this.answer = "";
    this.surveyResultData.push(newData);
    console.log(this.surveyResultData);
  }

  handleSubmit(form) {
    console.log(form);
  }

  startSurvey() {
    this.isStartedSurvey = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleChange(e , i){
    console.log(e ,i);
  }

}
