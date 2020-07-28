import { Component, OnInit, ViewChild } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  @ViewChild("questionForm") questionForm: NgForm;

  questionsData = [];
  surveyName: string;
  surveyStartDate;
  surveyEndDate;
  numberOfOptions = [1, 2];

  constructor(private router: Router, private surveySer: SurveyService) { }

  ngOnInit(): void {
  }

  addOption() {
    this.numberOfOptions.push(this.numberOfOptions.length + 1);
    console.log(this.numberOfOptions);
  }
  removeOption() {
    this.numberOfOptions.pop();
    console.log(this.numberOfOptions);
  }

  addQuestion(question) {
    if (this.questionsData.length < 5) {
      const values = question.form.value;
      let newForm = {};
      if (values.questionType !== 'summery') {
        newForm = {
          question: values.question,
          questionType: values.questionType,
          options: Object.values(values.options)
        }
      } else {
        newForm = {
          question: values.question,
          questionType: values.questionType
        }
      }
      this.questionsData.push(newForm);
      this.questionForm.reset();
      this.numberOfOptions = this.numberOfOptions.splice(0, 2);
    } else {
      alert("For a survey upto 5 questions are allowed");
    }
  }

  submitSurvey() {
    if (this.checkSurvey()) {
      alert("Please enter all the fields");
    } else if (this.surveyStartDate === this.surveyEndDate) {
      alert("Start and End dates should not be the same")
    } else {
      const newSurvey = {
        surveyName: this.surveyName,
        surveyStartDate: this.surveyStartDate,
        surveyEndDate: this.surveyEndDate,
        questions: this.questionsData
      }
      this.surveySer.createSurvey(newSurvey);
      this.router.navigate(['/surveys'])
    }



  }

  checkSurvey() {
    return !this.surveyName.trim().length || !this.surveyEndDate.trim().length || !this.surveyStartDate.trim().length
  }

}
