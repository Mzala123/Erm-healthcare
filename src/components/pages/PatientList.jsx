import Button from "../ui/Button.jsx";
import InputField from "../form/InputField.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import DataTable from "../ui/DataTable.jsx";
import {Plus, PlusSquare, ShieldPlus} from "lucide-react";
import axios from "axios";

function PatientList() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);

    function getUsers(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            setUsers(response.data);
        }).catch((error)=>{
            console.log(error);
        }).finally(()=>{
        })
    }

    const columnHeaders = [
        {key: "name", title: "Full name", width: 300, DataType: "string", filterable: true},
        {key: "username", title: "Username", width: 300, DataType: "string", filterable: true},
        {key: "email", title: "Email", width: 300, DataType: "string", filterable: true},
        // {key: "address[street]", title: "Address", width: 300, DataType: "string"},
        // {key: "gender", title: "Gender", width: 300, DataType: "string"},
    ]
    //console.log(users[0].address.street);

    useEffect(() => {
         getUsers()
    }, []);

     return (
         <div className="bg-white p-4 rounded-md flex flex-1 flex-col h-full mx-auto w-full">
             <div className="flex flex-1 h-full flex-col gap-4">
                 <div className="flex justify-end">
                     <Button onClick={()=>navigate("/system/patients/+")}>
                        <ShieldPlus size={20} />
                        <span>Add Patient</span>
                     </Button>
                 </div>
                 <div className="flex flex-1">
                     <DataTable
                         title="Patients Report"
                         description="A patient report listing all registered patients."
                         data={users}
                         columnHeaders={columnHeaders}
                     />
                 </div>
             </div>
         </div>
     )
}

export default PatientList;