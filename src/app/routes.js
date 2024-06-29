import { lazy } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import materialRoutes from "app/views/material-kit/MaterialRoutes";
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("app/views/sessions/JwtLogin")));
const JwtRegister = Loadable(
  lazy(() => import("app/views/sessions/JwtRegister"))
);
const ForgotPassword = Loadable(
  lazy(() => import("app/views/sessions/ForgotPassword"))
);
const AppEchart = Loadable(
  lazy(() => import("app/views/charts/echarts/AppEchart"))
);
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));
const Products = Loadable(lazy(() => import("app/views/dashboard/products")));
const AddProducts = Loadable(
  lazy(() => import("app/views/dashboard/products/Add"))
);
const EditProducts = Loadable(
  lazy(() => import("app/views/dashboard/products/Edit"))
);

const Categorys = Loadable(lazy(() => import("app/views/dashboard/cagegory")));
const Colection = Loadable(
  lazy(() => import("app/views/dashboard/collection"))
);
const Brand = Loadable(lazy(() => import("app/views/dashboard/brand")));

const Fragrane = Loadable(lazy(() => import("app/views/dashboard/fragrance")));

const News = Loadable(lazy(() => import("app/views/dashboard/news")));

const AddNews = Loadable(lazy(() => import("app/views/dashboard/news/add")));

const EditNews = Loadable(lazy(() => import("app/views/dashboard/news/edit")));

const Order = Loadable(lazy(() => import("app/views/dashboard/order")));

const DetailOrder = Loadable(
  lazy(() => import("app/views/dashboard/order/detail"))
);

const User = Loadable(lazy(() => import("app/views/dashboard/user")));

const DetailUser = Loadable(
  lazy(() => import("app/views/dashboard/user/detail"))
);

const Info = Loadable(lazy(() => import("app/views/dashboard/info")));

const Contact = Loadable(lazy(() => import("app/views/dashboard/contact")));
const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      { path: "/dashboard/default", element: <Analytics /> },
      { path: "/dashboard/echarts", element: <AppEchart /> },
      { path: "/dashboard/products", element: <Products /> },
      { path: "/dashboard/add-product", element: <AddProducts /> },
      { path: "/dashboard/edit-product/:id", element: <EditProducts /> },
      { path: "/dashboard/categorys", element: <Categorys /> },
      { path: "/dashboard/collections", element: <Colection /> },
      { path: "/dashboard/brands", element: <Brand /> },
      { path: "/dashboard/fragrancenotes", element: <Fragrane /> },
      { path: "/dashboard/news", element: <News /> },
      { path: "/dashboard/add-news", element: <AddNews /> },
      { path: "/dashboard/edit-news/:id", element: <EditNews /> },
      { path: "/dashboard/order", element: <Order /> },
      { path: "/dashboard/order/:id", element: <DetailOrder /> },
      { path: "/dashboard/account", element: <User /> },
      { path: "/dashboard/account/:id", element: <DetailUser /> },
      { path: "/dashboard/about", element: <Info /> },
      { path: "/dashboard/contact", element: <Contact /> },
    ],
  },

  // session pages route
  { path: "/session/404", element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  { path: "/session/signup", element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="session/signin" /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
