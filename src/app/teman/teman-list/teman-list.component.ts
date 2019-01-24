import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, Pipe, Directive } from '@angular/core';
import { Teman } from '../teman.model';
import { TemansService} from '../temans.service'

@Component({
  selector: 'app-teman-list',
  templateUrl: './teman-list.component.html',
  styleUrls: ['./teman-list.component.css'],
  providers: [TemansService]
})


export class TemanListComponent implements OnInit {
  
  @ViewChild('inputTotal') inputTotal: ElementRef;
  @Output() dariChildKeParent: EventEmitter<Teman> = new EventEmitter();
  @Input() temanParent: Teman[];
  constructor() { }
  
  ngOnInit() {
  }
  // idx disitu adalah variable
  showname(idx: number) {
    this.dariChildKeParent.emit(this.temanParent[idx]);
  }

}
