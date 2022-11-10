import { createBrowserRouter } from "react-router-dom";
import AddServices from "../Componants/pages/AddServices/AddServices";
import Blog from "../Componants/pages/Blog/Blog";
import Home from "../Componants/pages/Home/Home";
import Login from "../Componants/pages/Login/Login";
import Review from "../Componants/pages/Review/Review";
import Services from "../Componants/pages/Services/Services";
import SignUp from "../Componants/pages/SignUP/SignUp";
import ViewDetails from "../Componants/ViewDetails/ViewDetails";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";


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
                element: <PrivateRoutes><Review></Review></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <PrivateRoutes><Services></Services></PrivateRoutes>
            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ViewDetails></ViewDetails>
            }
        ]
    }
])

export default router;