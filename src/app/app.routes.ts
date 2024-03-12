import { Routes } from '@angular/router';
import { CargaComponent } from './pages/carga/carga.component';
import { VerificacionComponent } from './pages/verificacion/verificacion.component';

export const routes: Routes = [
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
    { path: 'registrer', loadChildren: () => import('./pages/registrer/registrer.module').then(m => m.RegistrerModule)},
    { path: 'carga', component: CargaComponent },
    { path: 'tabla', loadChildren: () => import('./pages/tablaUsuario/tabla.module').then(m => m.TablaModule)},
    { path: 'tablaGames', loadChildren: () => import('./pages/tabla-games/tabla-games.module').then(m => m.TablaGamesModule)},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
