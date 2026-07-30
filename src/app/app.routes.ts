import { Routes } from '@angular/router';

import { ClientLayout } from './Layouts/client-layout/client-layout';
import { HomePage } from './Page/client/home-page/home-page';
import { AboutPage } from './Page/client/about-page/about-page';
import { ContactPage } from './Page/client/contact-page/contact-page';
import { DashboardPage } from './Page/admin/dashboard-page/dashboard-page';
import { AdminLayout } from './Layouts/admin-layout/admin-layout';
import { ProductPage } from './Page/admin/product-page/product-page';
import { UserPage } from './Page/admin/user-page/user-page';
import { NotFoundPage } from './Page/not-found-page/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: ClientLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'contact', component: ContactPage },
    ],
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: '', component: DashboardPage },
      { path: 'products', component: ProductPage },
      { path: 'users', component: UserPage },
    ],
  },

  { path: '**', component: NotFoundPage },
];
