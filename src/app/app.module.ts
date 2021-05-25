import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { ReposComponent } from './components/repos/repos.component';
import { UsersreposComponent } from './components/usersrepos/usersrepos.component';
import { AboutComponent } from './components/about/about.component';
import { SearchUsersComponent } from './components/search-users/search-users.component';
import { SearchReposComponent } from './components/search-repos/search-repos.component';
import { FormatterPipe } from './res/formatter.pipe';
import { HesitateDirective } from './directives/hesitation.directive';
import { DateCountPipe } from './pipes/date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    UsersComponent,
    ReposComponent,
    UsersreposComponent,
    AboutComponent,
    SearchUsersComponent,
    SearchReposComponent,
    FormatterPipe,
    HesitateDirective,
    DateCountPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
