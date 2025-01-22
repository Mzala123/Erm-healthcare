import {PanelLeftOpen} from "lucide-react";
import PropTypes from "prop-types";

function Appbar({handleOpenMenu}){

    return (
        <div className ="h-16 bg-white border-b border-slate-300 w-full flex justify-between items-center fixed z-10 px-3">
           <div>
               <PanelLeftOpen size={24} className={"cursor-pointer lg:hidden"} onClick={handleOpenMenu}/>
           </div>
            <div className="">
               hie
            </div>

        </div>
    )
}

Appbar.propTypes = {
    handleOpenMenu: PropTypes.func.isRequired
}

export default Appbar;