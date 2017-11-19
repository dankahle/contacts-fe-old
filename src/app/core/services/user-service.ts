import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import {Store} from "./store";
import {Http} from "@angular/http";
import {Router} from "@angular/router";


@Injectable()
export class UserService {
  user: User;

  constructor(private http: HttpClient, private store: Store, private router: Router) {
  }

  isAuthenticated() {
    return !!this.user;
  }

  getCurrentUser() {
    return this.user;
  }

  getUserFromServer() {
    return this.http.get<User>(environment.apiUrl + 'api/login/current')
      .map(user => {
        this.user = user;
        this.store.updateUser(user);
        return user;
      })
  }

  login(_user) {
    return this.http.post<any>(environment.apiUrl + 'api/login', _user)
      .map(user => {
        this.user = user;
        this.store.updateUser(user);
        return user;
      })
  }

  logout() {
    this.user = undefined;
    this.router.navigateByUrl('/login');
  }

  register(_user) {
    return this.http.post<any>(environment.apiUrl + 'api/register', _user)
      .map(user => {
        this.user = user;
        this.store.updateUser(user);
        return user;
      })
  }

}

