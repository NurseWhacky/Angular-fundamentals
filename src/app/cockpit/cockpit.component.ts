import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //properties of generic type EventEmitter to be used to fire an $event
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //alias 'bpCreatedAlias' MUST be used in app.component.html WHEN defined
  @Output('bpCreatedAlias') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) { // <- specify type 'any' OR 'HTMLInputElement'
    // console.log(`TIPO: ${this.serverContentInput.nativeElement.type}`);
    // console.log(`VALORE: ${this.serverContentInput.nativeElement.value}`);
    //console.log(nameInput.value); //outputs: <input _ngcontent-bap-c43="" type="text" class="form-control">
    
    //method emits an event of type 'serverCreated' each time this is called in the template
    this.serverCreated.emit({
      serverName: nameInput.value, //this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
    
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // console.log(nameInput.value);
    //emits an event of type 'blueprintCreated' each time this method is called in the template
    this.blueprintCreated.emit({
      serverName: nameInput.value, //this.newServerName, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
