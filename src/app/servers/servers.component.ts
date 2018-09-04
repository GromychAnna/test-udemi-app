import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created!';
  }

  // onUpdateServerName(event: Event) {
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    // this.serverName = event.target.value; // in case of commented function declaration
  }

}
