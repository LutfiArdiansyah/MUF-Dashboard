import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ReportCabangComponent } from './components/dashboard/report-cabang/report-cabang.component';
import { CollectionComponent } from './components/dashboard/collection/collection.component';

const routes: Routes = [
  {path:'', redirectTo:'landing/reportapps', pathMatch:'full'},
  {path:'landing', redirectTo:'landing/reportapps'},
  {path:'landing', component:LandingComponent, children:[
    {path:'reportapps', component:CollectionComponent},
    {path:'report-cabang', component:ReportCabangComponent}
  ]},
  { path: '**',  redirectTo:'landing/reportapps', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
