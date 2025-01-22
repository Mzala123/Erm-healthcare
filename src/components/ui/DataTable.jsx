import PropTypes from "prop-types";
import InputField from "../form/InputField.jsx";


function DataTable({title="", description = ""}) {


    const dataArray = [
        {
            firstname:"Mtende",
            lastname:"Mwanza",
            gender: "Male",
            dateOfBirth: "1997-08-17",
            occupation: "Software Developer",
            address: "Likuni, Lilongwe",
        },
        {
            firstname:"Chisomo",
            lastname:"Kachingwe",
            gender: "Female",
            dateOfBirth: "2002-10-21",
            occupation: "Social Worker",
            address: "Lumbadzi, Malawi",
        }
    ]
    let columnHeader = {}
    // const headers = Object.keys(dataArray)
    // console.log(headers)
    for(let column=0; column <dataArray.length; column++){
        if(column === 0){
            let current = column
            for(let headerKey in dataArray[current]){
                console.log(headerKey);
                columnHeader[headerKey] = headerKey
            }
            break;
        }
    }
    console.log(columnHeader);

    return (
        <div className="flex flex-col gap-2 rounded-md w-full">
            <div className="w-full flex flex-col gap-2 items-center justify-between px-4 py-2 lg:flex-row">
              <div className="flex flex-col justify-center">
                   <p className="text-xl font-Poppins_Bold text-center lg:text-left">{title}</p>
                   <span className="text-xs text-gray-700 font-Martian">{description}</span>
              </div>
                {/*<div>*/}
                {/*    m*/}
                {/*</div>*/}
                <div className="flex w-full gap-4 justify-center items-center lg:w-auto">
                    <InputField name={""} placeholder={"Search..."} type="search"/>
                </div>
            </div>

            <div className="bg-white px-4 py-2 border border-slate-200 overflow-x-auto">
                <table className="w-full mt-2">
                    <thead className="w-full">
                    <tr className="space-y-2">
                        {
                            Object.keys(columnHeader).map((columnHeaderKey) => {
                                return <th className="capitalize text-sm font-Martian text-left border-b border-slate-300 py-2" key={columnHeaderKey}>{columnHeaderKey}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                        {
                            dataArray.map((rowData, index) => {
                                return <tr className="border-b border-slate-300" key={index}>
                                    {
                                        Object.entries(rowData).map(([key, value])=>{
                                            return <td key={key} className="py-2 text-sm">{value}</td>
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
}

export default DataTable;