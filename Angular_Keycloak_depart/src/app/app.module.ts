import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatsComponent } from './plats/plats.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak
      .init({
        config: {
          url: 'http://localhost:8090', // Ensure your Keycloak server is accessible
          realm: 'ahmed-realm', // Use the correct realm name
          clientId: 'plat-app', // Ensure your clientId matches the one in Keycloak
        },
        initOptions: {
          onLoad: 'login-required',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
        },
      })
      .then(() => {
        console.log('Keycloak initialized successfully');
      })
      .catch((error) => {
        console.error('Keycloak initialization failed', error);
        return Promise.reject(error); // Reject the promise and ensure app doesn’t proceed
      });
}


@NgModule({
  declarations: [AppComponent, PlatsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
