import {useState} from "react";
import Button from "../ui/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import InputField from "../form/InputField.jsx";

function Login(){

    const navigate =  useNavigate()

    const[loginFields, setLoginFields] = useState({
        username:"",
        password:""
    })

    const[isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(e){
        setLoginFields(
            {
                ...loginFields,
                [e.target.name]: e.target.value
            }
        )
    }

    function handleLogin(){
        setIsSubmitting(true);
        console.log(loginFields)
        if(loginFields.username && loginFields.password){
            navigate("/layout")
        }

    }

    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="flex gap-4 flex-col p-4 rounded-md w-96">
                <h1 className="text-lg font-Martian text-center font-semibold">EMR Healthcare</h1>
                <div className="flex flex-col gap-6">
                    <InputField
                        value={loginFields.username}
                        required={true} label="Username"
                        placeholder="Enter your username"
                        name="username"
                        onChange={handleChange}
                        type="text"
                        isSubmitting={isSubmitting}
                    />
                    <InputField
                        value={loginFields.password}
                        name="password" required={true}
                        label="Password"
                        onChange={handleChange}
                        placeholder="Enter your password"
                        type="password"
                        isSubmitting={isSubmitting}
                    />
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