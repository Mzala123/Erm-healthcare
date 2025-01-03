import PropTypes from "prop-types";
import {useState} from "react";
import InputField from "./InputField.jsx";
import Button from "../ui/Button.jsx";
import {useNavigate} from "react-router-dom";
import {ChevronLeft} from "lucide-react";
import SelectField from "./SelectField.jsx";
import TextArea from "./TextArea.jsx";

function FormBuilder({onSubmit, formFields=[], formData={}, formTitle=""}) {

    const [fields, setFields] = useState(formFields.map((field)=>{
        return {
            ...field,
            value: field.value || "",
        }
    }));
    // const [formDataObj, setFormDataObj] = useState({});
    const[isSubmitting, setIsSubmitting] = useState(false);
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
       //                     [name]: e.target.value
       //                 });
       //         return field.name === name ? {...field, value: value} : field
       //     })
       // )
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true)

        const hasErrors = fields.some((field)=>field.value && !field.value )
        if(hasErrors){
            return;
        }

        formData = fields.reduce((acc, field)=>{
            acc[field.name] = field.value;
            return acc;
        }, {})

        console.log(isSubmitting)
        onSubmit(formData);
    }

    function handleClear(e) {
        e.preventDefault();
        const clearedFields = fields.map((field)=>{
            return {
                ...field,
                value: "",
            }
        })
        setFields(clearedFields)
    }

    function getSize(size){
        return `col-span-12 md:col-span-${Math.min(size, 12)}`
    }





    return(
        <div className="w-[700px] justify-start mt-3 ml-4">
             <div className="flex gap-2 mb-6">
                 <ChevronLeft className={"size-8 hover:rounded-full hover:cursor-pointer hover:bg-slate-200"} onClick={()=>navigate(-1)} />
                 <p className="text-2xl font-Poppins_Bold">{formTitle}</p>
             </div>
            <form className="grid grid-cols-12 gap-6" onSubmit={handleSubmit}>
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
                                         isSubmitting={isSubmitting}
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
                                         isSubmitting={isSubmitting}
                                     />
                                 </div>
                            case "date":
                                return <div key={field.name} className={`${getSize(field.width)}`}>
                                    <InputField
                                        name={field.name}
                                        onChange={handleChange}
                                        value={field.value}
                                        label={field.label}
                                        required={field.required}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        isSubmitting={isSubmitting}
                                    />
                                </div>
                            case "select":
                                return <div key={field.name} className={`${getSize(field.width)}`}>
                                <SelectField
                                  name={field.name}
                                  onChange={handleChange}
                                  value={field.value}
                                  label={field.label}
                                  required={field.required}
                                  isSubmitting={isSubmitting}
                                  type={field.type}
                                  options={field.options}
                                />
                            </div>
                            case "textarea":
                                return <div key={field.name} className={`${getSize(field.width)}`}>
                                    <TextArea
                                        placeholder={field.placeholder}
                                        onChange={handleChange}
                                        value={field.value}
                                        label={field.label}
                                        name={field.name}
                                        required={field.required}
                                        type={field.type}
                                        isSubmitting={isSubmitting}
                                        cols={field.cols}
                                        rows={field.rows}
                                    />
                                </div>

                             default: return "Invalid field type " + field.type
                         }
                    })
                }
                <div className="flex col-span-12 justify-end mt-2 gap-2">
                    <Button className={"col-span-6"}  variant="danger" onClick={handleClear}>Clear</Button>
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
    formTitle: PropTypes.string,
}

export default FormBuilder;