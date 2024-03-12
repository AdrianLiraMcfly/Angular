import { Routes } from '@angular/router';
import { CargaComponent } from './pages/carga/carga.component';
import { VerificacionComponent } from './pages/verificacion/verificacion.component';

export const routes: Routes = [
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
    { path: 'registrer', loadChildren: () => import('./pages/registrer/registrer.module').then(m => m.RegistrerModule)},
    { path: 'carga', component: CargaComponent },
    { path: 'tabla', loadChildren: () => import('./pages/Tablas/tablaUsuario/tabla.module').then(m => m.TablaModule)},
    { path: 'tablaGames', loadChildren: () => import('./pages/Tablas/tabla-games/tabla-games.module').then(m => m.TablaGamesModule)},
    { path: 'tablaConsolas', loadChildren: () => import('./pages/Tablas/tabla-consolas/tabla-consolas.module').then(m => m.TablaConsolasModule)},
    { path: 'tablaCategorias', loadChildren: () => import('./pages/Tablas/tabla-categorias/tabla-categorias.module').then(m => m.TablaCategoriasModule)},
    { path: 'tablaSuppliers', loadChildren: () => import('./pages/Tablas/tabla-suppliers/tabla-suppliers.module').then(m => m.TablaSuppliersModule)},
    { path: 'tablaGameSales', loadChildren: () => import('./pages/Tablas/tabla-gamessales/tabla-gamessales.module').then(m => m.TablaGamessalesModule)},
    { path: 'tablaConsoleSales', loadChildren: () => import('./pages/Tablas/tabla-consolessales/tabla-consolessales.module').then(m => m.TablaConsolessalesModule)},
    { path: 'tablaGamesOrders', loadChildren: () => import('./pages/Tablas/tabla-gamesorders/tabla-gamesorders.module').then(m => m.TablaGamesordersModule)},
    { path: 'tablaConsoleOrders', loadChildren: () => import('./pages/Tablas/tabla-consoleorders/tabla-consoleorders.module').then(m => m.TablaConsoleordersModule)},
    { path: 'verificacion', component: VerificacionComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
