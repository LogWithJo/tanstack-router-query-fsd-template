import type { QueryClient } from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { RootProvider } from '../providers/RootProvider';

export interface RouterContext {
  queryClient: QueryClient;
}

export const rootRoute = createRootRoute({
  component: () => (
    <RootProvider>
      <Outlet />
    </RootProvider>
  ),
});
