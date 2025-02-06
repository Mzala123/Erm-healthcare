import Button from "../ui/Button.jsx";
import InputField from "../form/InputField.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import DataTable from "../ui/DataTable.jsx";
import {Pencil, Plus, PlusSquare, ShieldPlus, Trash} from "lucide-react";
import axios from "axios";
import {tr} from "@faker-js/faker";

function PatientList() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function getUsers(){
        setIsLoading(true);
        setTimeout(()=>{
            axios.get("http://localhost:3000/api/customers").then((response)=>{
                setUsers(response.data);
            }).catch((error)=>{
                console.log(error);
            }).finally(()=>{
                setIsLoading(false);
            })
        }, 2000)

    }

    console.log(users);

    // const columnHeaders = [
    //     {key: "name", title: "Full name", width: 300, DataType: "string", filterable: true},
    //     {key: "username", title: "Username", width: 300, DataType: "string", filterable: true},
    //     {key: "email", title: "Email", width: 300, DataType: "string", filterable: true},
    //     {key: "address.street", title: "Address", width: 300, DataType: "string"},
    //     // {key: "address.geo.lat", title: "Latitude", width: 300, DataType: "string"},
    //     // {key: "address.geo.lng", title: "Longitude", width: 300, DataType: "string"},
    //     // {key: "gender", title: "Gender", width: 300, DataType: "string"},
    // ]
    // //console.log(users[0].address.street);

    const columnHeaders = [
        {key: "firstname", title: "Full name", width: 300, DataType: "string", filterable: true},
        {key: "lastname", title: "Username", width: 300, DataType: "string", filterable: true},
        {key: "email", title: "Email", width: 300, DataType: "string", filterable: true},
        {key: "address", title: "Address", width: 300, DataType: "string", filterable: true},
        {key: "phonenumber", title: "Latitude", width: 300, DataType: "string", filterable: true},
        {key: "golfclubsize", title: "Longitude", width: 300, DataType: "string", filterable: true},
        {key: "gender", title: "Gender", width: 300, DataType: "string", filterable: true},
    ]

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
                         rowPrimaryKey={"id"}
                         isLoading={isLoading}
                         actions={
                            [
                                {
                                    // label: "Edit",
                                    icon: <Pencil/>,
                                    onClick: (rowData)=>{

                                    },
                                    className:"flex gap-2 text-blue-500 size-4 justify-center items-center",
                                },
                                {
                                    icon: <Trash/>,
                                    onClick: (rowData)=>{
                                        axios.delete(`http://localhost:3000/api/customers/${rowData.customerid}`).then((response) => {
                                                console.log(rowData.id);
                                                getUsers()
                                                console.log("Item deleted successfully");
                                        }).catch((error)=>{
                                            console.log(error);
                                        }).finally(()=>{

                                        })
                                    },
                                    className:"flex gap-2 text-red-500 size-4 justify-center items-center"
                                }
                            ]
                         }
                     />
                 </div>
             </div>
         </div>
     )
}

export default PatientList;