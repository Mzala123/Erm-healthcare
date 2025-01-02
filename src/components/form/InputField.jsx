import PropTypes from "prop-types";

function InputField({placeholder, value, onChange, name, onKeyUp, type="text", required, label}) {
      return(
          <div className={`flex flex-col gap-1`}>
               <label htmlFor={name}>{label}</label>
               <input className={`px-2 py-2 text-sm border-2 border-gray-600 focus:ring-2 rounded-md `}
                      type={type}
                      placeholder={placeholder}
                      value={value}
                      onChange={onChange}
                      name={name}
                      onKeyUp={onKeyUp}
                      required={required}
               />
          </div>
      )
}

InputField.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    name: PropTypes.string,
    onKeyUp: PropTypes.func,
    type: PropTypes.any,
    required: PropTypes.bool,
    label: PropTypes.string,
    width: PropTypes.number,
}

export default InputField;