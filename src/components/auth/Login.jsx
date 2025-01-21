import PageSpinner from "../ui/PageSpinner.jsx";
import InputField from "../form/InputField.jsx";
import {useMemo, useState} from "react";
import Button from "../ui/Button.jsx";
import {Link} from "react-router-dom";

function Login(){


    const[isLoading, setIsLoading] = useState(false);

    const fields= useMemo(()=>(
        [
            {
                name:"username",
                value:"",
                placeholder:"Enter your username",
                label:"Username",
                required:true,
                type:'email',
            },
            {
                name:"password",
                value:"",
                placeholder:"Enter your password",
                label:"Password",
                required:true,
                type:'password',
            }
        ]
    ),[])

    const[loginFields, setLoginFields] = useState(fields)

    function validateField(field){
        if(field.required && !field.value.trim()){
            return field.label +" is required"
        }

        if(field.type === "email" && field.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                return "Please enter a valid email address";
            }
        }

        if(field.type === "password" && field.value.trim()){
            if(field.value.length < 6){
                return "Password should have at least 6 characters"
            }
        }

        return "";
    }

    function handleChange(e){
        const {name, value} = e.target;
        const updatedFields = loginFields.map((field)=>{
           return field.name === name ?
               {
                  ...field,
                  value:value,
                  error:validateField({...field, value})
               } : field
        })
        setLoginFields(updatedFields)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("You've clicked me");
        const updatedFields = loginFields.map((field) => ({
            ...field,
            error: validateField(field),
        }));
        setLoginFields(updatedFields);
        const hasErrors = updatedFields.some((field) => field.error);
        if (hasErrors) return;


    }

    return (
        <div className="bg-stone-200 h-screen flex justify-center items-center">
            <div className="flex gap-4 flex-col p-6 w-full mx-4 rounded-md md:w-[400px]  bg-white">
                <h1 className="text-lg text-center font-Poppins_Bold uppercase">EMR Healthcare</h1>
                {
                    loginFields.map((field) => (
                        <div key={field.name}>
                            <InputField
                              name={field.name}
                              value={field.value}
                              placeholder={field.placeholder}
                              label={field.label}
                              required={field.required}
                              type={field.type}
                              onChange={handleChange}
                              error={field.error}
                            />
                        </div>
                    ))
                }
                <div></div>
                <Button isLoading={isLoading} onClick={handleSubmit}>
                    Login
                </Button>
                <div className="flex justify-center gap-1 text-sm">
                    <span>Don't have an account?</span> <Link to="/login" className="text-blue-600 underline font-semibold">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;