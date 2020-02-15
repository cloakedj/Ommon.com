import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CompetitionsTabComponent } from './components/competitions-tab/competitions-tab.component';
import { EventsTabComponent } from './components/events-tab/events-tab.component';
import { CollaborationsTabComponent } from './components/collaborations-tab/collaborations-tab.component';
import { PostEventComponent } from './components/post-event/post-event.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CompetitionPageComponent } from './components/competition-page/competition-page.component';
import { UserTimelineComponent } from './components/user-timeline/user-timeline.component';
import { AttendNavbarComponent } from './components/attend-navbar/attend-navbar.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SignupComponent,
    HomepageComponent,
    CompetitionsTabComponent,
    EventsTabComponent,
    CollaborationsTabComponent,
    PostEventComponent,
    NavbarComponent,
    CompetitionPageComponent,
    UserTimelineComponent,
    AttendNavbarComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
