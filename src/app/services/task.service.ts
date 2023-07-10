import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private webReqService: WebRequestService) {}

  public createRegister(user: Object): Observable<Object> {
    return this.webReqService.post('register', user);
  }

  public getRegister() {
    return this.webReqService.get('register');
  }

  public getContact() {
    return this.webReqService.get('contact');
  }

  public createContact(contact: Object): Observable<Object> {
    return this.webReqService.post('contact', contact);
  }
}
