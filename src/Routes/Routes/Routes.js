import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../pages/Dashboard/MyAppointment/MyAppointment";
import HeaderAppointment from "../../pages/HeaderAppointment/HeaderAppointment/HeaderAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/SignUp";
import AdminRoute from "../adminRoute/adminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import About from "../../pages/Home/Information/About";
import Contact from "../../pages/Home/Contact/Contact";

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
                    element: <PrivateRoute><HeaderAppointment></HeaderAppointment></PrivateRoute>
               },
               {
                    path: '/signup',
                    element:<SignUp></SignUp>
               },
               {
                    path: "/about", 
                    element: <About></About>
               },
               {
                    path: "/contact",
                    element: <Contact></Contact>
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
               {
                    path: '/dashboard/managedoctors',
                    element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
               },
          ]
     }
])