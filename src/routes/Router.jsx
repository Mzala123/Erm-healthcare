import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";

const routes = createBrowserRouter(
    [
        {
          path:'/',
          element: <Login/>,
        },
        {
            path:'/register',
            element: <Register/>
        },
        {
            path:'/layout',
            element: <Layout/>,
            children:[

            ]
        }
    ]
)

export default routes