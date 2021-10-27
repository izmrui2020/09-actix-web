import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MypageComponent } from './pages/mypage/mypage.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'mypage', component: MypageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
