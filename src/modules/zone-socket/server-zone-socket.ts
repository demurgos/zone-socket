import * as net from "net";
import {ZoneSocket} from "./zone-socket";

export class ServerZoneSocket extends ZoneSocket {
  async getMessage(): Promise<string> {
    console.log("Entered ServerZoneSocket#getMessage");

    return new Promise<string>(function (resolve, reject) {
      const s = new net.Socket();
      s.connect(80, "example.com");
      s.write(new Buffer("GET /index.html HTTP/1.1\nHost: example.com\n\n"));
      s.on("data", function(data) {
        console.log("Resolved message (socket)");
        resolve("Server-side message, after response from example.com");
      });
    });

    // return new Promise<string>((resolve, reject) => {
    //   console.log("Resolved message (simple)");
    //   resolve("Server-side message, with simple resolution");
    // });
  }
}
