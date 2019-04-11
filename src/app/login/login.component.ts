import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {Session} from '../models/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public session: Session;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private modalService: NgxSmartModalService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login($event) {
    $event.preventDefault();
    this.loading = true;
    this
      .userService
      .auth(this.loginForm.getRawValue())
      .subscribe((response: Session) => {
        this.session = response;
        setTimeout(() => {
          this.modalService.open('code-insertion');
        }, 50);
      }, (errorResp: any) => {
        this.loading = false;
      });
  }

  validCode() {
    localStorage.setItem('session', JSON.stringify(this.session));
    this.router.navigate(['home']);
  }

}
