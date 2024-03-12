import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { tokenHeaderInterceptor } from './Core/Interceptor/token-interceptor.interceptor';
import { errorHandlerInterceptor } from './Core/Interceptor/error-interceptor.interceptor';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule), provideHttpClient(withInterceptors([tokenHeaderInterceptor, errorHandlerInterceptor]))]
};
