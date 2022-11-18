import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import HeaderAppointment from "../../pages/HeaderAppointment/HeaderAppointment/HeaderAppointment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/SignUp";

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
     }
])