import Button from "../ui/Button.jsx";
import InputField from "../form/InputField.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import DataTable from "../ui/DataTable.jsx";
import {Plus, PlusSquare, ShieldPlus} from "lucide-react";

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
         <div className="mx-auto w-full">
             <div className="flex flex-col gap-4">
                 <div className="flex justify-end">
                     <Button onClick={()=>navigate("/system/patients/+")}>
                        <ShieldPlus size={20} />
                        <span>Add Patient</span>
                     </Button>
                 </div>
                 <div className="bg-white rounded-md">
                     <DataTable
                         title="Patients Report"
                         description="A patient report listing all registered patients."
                     />
                 </div>
             </div>

         </div>
     )
}

export default PatientList;