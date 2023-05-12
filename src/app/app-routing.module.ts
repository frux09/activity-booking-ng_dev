import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    loadChildren : () =>
      import('./contact/contact.module').then( (m) => m.ContactModule ),
  },
  {
    path: 'activities',
    loadChildren: () =>
      import('./activities/activities.module').then(m => m.ActivitiesModule)
  },
  //path: 'activities/:slug',
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
