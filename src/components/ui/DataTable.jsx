import PropTypes from "prop-types";
import InputField from "../form/InputField.jsx";

function DataTable({title="", description = ""}) {


    return (
        <div className="flex flex-col gap-2 rounded-md w-full">
            <div className="w-full flex flex-col gap-2 items-center justify-between px-4 py-2 lg:flex-row">
              <div className="flex flex-col justify-center">
                   <p className="text-xl font-Poppins_Bold text-center lg:text-left">{title}</p>
                   <span className="text-xs text-gray-700 font-Martian">{description}</span>
              </div>
                <div className="flex w-full justify-center items-center lg:w-auto">
                    <InputField name={""} placeholder={"Search..."} type="search"/>
                </div>
            </div>

            <div className="bg-white px-4 py-2 border border-slate-200">
                table body
            </div>
        </div>
    )
}

DataTable.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default DataTable;