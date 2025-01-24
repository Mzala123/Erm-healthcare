import {useMemo, useState} from "react";
import FormBuilder from "../form/FormBuilder.jsx";
import {useParams} from "react-router-dom";
import {isPrimary} from "../../lib/utils.js";

function AddPatient() {

    const params = useParams();
    const primaryKey = isPrimary(params.id)

    const [isLoading, setIsLoading] = useState(false);

    const genderOptions =  useMemo(()=>(
        [
            {
                value: "Male",
                label: "Male"
            },
            {
                value: "Female",
                label: "Female"
            },
            {
                value: "Other",
                label: "Other"
            }
        ]
    ))

    const occupationOptions =  useMemo(()=>(
        [
            {
                value: "Doctor",
                label: "Doctor"
            },
            {
                value: "Accountant",
                label: "Accountant"
            },
            {
                value: "Software Developer",
                label: "Software Developer"
            },
            {
                value: "Nurse",
                label: "Nurse"
            },
            {
                value: "Social worker",
                label: "Social worker"
            },
            {
                value: "Economist",
                label: "Economist"
            },
            {
                value: "Lecturer",
                label: "Lecturer"
            }
        ]
    ))

    const patientForm  = useMemo(()=>(
        [
            {
              name:"firstname",
              value:"",
              placeholder:"Enter patient first name",
              type:'text',
              label:"Firstname",
              required:true,
              width: 12
            },
            {
                name:"lastname",
                value:"",
                placeholder:"Enter patient last name",
                type:'text',
                label:"Lastname",
                required:true,
                isSubmitting: false,
                width: 12
            },
            {
                name:"gender",
                value:"",
                type:'select',
                label:"Gender",
                required:true,
                isSubmitting: false,
                width: 12,
                options:genderOptions,
            },
            {
                name:"birthday",
                value:"",
                placeholder:"Choose date of birth",
                type:'date',
                label:"Date of birth",
                required:false,
                isSubmitting: false,
                width: 12
            },
            {
                name:"occupation",
                value:"",
                type:'select',
                label:"Occupation",
                required:false,
                isSubmitting: false,
                width: 12,
                options:occupationOptions,
            },
            {
                name:"currentAddress",
                value:"",
                placeholder:"Enter current address",
                type:'textarea',
                label:"Current Address",
                required:false,
                isSubmitting: false,
                width: 12
            },
        ]
    ), [genderOptions, occupationOptions])

    function handleSubmit(formData) {
      setIsLoading(true);
      setTimeout(()=>{
          console.log(formData);
          setIsLoading(false);
      }, 2000)

    }

  return (
      <div className="mx-auto w-full">
         <FormBuilder
             formFields={patientForm}
             title="Add Patient"
             onSubmit={handleSubmit}
             isLoading={isLoading}
         />
      </div>
  )
}

export default AddPatient;