import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportappsComponent } from './components/reportapps/reportapps.component';

const routes: Routes = [
  {path:'', redirectTo:'reportapps', pathMatch:'full'},
  {path:'reportapps', component:ReportappsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
