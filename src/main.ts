import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

// Asegúrate de que HttpClientModule esté incluido en los providers
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule), // Asegura HttpClientModule
    ...appConfig.providers
  ]
}).catch((err) => console.error(err));
