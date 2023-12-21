import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import CreateTask from "../components/CreateTask";

export const router = createBrowserRouter([{
  path: '/',
  element: <MainLayouts />,
  children: [
    {
    path: '/',
    element:<Home />
    },
    {
    path: '/about',
    element:<About />
    },
    {
    path: '/login',
    element:<Login />
    },
    {
    path: '/signUp',
    element:<SignUp />
    },
    
  ]
},
  {
    path: '/dashboard',
    element: <DashboardLayouts /> ,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: '/dashboard/createTask',
        element:<CreateTask />
      }
      
    ]
  }
])