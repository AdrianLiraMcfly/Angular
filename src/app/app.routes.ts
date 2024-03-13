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
    { path: 'GamesForm', loadComponent: () => import('./pages/Tablas/tabla-games/form-games/form-games.component').then(m => m.FormGamesComponent)},
    { path: 'GamesForm/:id', loadComponent: () => import('./pages/Tablas/tabla-games/form-games/form-games.component').then(m => m.FormGamesComponent)},
    { path: 'ConsolesForm', loadComponent: () => import('./pages/Tablas/tabla-consolas/form-consolas/form-consolas.component').then(m => m.FormConsolasComponent)},
    { path: 'ConsolesForm/:id', loadComponent: () => import('./pages/Tablas/tabla-consolas/form-consolas/form-consolas.component').then(m => m.FormConsolasComponent)},
    { path: 'UsuariosForm/:id', loadComponent: () => import('./pages/Tablas/tablaUsuario/form-usuarios/form-usuarios.component').then(m => m.FormUsuariosComponent)},
    { path: 'UsuariosForm', loadComponent: () => import('./pages/Tablas/tablaUsuario/form-usuarios/form-usuarios.component').then(m => m.FormUsuariosComponent)},
    { path: 'CategoriesForm', loadComponent: () => import('./pages/Tablas/tabla-categorias/form-categorias/form-categorias.component').then(m => m.FormCategoriasComponent)},
    { path: 'CategoriesForm/:id', loadComponent: () => import('./pages/Tablas/tabla-categorias/form-categorias/form-categorias.component').then(m => m.FormCategoriasComponent)},
    { path: 'SuppliersForm', loadComponent: () => import('./pages/Tablas/tabla-suppliers/form-suppliers/form-suppliers.component').then(m => m.FormSuppliersComponent)},
    { path: 'SuppliersForm/:id', loadComponent: () => import('./pages/Tablas/tabla-suppliers/form-suppliers/form-suppliers.component').then(m => m.FormSuppliersComponent)},
    { path: 'verificacion', component: VerificacionComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
