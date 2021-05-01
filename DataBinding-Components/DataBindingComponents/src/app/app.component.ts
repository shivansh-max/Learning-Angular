import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type:'blueprint',name: 'Test Blueprint', content: 'Testing if this works'},
  {type:'server',name: 'Test Server', content: 'Testing if this works'}
  ];
  // logger() {
  //   console.log(this.serverElements)
  // }


  onServerAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    // this.logger();
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed'
  }

  onChangeDestroy() {
    this.serverElements.splice(0,1);
  }

  onBlueprintAdded(serverData:{serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    // this.logger();
    // console.log(serverElements)
  }
}
