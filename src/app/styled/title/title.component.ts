import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'styled-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  // @Input() type: 'h1' | 'h2' | 'h3' | 'h4' = 'h1';

  @ViewChild('container') container: ElementRef;
  get $container(): HTMLDivElement | null {
    return this.container?.nativeElement as HTMLDivElement;
  }

  get isH1() {
    return this.getIsH('[h1]');
  }

  get isH2() {
    return this.getIsH('[h2]');
  }

  get isH3() {
    return this.getIsH('[h3]');
  }

  get isH4() {
    return this.getIsH('[h4]');
  }

  get isH5() {
    return this.getIsH('[h5]');
  }

  get isH6() {
    return this.getIsH('[h6]');
  }

  constructor() { }

  ngOnInit(): void {
  }

  getIsH(selector: string) {
    if(!this.$container) return true;
    return this.$container.querySelector(selector) !== null;
  }

}
