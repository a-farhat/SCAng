import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IResumeComponent } from './iresume/iresume.component';
import { CustomersComponent } from './customers/customers.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'resume', component: IResumeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home',component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
