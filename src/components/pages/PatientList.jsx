import Button from "../ui/Button.jsx";
import InputField from "../form/InputField.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

function PatientList() {
    const navigate = useNavigate();

    const [patients, setPatients] = useState([]);

    function getPatientList(){

    }

    useEffect(() => {
        getPatientList();
    }, []);

    function handleChange(e) {

    }

     return (
         <div className="">
             <div className="flex justify-between">
                 <InputField className={"w-[400px]"} placeholder="find" onChange={handleChange}/>
                 <Button onClick={()=> navigate("/layout/patients/+")}>Add Patient</Button>
             </div>
         </div>
     )
}

export default PatientList;