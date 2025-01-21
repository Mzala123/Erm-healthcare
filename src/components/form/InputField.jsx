import PropTypes from "prop-types";

function InputField({type="text", value, name, onChange, onKeyUp, label, placeholder, required=false, error}) {

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-black text-sm font-semibold">{label} {required && <span className="text-red-600">*</span>} </label>
            <input  className={`bg-white border-[1.5px]  ${error ? 'border-red-600' : `border-slate-600`} text-sm rounded-md px-3 py-2 hover:ring-2 hover:ring-blue-600`}
                    type={type}
                    onChange={onChange}
                    value={value}
                    onKeyUp={onKeyUp}
                    placeholder={placeholder}
                    name={name}
            />
            {error && <span className="text-red-600 text-sm">{error}</span>}
        </div>
    )
}

InputField.propTypes = {
    type: PropTypes.any,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyUp: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.any,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    error: PropTypes.string
}


export default InputField;