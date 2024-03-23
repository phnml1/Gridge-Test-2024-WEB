import React from "react";

const Home = React.lazy(() => import("./pages/home"));
const Page404 = React.lazy(() => import("./pages/page404/Page404"));
const Page500 = React.lazy(() => import("./pages/page500/Page500"));

const routes = [
  { path: "/", element: Home },
  { path: "/404", element: Page404 },
  { path: "/500", element: Page500 },
];

export default routes;
