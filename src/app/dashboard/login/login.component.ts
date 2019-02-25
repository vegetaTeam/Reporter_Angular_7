import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ModalsService} from "../../services/modalsService/modals.service";
import {AuthService} from "../../services/apiReporter/auth.service";

@Component({
  selector: 'Reporter-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _router: Router,
              private _modalsService: ModalsService,
              private _authService: AuthService) {
  }

  ngOnInit() {

    this.formLogin = this._formBuilder.group({
      user: ['Admin', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      accessOn: new Date().toISOString().substring(0, 10)
    });

  }

  /**Metodo submit del fomulario de autentificación*/
  public onSubmitLogin(formLogin) {

    this._authService.authUser(formLogin.user, formLogin.password).subscribe(
      response =>
        this.checkAuth(response)
    );

  }

  /**Metodo para gardar en cookies a informacion de usuario*/
  public checkAuth(authResponse) {

    if (authResponse.status === 'OK') {

      let newUserAuth: AuthUser = authResponse.user;

      localStorage.setItem('usert', newUserAuth.trelloUser);
      localStorage.setItem('apit', newUserAuth.trelloApiKey);
      localStorage.setItem('tokent', newUserAuth.trelloToken);

      this._router.navigate(['main']);
    } else {
      this._modalsService.showModal('error');
    }


  }

  /**Metodo para manejar el formulario en la vista*/
  public get lf() {
    return this.formLogin.controls;
  }

}
