import PropTypes from "prop-types";
import InputField from "../form/InputField.jsx";
import {faker} from "@faker-js/faker"


function DataTable({title="", description = "", data=[], columnHeaders=[], }) {

     data = generatePeople(100)
     columnHeaders = [
        {key: "firstName", title: "First name", width: 300, DataType: "string"},
        {key: "lastName", title: "Last name", width: 300, DataType: "string"},
        {key: "email", title: "Email", width: 300, DataType: "string"},
        {key: "jobTitle", title: "Job Title", width: 300, DataType: "string"},
        {key: "gender", title: "Gender", width: 300, DataType: "string"},
    ]

    return (
        <div className="flex flex-1 flex-col gap-2 rounded-md w-full">
            <div className="w-full flex flex-col gap-2 items-center justify-between py-2 lg:flex-row">
              <div className="flex flex-col justify-center">
                   <p className="text-xl font-Poppins_Bold text-center lg:text-left">{title}</p>
                   <span className="text-xs text-gray-700 text-center font-Martian lg:text-left">{description}</span>
              </div>
                <div className="flex w-full gap-4 justify-center items-center lg:w-auto">
                    <InputField name={""} placeholder={"Search..."} type="search"/>
                </div>
            </div>

            <div className="flex flex-1 border rounded border-stone-200 overflow-y-auto">
                <table className="w-full">
                    <thead className="w-full">
                    <tr className="space-y-2">
                        {
                            columnHeaders.map((colHeader) => {
                                return <th className="bg-stone-100 capitalize text-sm font-Martian text-left border-b border-stone-200 px-2 py-2" key={colHeader.key}>
                                    {colHeader.title}
                                </th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody className="">
                        {
                            data.map(rowData => {
                                return <tr key={rowData.id} className="border-b border-stone-200">
                                    {
                                        columnHeaders.map((colHeader) => {
                                            return <td key={colHeader.key} className="py-3 px-2 text-sm">
                                                {rowData[colHeader.key]}
                                            </td>
                                        })
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

DataTable.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    columnHeaders: PropTypes.array,
    data: PropTypes.array,
}

export default DataTable;

function generatePeople(count){
     const people = []
     for(let i=0; i<count; i++){
         const person = {
             id: i+1,
             firstName:faker.person.firstName(),
             lastName:faker.person.lastName(),
             email: faker.internet.email(),
             jobTitle:faker.person.jobTitle(),
             gender:faker.person.gender(),
         }
         people.push(person)
     }
     return people;
}