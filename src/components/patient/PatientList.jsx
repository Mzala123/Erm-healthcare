import Button from "../ui/Button.jsx";
import InputField from "../form/InputField.jsx";
import {useNavigate} from "react-router-dom";

function PatientList() {
    const navigate = useNavigate();
     return (
         <div className="">
             <div className="flex justify-between">
                 <InputField width={12} placeholder="find patient"/>
                 <Button onClick={()=> navigate("/layout/patients/+")}>Add Patient</Button>
             </div>
         </div>
     )
}

export default PatientList;