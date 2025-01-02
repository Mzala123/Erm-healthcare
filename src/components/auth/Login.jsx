import {useMemo, useState} from "react";
import FormBuilder from "../form/FormBuilder.jsx";
import Button from "../ui/Button.jsx";
import {Link, useNavigate} from "react-router-dom";

function Login(){

    const navigate =  useNavigate()
    const loginForm = useMemo(()=> [

            {
                name:"username",
                value:"",
                required:true,
                type:"text",
                width: 12,
                placeholder:"Enter your username",
                label:"Username",
            },
            {
                name:"password",
                value:"",
                required:true,
                type:"password",
                width: 12,
                placeholder:"Enter your password",
                label:"Password",
            }
        ],[])

   const data =  {}

    function handleLogin(dataRecord){
        console.log(dataRecord)
        console.log(data)
        navigate("/layout")
    }

    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="flex gap-4 flex-col p-4 rounded-md w-96">
                <h1 className="text-lg font-Martian font-semibold">EMR Healthcare</h1>
                <div className="flex flex-col gap-6">
                    <FormBuilder formFields={loginForm} onSubmit={handleLogin} formData={data} formActionTitle={"Login"}/>
                    <Button onClick={handleLogin}>Login</Button>
                    <p className="text-sm text-center">
                        <span>Dont have an Account? </span>
                        <Link to={"/register"} className={"text-blue-600 underline hover:text-blue-700"}>
                             Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;