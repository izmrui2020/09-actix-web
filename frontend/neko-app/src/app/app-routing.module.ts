import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MypageComponent } from './pages/mypage/mypage.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormComponent } from './pages/form/form.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'form', component: FormComponent },
  { path: 'table', component: TableComponent },
  { path: 'mypage', component: MypageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
