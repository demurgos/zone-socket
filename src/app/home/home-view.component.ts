import { Component, OnInit } from '@angular/core';
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { Observable } from 'rxjs/Observable';
import {ZoneSocket} from "../../modules/zone-socket/zone-socket";

@Component({
	selector: 'home-view',
	template: `<h3>{{msg}}</h3>`
})
export class HomeView implements OnInit {
  public msg: string = "Loading message...";

  constructor(private http: TransferHttp, private zoneSocket: ZoneSocket) {
  }

  ngOnInit() {
    this.zoneSocket.getMessage()
      .then((msg) => this.msg = msg);
  }
}
