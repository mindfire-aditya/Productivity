import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { WeatherComponent } from './weather/weather.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-list/post-item/post-item.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalItemComponent } from './goal-list/goal-item/goal-item.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishItemComponent } from './wish-list/wish-item/wish-item.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoggedOutComponent,
    LeftPanelComponent,
    WeatherComponent,
    PostListComponent,
    PostItemComponent,
    GoalListComponent,
    GoalItemComponent,
    WishListComponent,
    WishItemComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
