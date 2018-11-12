import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ShoppingComponent } from 'src/app/pages/shopping/shopping.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
    children: []
  }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
