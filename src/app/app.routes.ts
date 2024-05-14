import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate:[AuthGuard]},
  { path: 'main', component: ParentComponent, canActivate:[AuthGuard] },
  { path: 'main/:id', component: ChildComponent },
];