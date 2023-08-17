import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs";
import {IUser} from "../Dta";

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly API_URL = 'https://imai.co/api/';
  constructor (private http: HttpClient) {}
  public getUsers(term: string) {
    return this.http.get(this.API_URL + '/dict/users?type=search&q=' + term).pipe(
      map((res: any) => {
        const data: IUser[] = [];
        if (res.success === true) {
          res.data.map((item: any) => {
            data.push({
              user_id: item.user_id,
              username: item.username,
              followers: item.followers,
              fullname: item.fullname,
              picture: item.picture,
              display_followers: this.formatLargeNumber(item.followers),
              is_verified: item.is_verified,
            });
          });
        }
        return data;
      }
    ));
  }
  private formatLargeNumber(number: number): string {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + " mil";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + " k";
    } else {
      return number.toString();
    }
  }
}
