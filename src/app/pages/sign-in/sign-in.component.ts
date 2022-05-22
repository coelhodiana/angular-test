import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signin() {
    if (this.signForm.valid) {
      this.router.navigate(['/transacoes'])
    }
  }
}