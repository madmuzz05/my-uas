import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import MulaiTest from "./views/MulaiTest";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Sesuai from "./components/Pernyataan/Sesuai";
import TidakSesuai from "./components/Pernyataan/TidakSesuai";
import Dashboard from "./views/Dashboard";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/mulai-test",
    layout: DefaultLayout,
    component: MulaiTest
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/sesuai",
    layout: DefaultLayout,
    component: Sesuai
  },
  {
    path: "/TidakSesuai",
    layout: DefaultLayout,
    component: TidakSesuai
  },
  {
    path: "/Dashboard",
    layout: DefaultLayout,
    component: Dashboard
  }
];
