import { createRoute } from '@tanstack/react-router';
import { rootRoute } from '../../app/router/rootRoute';
import home from './ui/home';

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: home,
});
