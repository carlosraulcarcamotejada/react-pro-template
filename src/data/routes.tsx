import { FC, lazy, LazyExoticComponent } from "react";
import { KambanPage, NotFound } from "@/pages";

interface RoutesProps {
  id: number;
  path: string;
  name?: string;
  badge?: {
    label: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  element: LazyExoticComponent<FC> | FC;
}

const LazyAccordionPage = lazy(() =>
  import(
    /* WebpackChunkName: "LazyAccordionPage" */ "@/pages/accordionPage"
  ).then((module) => ({
    default: module.AccordionPage,
  }))
);

const LazyCounterReducerPage = lazy(() =>
  import(
    /* WebpackChunkName: "LazyCounterReducerPage" */ "@/pages/counterReducerPage"
  ).then((module) => ({
    default: module.CounterReducerPage,
  }))
);

const routes: RoutesProps[] = [
  {
    id: 0,
    name: "Accordion",
    path: "/",
    element: () => <LazyAccordionPage />,
  },
  {
    id: 1,
    name: "Counter Reducer",
    path: "/counter-reducer/",
    element: () => <LazyCounterReducerPage />,
  },
  {
    id: 2,
    name: "Kanban",
    path: "/kanban/",
    badge: {
      label: "Pro",
      variant: "default",
    },
    element: () => <KambanPage />,
  },
  {
    id: 3,
    name: "Inbox",
    path: "/Inbox/",
    badge: {
      label: "3",
      variant: "secondary",
    },
    element: () => <div>Inbox</div>,
  },
  {
    id: 4,
    name: "Users",
    path: "/users/",
    element: () => <div>Users</div>,
  },
  {
    id: 5,
    name: "Products",
    path: "/products/",
    element: () => <div>Products</div>,
  },
  {
    id: 6,
    name: "Sign In",
    path: "/sign-in/",
    element: () => <div>Sign In</div>,
  },
  {
    id: 7,
    name: "Sign Up",
    path: "/sign-up/",
    element: () => <div>Sign Up</div>,
  },
  {
    id: 100,
    path: "/*",
    element: () => <NotFound />,
  },
];

export type { RoutesProps };
export { routes };
