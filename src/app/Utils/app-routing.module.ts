
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from '../auth/login/login.component';
import { CreateSurveyComponent } from '../create-survey/create-survey.component';
import { RegisterComponent } from '../auth/register/register.component';
import { SurveysListComponent } from '../surveys-list/surveys-list.component';
import { ParticipateSurveyComponent } from '../participate-survey/participate-survey.component';
import { AuthGuard } from '../Guards/auth.guard';

const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "surveys", component: SurveysListComponent, canActivate: [AuthGuard] },
    { path: "create-survey", component: CreateSurveyComponent, canActivate: [AuthGuard] },
    { path: "participate/:id", component: ParticipateSurveyComponent, canActivate: [AuthGuard] },
    { path: "**", redirectTo: "/login" }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }