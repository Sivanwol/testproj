import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagerService {
  constructor() { }

  init(key: string) {
    localStorage.removeItem(key);
  }

  getItems<T>(key: string): Observable<T[]> {
    return new Observable<T[]>(n => {
      const list = JSON.parse(localStorage.getItem(key) || '[]') as T[];
      n.next(list);
      n.complete();
    });
  }

  setItems<T>(key: string, items: any) {
    return new Observable<any>(n => {
      localStorage.setItem(key, JSON.stringify(items));
      n.next();
      n.complete();
    })
  }
}
