import {Injectable} from "@angular/core";

@Injectable()
export abstract class ZoneSocket {
  abstract getMessage(): Promise<string>;
}
