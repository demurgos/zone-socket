import {NgModule} from "@angular/core";
import {ZoneSocket} from "./zone-socket";
import {ServerZoneSocket} from "./server-zone-socket";

@NgModule({
  providers: [
    {provide: ZoneSocket, useClass: ServerZoneSocket}
  ]
})
export class ServerZoneSocketModule {
}
