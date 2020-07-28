
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from '../auth/login/login.component';
import { CreateSurveyComponent } from '../create-survey/create-survey.component';
import { RegisterComponent } from '../auth/register/register.component';
import { SurveysListComponent } from '../surveys-list/surveys-list.component';
import { ParticipateSurveyComponent } from '../participate-survey/participate-survey.component';

const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "surveys", component: SurveysListComponent },
    { path: "create-survey", component: CreateSurveyComponent },
    { path: "participate", component: ParticipateSurveyComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }