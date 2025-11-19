import { type FC, Fragment, Suspense } from 'react';
import type {
  ActionFunction,
  LoaderFunction,
  RouteObject,
} from 'react-router-dom';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import { generatePreservedRoutes, generateRegularRoutes } from './core';

type Module = {
  default: FC;
  Loader?: LoaderFunction;
  Action?: ActionFunction;
  Catch?: FC;
  Pending?: FC;
};

const PRESERVED = import.meta.glob<Module>('/src/pages/(_app|404).{jsx,tsx}', {
  eager: true,
});

const ROUTES = import.meta.glob<Module>([
  '/src/pages/**/[\\w[-]*.{jsx,tsx,mdx}',
  '!**/(_app|404).*',
]);

const preservedRoutes =
  generatePreservedRoutes<Omit<Module, 'Action'>>(PRESERVED);

const regularRoutes = generateRegularRoutes<
  RouteObject,
  () => Promise<Partial<Module>>
>(ROUTES, (module, key) => {
  const index =
    /index\.(jsx|tsx|mdx)$/.test(key) && !key.includes('pages/index')
      ? { index: true }
      : {};

  return {
    ...index,
    lazy: async () => {
      const Element = (await module())?.default ?? Fragment;
      const Pending = (await module())?.Pending;
      const Page = () =>
        Pending !== undefined ? (
          <Suspense fallback={<Pending />}>
            <Element />
          </Suspense>
        ) : (
          <Element />
        );

      return {
        Component: Page,
        ErrorBoundary: (await module())?.Catch,
        loader: (await module())?.Loader,
        action: (await module())?.Action,
      };
    },
  };
});

const _app = preservedRoutes?._app;
const _404 = preservedRoutes?.['404'];

const Component = _app?.default ?? Fragment;

const App = () =>
  _app?.Pending !== undefined ? (
    <Suspense fallback={<_app.Pending />}>
      <Component />
    </Suspense>
  ) : (
    <Component />
  );

const app = {
  Component: _app?.default !== undefined ? App : Outlet,
  ErrorBoundary: _app?.Catch,
  loader: _app?.Loader,
};

const fallback = {
  path: '*',
  Component: _404?.default ?? Fragment,
};

// eslint-disable-next-line react-refresh/only-export-components
export const routes: RouteObject[] = [
  { ...app, children: [...regularRoutes, fallback] },
];

export const Routes = () => (
  <RouterProvider router={createBrowserRouter(routes)} />
);
