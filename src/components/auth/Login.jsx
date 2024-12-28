import {useMemo} from "react";
import FormBuilder from "../form/FormBuilder.jsx";
import Button from "../ui/Button.jsx";

function Login(){

    const loginForm = useMemo(()=>{
        return  [
            {
                name:"username",
                value:"",
                required:true,
                type:"text",
                width: 4,
                placeholder:"Username",
                label:"Username",
            },
            {
                name:"password",
                value:"",
                required:true,
                type:"text",
                width: 4,
                placeholder:"Password",
                label:"Password",
            }
        ]
    },[])

    return (
        <div className="bg-slate-100 h-screen flex justify-center items-center">
            <div className="flex gap-4 flex-col bg-white shadow-sm p-4 rounded-md w-96">
                <h1 className="text-lg font-Martian font-semibold">Welcome to EMR Healthcare</h1>
                <div className="flex flex-col gap-6">
                    <FormBuilder formFields={loginForm} />
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;