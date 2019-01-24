import { Component, OnInit } from '@angular/core';
import { Teman } from './teman.model';

@Component({
  selector: 'app-teman',
  templateUrl: './teman.component.html',
  styleUrls: ['./teman.component.css']
})
export class TemanComponent implements OnInit {
  temanList: Teman[] = [];
  temanEdit: Teman = new Teman();
  constructor() { }

  ngOnInit() {
  }

  // onTemanAdded bisa diganti
  onTemanAdded(temanInfo: Teman) {
    this.temanList.push(temanInfo);
  }

  onTemanEdit(temanInfo: Teman) {
    this.temanEdit = temanInfo;
    console.log(this.temanEdit);
  }



}
