import { Component } from '@angular/core';
import { TLTravelToken } from '../models/tl-travel-token.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public userCredentialForm: FormGroup = new FormGroup(
    {
      userName: new FormControl(),
      password: new FormControl(),
      rememberMe: new FormControl()
    }
  );

  private authenticationService: AuthenticationService;
  private router: Router;
  constructor(authenticationService: AuthenticationService, router: Router) {
    this.authenticationService = authenticationService;
    this.router = router;
  }

  public onSubmit():void {
    this.authenticationService.authenticate (
      this.userCredentialForm.value.userName,
      this.userCredentialForm.value.password
    ).subscribe((token: TLTravelToken) =>
    {
      localStorage.setItem('Token', token.token);
      this.router.navigate(['home']);
      console.log(localStorage.getItem('Token'));
    });
  }

  public forget() :void {
    this.authenticationService.logOut()
  }

}
