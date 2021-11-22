import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveInactiveUserService {

  constructor() { }
   activeUser = ['sedhupathi','malathy','deepika']
   inActiveUser= ['vijai','ajith','vikram']

}
