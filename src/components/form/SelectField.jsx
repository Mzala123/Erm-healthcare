import PropTypes from "prop-types";


function SelectField({value, onChange, name, required=false, type="select", label, isSubmitting, options =[]}) {
    const showError = isSubmitting && required && !value;
    return (
        <div className={`flex flex-col gap-[6px]`}>
            <div className={"flex gap-1"}>
                <label htmlFor={name}>{label}</label> {required && <p className="text-red-500">*</p>}
            </div>
            <select
                type={type}
                className={`px-2 py-2 text-sm border-[1.5px] focus:ring-2 rounded-md ${showError ? "border-red-500" : "border-gray-500"} `}
                value={value}
                onChange={onChange}
                name={name}
            >
                <option value="">Please choose an option</option>
                 {options.map(option => (
                     <option key={option.label} value={option.value}>{option.label}</option>
                 ))}
            </select>
            {showError && <span className="text-red-500 text-xs"> {label} is required</span>}
        </div>
    )
}

SelectField.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    label: PropTypes.string,
    width: PropTypes.number,
    isSubmitting: PropTypes.bool,
    type: PropTypes.any,
    options: PropTypes.array,
}


export default SelectField;