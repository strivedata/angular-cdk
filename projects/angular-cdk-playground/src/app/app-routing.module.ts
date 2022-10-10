import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'theme',
    loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule)
  },
  { path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'stepper',
    loadChildren: () => import('./stepper/stepper.module').then(m => m.PlaygroundStepperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
