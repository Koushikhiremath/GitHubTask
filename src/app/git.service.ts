import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http:HttpClient) { }

  getuser(username):Observable<any>{

    return this.http.get<any>("https://api.github.com/users/"+username);

  }

  getfollowers(urlfollower):Observable<any>{
    return this.http.get(urlfollower);
  }

  getfollowings(urlfollowing):Observable<any>{
    return this.http.get(urlfollowing)
  }

  getrepos(urlrepo):Observable<any>{
    return this.http.get(urlrepo);
  }

}
