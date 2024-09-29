/// <reference types="@angular/localize" />

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/presentation/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
