import { EventEmitter, Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  creds = {
    username: 'aditya',
    password: '12345678',
  };

  authorized = new EventEmitter<boolean>();

  constructor() {}
}
