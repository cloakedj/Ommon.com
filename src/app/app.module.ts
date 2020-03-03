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
import { EventModalComponent } from './components/event-modal/event-modal.component';
import { TagsComponent } from './components/tags/tags.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AddCompComponent } from './components/add-comp/add-comp.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

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
    EventModalComponent,
    TagsComponent,
    AddCompComponent,
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ToastrModule.forRoot(),
    NgxMaterialTimepickerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
