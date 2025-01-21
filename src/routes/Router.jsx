import {createBrowserRouter} from "react-router-dom";
import Login from "../components/auth/Login.jsx";

const routes = createBrowserRouter(
    [
        {
            element: <Login/>,
            path: '/'
        }
    ]
)

export default routes