import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";
import PatientList from "../components/patient/PatientList.jsx";
import AddPatient from "../components/patient/AddPatient.jsx";

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
                {
                    path:"dashboard",
                    element:"",
                },
                {
                    path:"users",
                    element: "",
                },
                {
                    path:"users/:id",
                    element:""
                },
                {
                    path:"patients",
                    element:<PatientList/>,
                },
                {
                    path:"patients/:id",
                    element: <AddPatient/>
                }

            ]
        }
    ]
)

export default routes