import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maxSchwarzGuide';
  //array serverElement -> bound with 'element' from 'server-element.component'
  serverElements: any[] = [{type: 'Server', name: 'Testserver', content: 'Suca!'}];
  
  //following methods push into 'serverElements' array new 'element' objects fetched from user (see 'server-element.component')
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName, // old -> 'name: this.newServerName'
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

 

}
