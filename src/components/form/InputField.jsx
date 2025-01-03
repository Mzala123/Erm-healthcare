import PropTypes from "prop-types";

function InputField({placeholder, value, onChange, name, onKeyUp, type="text", required=false, label, isSubmitting}) {
    const showError = isSubmitting && required && !value;
      return(
          <div className={`flex flex-col gap-[6px]`}>
              <div className={"flex gap-1"}>
                  <label htmlFor={name}>{label}</label> {required && <p className="text-red-500">*</p>}
              </div>
              <input className={`px-2 py-2 text-sm border-[1.5px] focus:ring-2 rounded-md ${showError ? "border-red-500" : "border-gray-500"} `}
                      type={type}
                      placeholder={placeholder}
                      value={value}
                      onChange={onChange}
                      name={name}
                      onKeyUp={onKeyUp}
               />
              {showError && <span className="text-red-500 text-xs"> {label} is required</span> }
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
    isSubmitting: PropTypes.bool,
}

export default InputField;