import PropTypes from "prop-types";
import {useState} from "react";
import InputField from "./InputField.jsx";

function FormBuilder({formFields=[]}) {

    const [fields, setFields] = useState(formFields);
    const [formDataObj, setFormDataObj] = useState({});


    function handleChange(e) {
       const {name, value} = e.target;
       console.log(name);
       setFields(
           fields.map((field )=>{
                   setFormDataObj(
                       {...formDataObj,
                           [name]: e.target.value
                       });
               return field.name === name ? {...field, value: value} : field
           })
       )
    }

    function handleSubmit(e) {
        e.preventDefault();

    }

    return(
        <div className="">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                {
                    fields.map((field) => {
                         switch (field.type) {
                             case "text":
                                 return <div key={field.name}>
                                     <InputField
                                         name={field.name}
                                         onChange={handleChange}
                                         value={field.value}
                                         label={field.label}
                                         required={field.required}
                                         type={field.type}
                                     />
                                 </div>
                             case "password":
                                 return <div key={field.name}>
                                     <InputField
                                         name={field.name}
                                         onChange={handleChange}
                                         value={field.value}
                                         label={field.label}
                                         required={field.required}
                                         type={field.type}
                                     />
                                 </div>

                             default: return "Invalid field type " + field.type
                         }
                    })
                }
            </form>
        </div>
    )
}

FormBuilder.propTypes = {
    formFields: PropTypes.array
}

export default FormBuilder;