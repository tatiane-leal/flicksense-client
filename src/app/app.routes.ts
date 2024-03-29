import { Routes } from '@angular/router';
import { authGuard } from './services/auth.guard';
import { moviesResolver } from './services/movies.resolver';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
        resolve: {
            moviesData: moviesResolver
        },
        canActivate: [authGuard],
    },
    {
        path: 'messages',
        loadComponent: () => import('./components/message/message.component').then(c => c.MessageComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./components/register/register.component').then(c => c.RegisterComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: 'users',
        loadComponent: () => import('./components/users/users.component').then(c => c.UsersComponent)
    },
    {
        path: 'profile/:id',
        loadComponent: () => import('./components/profile/profile.component').then(c => c.ProfileComponent)
    }
];
