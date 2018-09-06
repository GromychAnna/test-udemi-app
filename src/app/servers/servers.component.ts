import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName = '';
  disableClicking = this.serverName === '';

  constructor() {
  }

  ngOnInit() {
  }

  updateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
    this.disableClicking = this.serverName === '';
  }

  resetInput() {
    this.serverName = '';
    this.disableClicking = true;
  }

}
