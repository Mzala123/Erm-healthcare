import PropTypes from "prop-types";
import PageSpinner from "./PageSpinner.jsx";

function Button({children, onClick, variant="primary", isLoading=false}) {

    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
    };

    return(
        <button className={`border-none rounded-md px-3 py-2 flex w-full justify-center items-center gap-2 text-sm text-white transition-colors 
                ${isLoading ? `${variantClasses[variant]} opacity-70` : variantClasses[variant] }`}
                onClick={onClick}
                disabled={isLoading}
        >
             {isLoading ? <PageSpinner/> : children }
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["primary","secondary","success","danger"]),
    isLoading: PropTypes.bool,
    disabled: PropTypes.bool,

}
export default Button;