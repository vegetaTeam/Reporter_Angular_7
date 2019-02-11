import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'Reporter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router) {
  }

  ngOnInit() {

    this.formLogin = this._formBuilder.group({
      user: [ 'Admin', [Validators.required, Validators.minLength(5)]],
      password: [ '', [Validators.required, Validators.minLength(5)] ],
      accessOn: new Date().toISOString().substring(0, 10)
    });

  }

  public onSubmitLogin(formLogin) {
    if ( formLogin.user === 'Admin' && formLogin.password === 'Admin' ) {
      this._router.navigate(['main']);
    } else {
      console.log('no login');
    }
  }

  public get lf () {
    return this.formLogin.controls;
  }

}
