import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatsComponent } from './plats/plats.component';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {
    path: 'plats',
    component: PlatsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
