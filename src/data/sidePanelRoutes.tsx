import { CounterReducerPage, NotFound } from "@/pages";

interface SidePanelRouteProps {
  id: number;
  path: string;
  displayedRoute?: string;
  badge?: {
    label: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  element?: JSX.Element | JSX.Element[];
}

const sidePanelRoutes: SidePanelRouteProps[] = [
  {
    id: 0,
    displayedRoute: "Home",
    path: "/",
    element: <div>Home</div>,
  },
  {
    id: 1,
    displayedRoute: "Counter Reducer",
    path: "/counter-reducer/",
    element: <CounterReducerPage />,
  },
  {
    id: 2,
    displayedRoute: "Kanban",
    path: "/kanban/",
    badge: {
      label: "Pro",
      variant: "default",
    },
    element: <div>Kanban</div>,
  },
  {
    id: 3,
    displayedRoute: "Inbox",
    path: "/Inbox/",
    badge: {
      label: "3",
      variant: "secondary",
    },
    element: <div>Inbox</div>,
  },
  {
    id: 4,
    displayedRoute: "Users",
    path: "/users/",
    element: <div>Users</div>,
  },
  {
    id: 5,
    displayedRoute: "Products",
    path: "/products/",
    element: <div>Products</div>,
  },
  {
    id: 6,
    displayedRoute: "Sign In",
    path: "/sign-in/",
    element: <div>Sign In</div>,
  },
  {
    id: 7,
    displayedRoute: "Sign Up",
    path: "/sign-up/",
    element: <div>Sign Up</div>,
  },
  {
    id: 100,
    path: "*",
    element: <NotFound />,
  },
];

export type { SidePanelRouteProps };
export { sidePanelRoutes };
