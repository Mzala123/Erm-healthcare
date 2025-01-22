import {createBrowserRouter} from "react-router-dom";
import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";
import Layout from "../components/layout/Layout.jsx";
import AddPatient from "../components/pages/AddPatient.jsx";
import PatientList from "../components/pages/PatientList.jsx";

const routes = createBrowserRouter(
    [
        {
            element: <Login/>,
            path: '/'
        },
        {
            element: <Register/>,
            path: '/register'
        },
        {
            element: <Layout/>,
            path: '/system',
            children: [
                {
                    element: <AddPatient/>,
                    path: 'patients',
                },
                {
                    element: <PatientList/>,
                    path: 'users',
                }
            ]
        }

    ]
)

export default routes