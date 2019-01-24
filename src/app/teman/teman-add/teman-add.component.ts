import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Teman } from '../teman.model';
import { TemansService } from '../temans.service';

@Component({
  selector: 'app-teman-add',
  templateUrl: './teman-add.component.html',
  styleUrls: ['./teman-add.component.css'],
  providers: [TemansService]
})
export class TemanAddComponent implements OnInit {
  @ViewChild('inputIsbn') inputIsbn: ElementRef;
  @ViewChild('inputQty') inputQty: ElementRef;

  @Output() temanAdded = new EventEmitter<Teman>();

  @Input() temanChild: Teman;
  @Input() temanEditParent: Teman;

  // inputInfo didapat ng model di teman-add.componen.html dan Teman itu di dapat dari teman.model.ts
  inputInfo: Teman = new Teman();
  constructor(private temans: TemansService) { }
  ngOnInit() {
  }

  // tambahTeman() di dapat dari teman-add.component.html
  tambahTeman(inputNama: HTMLInputElement) {
    // console.log(this.inputInfo);
    // // ini tanpa @ViewChild
    // console.log(this.inputNama.nativeElement.value);
    // console.log(inputEmail.value);
    // console.log(this.inputContact.nativeElement.value);

    //ini convert nama teman didapat dari temans service
    this.temanAdded.emit(this.temans.convertIsbnTeman(this.inputInfo));
    //instansisasi ulang, supaya tidak bisa edit di form
    this.inputInfo = new Teman();

  }

}
