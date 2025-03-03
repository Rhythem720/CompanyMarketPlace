import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SelfItemsComponent } from './self-items/self-items.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AuthComponent } from './auth/auth.component';
import { GuardGuard } from './auth/guard.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate:[GuardGuard]},
  {path:'login',component:AuthComponent},
  {path:'',component:AuthComponent},
  { path: 'myitems', component: SelfItemsComponent ,canActivate:[GuardGuard]},
  {path:'transcations',component:TransactionComponent,canActivate:[GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
