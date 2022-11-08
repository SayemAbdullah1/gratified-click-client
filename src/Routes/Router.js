import { createBrowserRouter } from "react-router-dom";
import AddServices from "../Componants/pages/AddServices/AddServices";
import Blog from "../Componants/pages/Blog/Blog";
import Home from "../Componants/pages/Home/Home";
import Login from "../Componants/pages/Login/Login";
import Review from "../Componants/pages/Review/Review";
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
            },
            {
                path: '/service',
                element: <AddServices></AddServices>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;