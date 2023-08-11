import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  private authenticationService: AuthenticationService

  constructor(authenticationService: AuthenticationService) {
    this.authenticationService = authenticationService;
  }

  public onSubmit(userCredentials: any):void
  {
    this.authenticationService.authenticate(userCredentials.userName,userCredentials.password)
    .subscribe((value: string)=>
    {
      localStorage.setItem('Token', value);
    });
    
    console.log()
  }

}
