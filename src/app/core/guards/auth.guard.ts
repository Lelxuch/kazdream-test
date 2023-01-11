import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {NzMessageService} from "ng-zorro-antd/message";

import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private message: NzMessageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLogged) {
      this.router.navigateByUrl('/login');
      this.message.create('error', 'Вы не авторизованы')
    }
    return this.authService.isLogged;
  }

}
