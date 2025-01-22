import PropTypes from "prop-types";
import Button from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";
import InputField from "./InputField.jsx";
import {ChevronLeft} from "lucide-react";
import {useState} from "react";

function FormBuilder({formFields=[], onSubmit, title=""}) {

    const navigate = useNavigate();
    const [fields, setFields] = useState(formFields);

    function validateField(field) {

    }

    function handleChange(e){
        const {name, value} = e.target;
        setFields((prevState)=>{
            return prevState.map((field)=>{
                return field.name === name ? {
                    ...field,
                    value: value
                } : field
            })
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {}
        for(let field of fields){
            formData[field.name] = field.value;
        }
        console.log(formData);
    }

    function handleReset(e){
        e.preventDefault();
        setFields(fields.map((field)=>{
            return  {
                ...field,
                value: ""
            }
        }));
    }

    return(
        <div className="bg-white mt-3 container rounded-md p-6 mx-auto w-auto lg:w-[720px] lg:mx-auto ">
            <div className="flex gap-4 w-full items-center mb-8">
                <button className={"rounded-full bg-slate-100 hover:bg-slate-200"} onClick={()=>{navigate(-1)}}>
                   <ChevronLeft className={"size-6 m-1 stroke-black stroke-2"} size="lg" />
                </button>
                <p className="flex-1 font-Poppins_Bold text-3xl text-gray-800">{title}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {
                    fields.map((field) => {
                       switch(field.type){
                           case "email":
                           return <div key={field.name}>
                               <InputField
                                 name={field.name}
                                 value={field.value}
                                 placeholder={field.placeholder}
                                 onChange={handleChange}
                                 error={field.error}
                                 type="email"
                                 required={field.required}
                                 label={field.label}
                               />
                           </div>
                           case "text":
                               return <div key={field.name}>
                                   <InputField
                                       name={field.name}
                                       value={field.value}
                                       placeholder={field.placeholder}
                                       onChange={handleChange}
                                       error={field.error}
                                       type="text"
                                       required={field.required}
                                       label={field.label}
                                   />
                           </div>

                           default : return  null
                       }
                    })
                }
                <div className="flex gap-4 justify-end">
                    <Button variant="danger" type="reset" onClick={handleReset}>Clear</Button>
                    <Button>Submit</Button>
                </div>
            </form>

        </div>
    )
}

FormBuilder.propTypes = {
    formFields: PropTypes.array,
    title: PropTypes.string,
}

export default FormBuilder;