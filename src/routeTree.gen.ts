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
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/midashi': {
      id: '/midashi'
      path: '/midashi'
      fullPath: '/midashi'
      preLoaderRoute: typeof MidashiRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/todo': {
      id: '/todo'
      path: '/todo'
      fullPath: '/todo'
      preLoaderRoute: typeof TodoRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/midashi': typeof MidashiRouteLazyRoute
  '/todo': typeof TodoRouteLazyRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/midashi': typeof MidashiRouteLazyRoute
  '/todo': typeof TodoRouteLazyRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/midashi': typeof MidashiRouteLazyRoute
  '/todo': typeof TodoRouteLazyRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/midashi' | '/todo' | '/about'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/midashi' | '/todo' | '/about'
  id: '__root__' | '/' | '/midashi' | '/todo' | '/about'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  MidashiRouteLazyRoute: typeof MidashiRouteLazyRoute
  TodoRouteLazyRoute: typeof TodoRouteLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  MidashiRouteLazyRoute: MidashiRouteLazyRoute,
  TodoRouteLazyRoute: TodoRouteLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/midashi",
        "/todo",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/midashi": {
      "filePath": "midashi/route.lazy.tsx"
    },
    "/todo": {
      "filePath": "todo/route.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
