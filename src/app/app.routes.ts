import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home')
      .then(m => m.Home),
    title: 'Home'
  },
  {
    path: 'contrast',
    loadComponent: () => import('./features/contrast-demo/contrast-demo')
      .then(m => m.ContrastDemo),
    title: 'Contrast Demo'
  },
  {
    path: 'danger',
    loadComponent: () => import('./features/danger-demo/danger-demo')
      .then(m => m.DangerDemo),
    title: 'Danger Demo'
  },
  {
    path: 'help',
    loadComponent: () => import('./features/help-demo/help-demo')
      .then(m => m.HelpDemo),
    title: 'Help Demo'
  },
  {
    path: 'information',
    loadComponent: () => import('./features/information-demo/information-demo')
      .then(m => m.InformationDemo),
    title: 'Information Demo'
  },
  {
    path: 'primary',
    loadComponent: () => import('./features/primary-demo/primary-demo')
      .then(m => m.PrimaryDemo),
    title: 'Primary Demo'
  },
  {
    path: 'secondary',
    loadComponent: () => import('./features/secondary-demo/secondary-demo')
      .then(m => m.SecondaryDemo),
    title: 'Secondary Demo'
  },
  {
    path: 'success',
    loadComponent: () => import('./features/success-demo/success-demo')
      .then(m => m.SuccessDemo),
    title: 'Success Demo'
  },
  {
    path: 'tertiary',
    loadComponent: () => import('./features/tertiary-demo/tertiary-demo')
      .then(m => m.TertiaryDemo),
    title: 'Tertiary Demo'
  },
  {
    path: 'plain',
    loadComponent: () => import('./features/plain-demo/plain-demo')
      .then(m => m.PlainDemo),
    title: 'Plain Demo'
  },
  {
    path: 'warning',
    loadComponent: () => import('./features/warning-demo/warning-demo')
      .then(m => m.WarningDemo),
    title: 'Warning Demo'
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found')
      .then(m => m.NotFound),
  }
];
