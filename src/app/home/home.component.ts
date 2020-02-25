import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @Input() parentData:string;
  @Output() childData = new EventEmitter<string>();
  @ViewChild('viewContents',{static:true})
  viewChildVariable: ElementRef;


  @ContentChild('childComponentData',{static:true})
  contentChildVariable:ElementRef;
  
  // viewContent:string
  constructor() { }

  ngOnInit() {
    this.childData.emit("This contents belogs to child component")
    console.log(this.contentChildVariable.nativeElement.innerText)
  }
  


}
