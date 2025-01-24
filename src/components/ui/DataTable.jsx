import PropTypes from "prop-types";
import InputField from "../form/InputField.jsx";
// import {faker} from "@faker-js/faker"
import {useEffect, useState} from "react";


function DataTable({title="", description = "", data=[], columnHeaders=[]}) {

     const[seachItem, setSeachItem] = useState("");
      const filteredData = data.filter(foundItem => {
         return columnHeaders.some(colHeader => {
             const isFilterable = colHeader.filterable ?? true
             if(isFilterable){
                 return foundItem[colHeader.key].toLowerCase().includes(seachItem.toLowerCase())
             }else return false;
         })
     })

    function handleChange(e){
         setSeachItem(e.target.value);
    }


    return (
        <div className="flex flex-1 flex-col gap-2 rounded-md w-full bg-white">
            <div className="w-full flex flex-col gap-2 items-center justify-between py-2 lg:flex-row">
              <div className="flex flex-col justify-center">
                   <p className="text-xl font-Poppins_Bold text-center lg:text-left">{title}</p>
                   <span className="text-xs text-gray-700 text-center font-Martian lg:text-left">{description}</span>
              </div>
                <div className="flex w-full gap-4 justify-center items-center lg:w-auto">
                    <InputField name="searchItem" value={seachItem} placeholder={"Search..."}  type="search" onChange={handleChange}/>
                </div>
            </div>

            <div className="relative flex flex-1 border rounded border-stone-200 overflow-y-auto w-full">
                <table className="absolute  top-0 left-0 bottom-0 w-full flex-1">
                    <thead className="w-full">
                    <tr className="space-y-2 sticky top-0">
                        {
                            columnHeaders.map((colHeader) => {
                                return <th style={{width: colHeader.width+'px'}} className="bg-stone-100 whitespace-nowrap capitalize text-sm font-Martian text-left border-r border-b border-stone-200 px-2 py-2" key={colHeader.key}>
                                    {colHeader.title}
                                </th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody className="">
                        {
                            data.length > 0 ?

                                (filteredData.map(rowData => {
                                return <tr key={rowData.id} className="border-b border-stone-200">
                                    {
                                        columnHeaders.map((colHeader) => {
                                            return <td key={colHeader.key} className="py-3 border-r border-stone-200 px-2 text-sm">
                                                {rowData[colHeader.key]}
                                            </td>
                                        })
                                    }
                                </tr>
                            }) ) : <tr className="">
                                     <td colSpan={columnHeaders.length} className="text-center pt-4">No records found... </td>
                                </tr>
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

// function generatePeople(count){
//      const people = []
//      for(let i=0; i<count; i++){
//          const person = {
//              id: i+1,
//              firstName:faker.person.firstName(),
//              lastName:faker.person.lastName(),
//              email: faker.internet.email(),
//              jobTitle:faker.person.jobTitle(),
//              gender:faker.person.gender(),
//          }
//          people.push(person)
//      }
//      return people;
// }