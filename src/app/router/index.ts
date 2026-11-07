import { createRouter } from '@tanstack/react-router';
import { homeRoute } from '../../pages/home/route';
import { rootRoute } from './rootRoute';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();
const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
