//import statements give me access to particular files
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
	// needs to import BrowserModule in order to run app within browser
	imports: [BrowserModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }