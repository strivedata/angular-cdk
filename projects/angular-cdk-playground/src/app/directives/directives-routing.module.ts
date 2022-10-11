import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives.component';
import { StepperComponent } from './stepper/stepper.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent },
  { path: 'stepper', component: StepperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
