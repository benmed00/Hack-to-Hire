import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { AuthGuard } from './Services/auth/auth-guard.service';
import { LoginComponent } from './auth/login/login.component';
import { DefaultAngularComponent } from './default-angular/default-angular.component';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { ListArticlesComponent } from './article/list-articles/list-articles.component';
import { AddArticleComponent } from './article/add-article/add-article.component';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-article',
    component: EditArticleComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'list-articles',
    component: ListArticlesComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'add-article',
    component: AddArticleComponent,
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
