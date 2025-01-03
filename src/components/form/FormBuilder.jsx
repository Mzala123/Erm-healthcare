import PropTypes from "prop-types";
import {useState} from "react";
import InputField from "./InputField.jsx";
import Button from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";
import {ChevronLeft} from "lucide-react";

function FormBuilder({onSubmit, formFields=[], formData={}, formTitle=""}) {

    const [fields, setFields] = useState(formFields);
    // const [formDataObj, setFormDataObj] = useState({});
    const navigate = useNavigate();


    function handleChange(e) {
       const {name, value} = e.target;
       console.log(name);
       const updatedFields = fields.map((field)=>{
           return field.name === name ? {...field, value: value} : field
       })
       setFields(updatedFields)
       // setFields(
       //     fields.map((field )=>{
       //             setFormDataObj(
       //                 {...formDataObj,
       //                     [name]: e.target.valuex
       //                 });
       //         return field.name === name ? {...field, value: value} : field
       //     })
       // )
    }

    function handleSubmit(e) {
        e.preventDefault();
        formData = fields.reduce((acc, field)=>{
            acc[field.name] = field.value;
            return acc;
        }, {})
        console.log(formData)
        onSubmit(formData);
    }

    function getSize(size){
        switch(size){
            case 1:
                return "col-span-12 md:col-span-1"
            case 2:
                return "col-span-12 md:col-span-2"
            case 3:
                return "col-span-12 md:col-span-3"
            case 4:
                return "col-span-12 md:col-span-4"
            case 5:
                return "col-span-12 md:col-span-5"
            case 6:
                return "col-span-12 md:col-span-6"
            case 7:
                return "col-span-12 md:col-span-7"
            case 8:
                return "col-span-12 md:col-span-8"
            case 9:
                return "col-span-12 md:col-span-9"
            case 10:
                return "col-span-12 md:col-span-10"
            case 11:
                return "col-span-12 md:col-span-11"
            case 12:
                return "col-span-12 md:col-span-12"
            default :
                return "col-span-12"

        }
    }

    return(
        <div className="container mx-auto w-[700px] justify-center mt-3">
             <div className="flex gap-2 mb-4">
                 <ChevronLeft className={"size-8 hover:rounded-full hover:cursor-pointer hover:bg-slate-200"} onClick={()=>navigate(-1)} />
                 <p className="text-2xl font-Poppins_Bold">{formTitle}</p>
             </div>
            <form className="grid grid-cols-12 gap-2" onSubmit={handleSubmit}>
                {
                    fields.map((field) => {
                        switch (field.type) {
                             case "text":
                                 return <div key={field.name} className={`${getSize(field.width)}`}>
                                     <InputField
                                         name={field.name}
                                         onChange={handleChange}
                                         value={field.value}
                                         label={field.label}
                                         required={field.required}
                                         type={field.type}
                                         placeholder={field.placeholder}
                                     />
                                 </div>
                             case "password":
                                 return <div key={field.name} className={`${getSize(field.width)}`}>
                                     <InputField
                                         name={field.name}
                                         onChange={handleChange}
                                         value={field.value}
                                         label={field.label}
                                         required={field.required}
                                         type={field.type}
                                         placeholder={field.placeholder}
                                     />
                                 </div>

                             default: return "Invalid field type " + field.type
                         }
                    })
                }
                <div className="flex col-span-12 justify-end mt-2 gap-2">
                    <Button className={"col-span-6"}  variant="danger" type="reset">Clear</Button>
                    <Button className={"col-span-6"}  variant="primary" type="submit">Submit</Button>
                </div>

            </form>
            {}
        </div>
    )
}

FormBuilder.propTypes = {
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            label: PropTypes.string,
            required: PropTypes.bool,
            width: PropTypes.number.isRequired,
            value: PropTypes.string,
        })
    ),
    onSubmit: PropTypes.func,
    formData: PropTypes.object,
    formActionTitle: PropTypes.string,
}

export default FormBuilder;