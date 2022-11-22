import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import HeaderAppointment from "../../pages/HeaderAppointment/HeaderAppointment/HeaderAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/SignUp";
import AdminRoute from "../adminRoute/adminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
     {
          path: '/',
          element:<Main></Main>,
          children:[
               {
                    path:'/',
                    element:<Home></Home>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/appointment',
                    element: <HeaderAppointment></HeaderAppointment>
               },
               {
                    path: '/signup',
                    element:<SignUp></SignUp>
               }
          ]
     },
     {
          path: '/dashboard',
          element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
          children:[
               {
                    path: '/dashboard',
                    element:<MyAppointment></MyAppointment>
               },
               {
                    path: '/dashboard/allusers',
                    element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
               },
               {
                    path: '/dashboard/adddoctor',
                    element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
               },
          ]
     }
])