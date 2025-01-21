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
                placeholder:"Enter username",
                label:"Username",
                required:true,
                type:'text',
            },
            {
                name:"password",
                value:"",
                placeholder:"Enter password",
                label:"Password",
                required:true,
                type:'password',
            }
        ]
    ),[])

    const[loginFields, setLoginFields] = useState(fields)

    function handleChange(e){
        const {name, value} = e.target;
        console.log(name, value);
        const updatedFields = loginFields.map(field=>{
            return  {
                ...field,
                [name]: value,
            }
        })
        console.log(updatedFields)
        setLoginFields(updatedFields)
    }

    function handleSubmit(){

    }


    return (
        <div className="bg-stone-200 h-screen flex justify-center items-center">
            <div className="flex gap-4 flex-col p-6 rounded-md w-[400px] bg-white">
                <h1 className="text-lg text-center font-Poppins_Bold uppercase">EMR Healthcare</h1>
                {
                    fields.map((field) => (
                        <div key={field.name}>
                            <InputField
                              name={field.name}
                              value={field.value}
                              placeholder={field.placeholder}
                              label={field.label}
                              required={field.required}
                              type={field.type}
                              onChange={handleChange}
                            />
                        </div>
                    ))
                }
                <div></div>
                <Button isLoading={isLoading} type="submit" onClick={handleSubmit}>
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