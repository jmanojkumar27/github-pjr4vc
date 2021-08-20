import {Injectable} from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {of} from "rxjs";
import {concatMap, map} from "rxjs/operators"; 


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {   
    if(JSON.parse(localStorage.getItem('isAuth')!) == false){
      return alert("You dont have permission to create posts")
    } 
    return JSON.parse(localStorage.getItem('isAuth')!)
  } 
}
