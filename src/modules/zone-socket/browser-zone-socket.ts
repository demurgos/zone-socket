import {ZoneSocket} from "./zone-socket";

export class BrowserZoneSocket extends ZoneSocket {
  async getMessage(): Promise<string> {
    return "Browser message, disable Javascript to view the server message";
  }
}
