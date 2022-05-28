import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //property binding -> template 'app.component' for-loop
  //'@Input()' decorator makes this propery bindable from outside this class (which is NOT by default) -> see DOC
  //also I define an alias for the 'element' property ('element-alias') as a parameter
  @Input('element-alias') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
