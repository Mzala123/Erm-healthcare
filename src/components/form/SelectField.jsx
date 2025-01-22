import PropTypes from "prop-types";

function SelectField({type="text", value, name, onChange, onKeyUp, label, placeholder, required=false, error, options=[]}) {

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-black text-sm font-semibold">{label} {required &&
                <span className="text-red-600">*</span>} </label>
            <select
                className={`bg-white border-[1.5px]   ${error ? 'border-red-600' : `border-slate-300`} text-sm rounded-md px-3 py-2 hover:ring-1 hover:ring-blue-600 lg:min-w-72`}
                type={type}
                onChange={onChange}
                value={value}
                onKeyUp={onKeyUp}
                placeholder={placeholder}
                name={name}
            >
                <option value="">Please choose an option</option>
                {
                    options.map(option => {
                        return <option key={option.value} value={option.value}>{option.label}</option>;
                    })
                }
            </select>
            {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
    )
}

SelectField.propTypes = {

    type: PropTypes.any,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyUp: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    error: PropTypes.string,
    options: PropTypes.array,

}

export default SelectField;