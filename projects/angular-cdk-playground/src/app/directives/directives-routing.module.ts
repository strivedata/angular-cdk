import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';

const routes: Routes = [
  {
    path: '',
    component: DirectivesComponent
  },
  {
    path: 'tabs',
    component: DirectivesComponent,
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule)
  },
  {
    path: 'stepper',
    component: DirectivesComponent,
    loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule)
  },
  {
    path: 'toggle',
    component: DirectivesComponent,
    loadChildren: () => import('./toggle/toggle.module').then(m => m.ToggleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
