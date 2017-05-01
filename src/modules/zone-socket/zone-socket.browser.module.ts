import {NgModule} from "@angular/core";
import {ZoneSocket} from "./zone-socket";
import {BrowserZoneSocket} from "./browser-zone-socket";

@NgModule({
  providers: [
    {provide: ZoneSocket, useClass: BrowserZoneSocket}
  ]
})
export class BrowserZoneSocketModule {
}
