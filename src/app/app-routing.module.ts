import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/RegisterComponent;

const routes: Routes = [
  { path: 'register', component: RegisterComponent }, // Route for Register page
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route (optional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
