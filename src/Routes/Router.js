import { createBrowserRouter } from "react-router-dom";
import Home from "../Componants/pages/Home/Home";
import Login from "../Componants/pages/Login/Login";
import SignUp from "../Componants/pages/SignUP/SignUp";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;