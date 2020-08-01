import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SurveyService } from '../services/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-participate-survey',
  templateUrl: './participate-survey.component.html',
  styleUrls: ['./participate-survey.component.css']
})
export class ParticipateSurveyComponent implements OnInit, OnDestroy {

  @ViewChild("frm") frm: NgForm;

  constructor(private router: Router, private surveySer: SurveyService, private route: ActivatedRoute) { }

  survey;
  status;
  isStartedSurvey = false
  subscription: Subscription;
  questionIndex = 0;
  isShowFinalButton = false;
  surveyResultData = [];
  answer;
  form;
  isSurveyCompleted = false;
  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      if (params.id) {
        this.survey = this.surveySer.getOneSurvey(params.id);
      }
    })
    if (this.survey) {
      this.status = this.surveySer.getStatus(this.survey.surveyStartDate, this.survey.surveyEndDate);
      this.isShowFinalButton = this.survey.questions.length === 1 ? true : false
    }
  }

  handleQuestionSubmit(form) {
    if (this.survey) {

      let newData = {}
      if (this.survey.questions[this.questionIndex].questionType === 'multiple') {
        const obj = form.value
        const selectedOptions = Object.keys(obj).filter(k => {
          return obj[k] === true;
        });
        newData = {
          question: this.survey.questions[this.questionIndex].question,
          answer: selectedOptions
        }

      } else {
        newData = {
          question: this.survey.questions[this.questionIndex].question,
          answer: form.value.answer
        }
      }
      this.surveyResultData.push(newData);
      this.frm.reset();

      if (this.questionIndex === this.survey.questions.length - 1) {
        console.log(this.surveyResultData);
        this.isSurveyCompleted = true;
        setTimeout(() => {
          this.router.navigate(["survey-success"]);
        }, 200)
        return;
      }

      if (this.questionIndex < this.survey.questions.length - 2) {
        this.questionIndex = this.questionIndex + 1;
      } else {
        this.questionIndex = this.questionIndex + 1;
        this.isShowFinalButton = true;
      }



    }
  }

  // handleQuestionSubmit(form) {
  //   console.log(form.value);
  //   if (this.survey && this.survey.questions) {
  //     const newData = {
  //       question: this.survey.questions[this.questionIndex].question,
  //       answer: form.value.answer
  //     }
  //     this.surveyResultData.push(newData);
  //     this.frm.reset();
  //     if (this.questionIndex < this.survey.questions.length - 2) {
  //       this.questionIndex++;
  //     } else {
  //       this.questionIndex++;
  //       this.isShowFinalButton = true;
  //     }
  //     if (this.questionIndex === this.survey.questions.length) {
  //       console.log(this.surveyResultData);
  //     }
  //   }
  // }

  startSurvey() {
    this.isStartedSurvey = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
