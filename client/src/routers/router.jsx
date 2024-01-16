import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop"
import About from "../components/About"
import Blog from "../components/Blog"
import SingleBook from "../components/SingleBook"
import Dashboard from "../dashboard/Dashboard";
import DashboardLayout from "../dashboard/DashboardLayout";
import Upload from "../dashboard/Upload";
import Manage from "../dashboard/Manage";
import Edit from "../dashboard/Edit";
import Signup from "../components/signup"





const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/home",
            element: <Home/>,
        },
        {
            path: "/shop",
            element: <Shop/>,
        },
        {
            path:"/about",
            element: <About/>
        },
        {
            path: "/blog",
            element: <Blog/>,
        },
       {
        path : '/book/:id',
        element : <SingleBook/>,
        loader :({params})=>fetch(`http://localhost:5000/book/${params.id}`) 
    },
    {
      path : '/admin/dashboard',
      element : <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard/>
        },
        {
          path: "/admin/dashboard/upload",
          element: <Upload/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <Manage/>,
        },
        {
          path: "/admin/dashboard/edit/:id",
          element: <Edit/>,
          loader :({params})=>fetch(`http://localhost:5000/book/${params.id}`) 
        }
        
      ]
    },
  ],},
 {
  path : "sign-up",
  element : <Signup/>
 }
   
      
  ]);
  export default router;