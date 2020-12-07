import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticatService } from 'src/app/Services/auth/authenticat.service';
import { AuthService } from '../../Services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthenticatService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      role:  [null, [Validators.required]],
    });
  }

  onSignup() {
    this.loading = true;
    const user: User = {
      username: this.signupForm.get('username').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value,
      role: this.signupForm.get('role').value,
      createdAt: new Date(),
      updateAt: new Date()
    };
    this.auth
      .createNewUser(user)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/article']);
      })
      .catch((error) => {
        this.loading = false;
        this.errorMessage = error.message;
      });
  }
}
