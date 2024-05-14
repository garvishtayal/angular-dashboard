import { bootstrapApplication } from '@angular/platform-browser';
import { appConfihttpg } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfihttpg)
  .catch((err) => console.error(err));
