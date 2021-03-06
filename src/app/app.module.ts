import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


//Main App Component
import { AppComponent } from './app.component';

//Custom Components
import { IResumeComponent } from './iresume/iresume.component';
import { AboutComponent } from './About/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    IResumeComponent,
    AboutComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
