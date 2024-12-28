import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Login from "../components/auth/Login.jsx";

const routes = createBrowserRouter(
    [
        {
          path:'/',
          element: <Login/>,
        },
        {
            path:'/register',
            element:""
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