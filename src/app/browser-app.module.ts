import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';
import {BrowserZoneSocketModule} from "../modules/zone-socket/zone-socket.browser.module";

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    BrowserTransferStateModule,
    BrowserZoneSocketModule,
    AppModule
	]
})
export class BrowserAppModule {}
