import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './Utils/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { SurveysListComponent } from './surveys-list/surveys-list.component';
import { ParticipateSurveyComponent } from './participate-survey/participate-survey.component';
import { AuthGuard } from './Guards/auth.guard';
import { AuthService } from './services/auth.service';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateSurveyComponent,
    SurveysListComponent,
    ParticipateSurveyComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
