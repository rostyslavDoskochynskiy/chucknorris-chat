import { routes } from '@app/config/routes';
import { Home } from './Main/Home';

export const mainContainersRoutes = [
  {
    path: routes.profile.chat,
    component: Home,
  },
];
