import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //properties of generic type EventEmitter to be used to fire an $event
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    //emits an event of type 'serverCreated' each time this method is called in the template
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
    
  }

  onAddBlueprint() {
    //emits an event of type 'blueprintCreated' each time this method is called in the template
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }
}
