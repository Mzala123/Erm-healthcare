import {PanelRight} from "lucide-react";
import PropTypes from "prop-types";

function Appbar({handleOpenMenu}){

    return (
        <div className ="h-16 bg-white border-b-2 border-slate-200 w-full flex justify-between items-center fixed z-10 px-3">
           <div>
               <PanelRight className={"cursor-pointer lg:hidden"} onClick={handleOpenMenu}/>
           </div>
            <div>
                dropdown
            </div>

        </div>
    )
}

Appbar.propTypes = {
    handleOpenMenu: PropTypes.func.isRequired
}

export default Appbar;