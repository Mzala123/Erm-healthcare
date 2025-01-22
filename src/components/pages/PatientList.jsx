import Button from "../ui/Button.jsx";
import InputField from "../form/InputField.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import DataTable from "../ui/DataTable.jsx";

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
         <div className="mx-auto w-full bg-white rounded-md">
             <div className="flex justify-between">

             </div>
             <div>
                 <DataTable
                     title="Patients Report"
                     description="A patient report listing all registered patients."
                 />
             </div>
         </div>
     )
}

export default PatientList;