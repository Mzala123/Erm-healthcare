import PropTypes from "prop-types";
import Button from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";
import InputField from "./InputField.jsx";
import {ChevronLeft} from "lucide-react";
import {useState} from "react";
import TextArea from "./TextArea.jsx";
import SelectField from "./SelectField.jsx";

function FormBuilder({formFields=[], onSubmit, title="", isLoading=false}) {

    const navigate = useNavigate();
    const [fields, setFields] = useState(formFields);

    function validateField(field) {
        if(field.required && !field.value.trim()){
            return field.label +" is required";
        }
    }

    function handleChange(e){
        const {name, value} = e.target;
        setFields((prevState)=>{
            return prevState.map((field)=>{
                return field.name === name ? {
                    ...field,
                    value: value,
                    error:validateField({...field, value})
                } : field
            })
        });

    }

    function handleSubmit(e) {
        e.preventDefault();
        const changedFields = fields.map((field) => ({
            ...field,
            error: validateField(field),
        }));
        console.log(changedFields);
        setFields(changedFields);
        const hasError = changedFields.some((field) => field.error);
        console.log(hasError);
        if (hasError) return
        if(!hasError){
            const formData = {}
            for(let field of fields){
                formData[field.name] = field.value;
            }
            //console.log(formData);
            onSubmit(formData);
        }

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

    function getSize(size){
        switch(size){
            case 1:
                return `col-span-12 md:col-span-1`
            case 2:
                return `col-span-12 md:col-span-2`
            case 3:
                return `col-span-12 md:col-span-3`
            case 4:
                return `col-span-12 md:col-span-4`
            case 5:
                return `col-span-12 md:col-span-5`
            case 6:
                return `col-span-12 md:col-span-6`
            case 7:
                return `col-span-12 md:col-span-7`
            case 8:
                return `col-span-12 md:col-span-8`
            case 9:
                return `col-span-12 md:col-span-9`
            case 10:
                return `col-span-12 md:col-span-10`
            case 11:
                return `col-span-12 md:col-span-11`
            case 12:
                return `col-span-12 md:col-span-12`

        }
        //return `col-span-12 md:col-span-${Math.min(size, 12)}`
    }

    return(
        <div className="bg-white mt-3 container rounded-md p-6 mx-auto w-auto lg:w-[720px] lg:mx-auto ">
            <div className="flex gap-4 w-full items-center mb-8">
                <button className={"rounded-full bg-slate-100 hover:bg-slate-200"} onClick={()=>{navigate(-1)}}>
                   <ChevronLeft className={"size-6 m-1 stroke-black stroke-2"} size="lg" />
                </button>
                <p className="flex-1 font-Poppins_Bold text-3xl text-gray-800">{title}</p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
                {
                    fields.map((field) => {
                       switch(field.type){
                           case "email":
                           return <div key={field.name} className={`${getSize(field.width)}`}>
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
                               return <div key={field.name} className={`${getSize(field.width)}`}>
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

                           case "select":
                               return <div key={field.name} className={`${getSize(field.width)}`}>
                                   <SelectField
                                       name={field.name}
                                       value={field.value}
                                       placeholder={field.placeholder}
                                       onChange={handleChange}
                                       error={field.error}
                                       type="text"
                                       required={field.required}
                                       label={field.label}
                                       options={field.options}
                                   />
                           </div>

                           case "textarea":
                               return <div key={field.name} className={`${getSize(field.width)}`}>
                                   <TextArea
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
                <div className="flex col-span-12 gap-4 justify-end">
                    <Button variant="danger" type="reset" onClick={handleReset}>Clear</Button>
                    <Button isLoading={isLoading} disabled={isLoading}>Submit</Button>
                </div>
            </form>

        </div>
    )
}

FormBuilder.propTypes = {
    formFields: PropTypes.array,
    title: PropTypes.string,
    onSubmit: PropTypes.func,
    isLoading : PropTypes.bool,
}

export default FormBuilder;