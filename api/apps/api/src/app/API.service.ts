
import axios, {AxiosInstance} from "axios";
import {IUser, UserFeed} from "./models";
import { Injectable } from "@nestjs/common";


@Injectable()
export class APIService {

  private readonly API_URL = 'https://imai.co/api/';
  private readonly API_KEY: string = 'fZLcQxjr5u';
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: this.API_URL,
      timeout: 5000,
      headers: {'authkey': this.API_KEY}
    });
  }

  public async getUsers(term: string) {
    console.log('term', term);
    const response =  await this.apiClient.get(`/dict/users?type=search&q=${term}`);
    console.log('response', response);
    if (response.status === 200) {
      const data: IUser[] = [];
      if (response.data.success === true) {
        response.data.data.map((item: any) => {
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
  }

  public async getUserFeed(userId: number, cursor: string = ''){

    let uri = `/raw/ig/user/feed/?url=${userId}&after=${cursor}`;
    if (cursor === '') {
      uri = `/raw/ig/user/feed/?url=${userId}`;
    }
    console.log('uri', uri);
    const response = await this.apiClient.get<UserFeed>(uri);
    console.log('response', response);
    if (response.status === 200) {
      if (response.data.status === "ok") {
        return {
          more_available: response.data.more_available,
          end_cursor: response.data.end_cursor,
          items: response.data.items,
        };
      }
    }
    return null;
  }

  public async exportUser(userId: number) {
    const response = await this.apiClient.get(`/exports/contacts/?platform=instagram&url=${userId}`);
    if (response.status === 200) {
      if (response.data.success) {
        return response.data.user_profile;
      }
    }
    return null;
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
