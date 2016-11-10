//this tells Angular to start up the application (initializes the platform that application runs in, then uses the platform to bootstrap appModule)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//import { enableProdMode } from '@angular/core';


const platform = platformBrowserDynamic();
// enable production mode and thus disable debugging information
//enableProdMode();

platform.bootstrapModule(AppModule);