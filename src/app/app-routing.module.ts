import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CompetitionsTabComponent } from './components/competitions-tab/competitions-tab.component';
import { EventsTabComponent } from './components/events-tab/events-tab.component';
import { CollaborationsTabComponent } from './components/collaborations-tab/collaborations-tab.component';
import { PostEventComponent } from './components/post-event/post-event.component';
import { CompetitionPageComponent } from './components/competition-page/competition-page.component';


const routes: Routes = [
  {
    path : 'login',component:LoginComponentComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'competition-page', component:CompetitionPageComponent
  },
  {
    path:'User', component : HomepageComponent,children:[
      {path : 'competitions', component: CompetitionsTabComponent, outlet: 'HomeRouter'},
      {path : 'events', component : EventsTabComponent, outlet: 'HomeRouter'},
      {path : 'collaborations', component : CollaborationsTabComponent, outlet: 'HomeRouter'},
    ]
  },
  {
    path : '', redirectTo: 'login', pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
