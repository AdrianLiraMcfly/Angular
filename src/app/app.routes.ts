import { Routes } from '@angular/router';
import { CargaComponent } from './carga/carga.component';
import { TablaComponent } from './tabla/tabla.component';
import { VerificacionComponent } from './verificacion/verificacion.component';

export const routes: Routes = [
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    { path: 'registrer', loadChildren: () => import('./registrer/registrer.module').then(m => m.RegistrerModule)},
    { path: 'carga', component: CargaComponent },
    { path: 'tabla', loadChildren: () => import('./tabla/tabla.module').then(m => m.TablaModule)},
    { path: 'verificacion', component: VerificacionComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
