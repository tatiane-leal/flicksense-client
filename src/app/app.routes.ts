import { Routes } from '@angular/router';

export const routes: Routes = [
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
    }
];
