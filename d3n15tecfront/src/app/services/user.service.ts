import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, takeUntil } from 'rxjs';
import { API_URL_UD } from 'src/app/constants/url';
import { User } from '../shared/models/user.model';
import { ProfileService } from './profile.service';
import { AuthTokenService } from './auth/auth-token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  private apiUrl = API_URL_UD + '/users/'; 
  public item: any;
  public user: any;
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient,
              private profileService: ProfileService,
              private authTokenService: AuthTokenService,
              private router: Router) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }       
         
  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'todos-usuarios', { params });
  }

  getUser(){
    if(this.authTokenService.getToken != null){
      this.item = this.authTokenService.decodePayloadJWT();
    }

    this.user = new User();
    this.profileService.getProfileId(this.item.sub)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
    (data: any[]) => {
        this.user = data;
    })
  }

  getRole(){
    try {
      return localStorage.getItem('ROLE');
    } catch (Error) {
      this.router.navigate(["/login"]);
      return null;
    }
  }
}
