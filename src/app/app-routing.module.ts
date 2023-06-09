import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:NewcompComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
