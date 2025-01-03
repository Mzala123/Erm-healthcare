import PropTypes from "prop-types";

function Button({children, onClick, variant="primary"}) {

    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white",
        secondary: "bg-gray-600 hover:bg-gray-700 text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
    };

    return(
        <button className={`border-none rounded-md bg-blue-600 px-3 py-2 flex justify-center items-center gap-2 text-sm text-white hover:bg-blue-700  transition-colors ${variantClasses[variant]}`} onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["primary","secondary","success","danger"])
}
export default Button;