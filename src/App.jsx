import React from "react";
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Event from "./pages/Event/Event";
import Department from "./pages/Department/Department";
import Result from "./pages/Result/Result";
import About from "./pages/About/About";
import Facilities from "./pages/Facilities/Facilities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/event',
        element: <Event />
      },
      {
        path: '/department',
        element: <Department />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/result',
        element: <Result />
      },
      {
        path: '/facilities',
        element: <Facilities />
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
