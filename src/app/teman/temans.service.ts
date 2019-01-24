import { Injectable } from '@angular/core';
import { Teman } from './teman.model';

@Injectable({
  providedIn: 'root'
})
export class TemansService {

  constructor() { }

  convertIsbnTeman(temanInfo: Teman): Teman {
    temanInfo.isbn = temanInfo.isbn.toUpperCase();
    return temanInfo;
  }

}
