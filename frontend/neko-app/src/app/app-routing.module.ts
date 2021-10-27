import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MypageComponent } from './pages/mypage/mypage.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { NekoShowComponent } from './pages/home/neko-show/neko-show.component';
import { NekoEditComponent } from './pages/home/neko-edit/neko-edit.component';
import { NekoNewComponent } from './pages/home/neko-new/neko-new.component';
import { NekoListComponent } from './pages/home/neko-list/neko-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [
  { path: '',  component: NekoListComponent },
  { path: 'neko/{}',  component: NekoShowComponent },
  { path: 'neko/{}/edit',  component: NekoEditComponent },
  { path: 'neko/new',  component: NekoNewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'table', component: TableComponent },
  { path: 'mypage', component: MypageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
