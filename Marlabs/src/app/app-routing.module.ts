import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnComponent } from "../learn/learn.component";
import { PracticeComponent } from "../practice/practice.component";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { ReactiveComponent } from "../reactiveform/reactive.component";
const routes: Routes = [
{path:'learn',component:LearnComponent},
{path:'practice',component:PracticeComponent},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'reactive',component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
