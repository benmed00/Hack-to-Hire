import { AuthGuard } from './Services/auth/auth-guard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { PostDialogComponent } from './article/post-dialog/post-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './Services/auth/auth.service';
import { DataService } from './Services/data/data.service';
import { AuthenticatService } from './Services/auth/authenticat.service';

import { AppComponent } from './app.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { ArticleComponent } from './article/article.component';
import { DefaultAngularComponent } from './default-angular/default-angular.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { ListArticlesComponent } from './article/list-articles/list-articles.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { TagComponent } from './component/tag/tag.component';
import { MaterialModuleExtern } from './material/material-module'; // global import for
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    DefaultAngularComponent,

    EditArticleComponent,
    UpdateArticleComponent,
    ListArticlesComponent,
    TagComponent,
    PostDialogComponent,

    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatChipsModule,
    MatAutocompleteModule,

    // MaterialModuleExtern,
    // MaterialModule.forRoot(),
  ],
  providers: [DataService, AuthService, AuthenticatService, AuthGuard],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
