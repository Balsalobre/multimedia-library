import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      userName: [],
      password: [],
    });
  }

  onSubmit() {
    this.loginService.updateLoginSubject(this.loginForm.value);
    this.router.navigate(['/home']);
}

}
