import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { UserService } from "../user.service";

@Injectable({
  providedIn: "root"
})
export class RoleGuard {

  constructor(private userService: UserService,
              private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const roles = next.data.roles;
    const roleUser = this.userService.getRole();

    if (roles){
      for (let role of roles){
        if(roleUser === role) return true;
      }
    }

    this.router.navigate(["/home"]);
    return false;
  }

}
