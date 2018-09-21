import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicacionErrorService {
  bla: string;
  constructor() { }
  notifyLoading(value: boolean) {
    return this.bla;
}
}
