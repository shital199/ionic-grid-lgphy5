import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
// We really dont need to pay attention to this file, all it does is 
// bootstrap angular, so nothing specific here.
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']) window['ngRef'].destroy();
  window['ngRef'] = ref;
}).catch(err => console.error(err));