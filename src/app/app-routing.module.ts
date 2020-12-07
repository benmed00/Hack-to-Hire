import { AuthGuard } from './Services/auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { DefaultAngularComponent } from './default-angular/default-angular.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/default', pathMatch: 'full' },
  {
    path: 'default',
    component: DefaultAngularComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit-article',
    component: ArticleComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'list-articles',
    component: ArticleComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'add-article',
    component: ArticleComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
