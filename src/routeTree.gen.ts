/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const TodoRouteLazyImport = createFileRoute('/todo')()
const MidashiRouteLazyImport = createFileRoute('/midashi')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const TodoRouteLazyRoute = TodoRouteLazyImport.update({
  path: '/todo',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/todo/route.lazy').then((d) => d.Route))

const MidashiRouteLazyRoute = MidashiRouteLazyImport.update({
  path: '/midashi',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/midashi/route.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/midashi': {
      preLoaderRoute: typeof MidashiRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/todo': {
      preLoaderRoute: typeof TodoRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  MidashiRouteLazyRoute,
  TodoRouteLazyRoute,
  AboutLazyRoute,
])

/* prettier-ignore-end */
