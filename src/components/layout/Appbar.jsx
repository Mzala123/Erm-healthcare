import {PanelRight} from "lucide-react";
import PropTypes from "prop-types";
import { DropDown } from "../ui/DropDown.jsx";

function Appbar({handleOpenMenu}){

    return (
        <div className ="h-16 bg-white border-b border-slate-300 w-full flex justify-between items-center fixed z-10 px-3">
           <div>
               <PanelRight className={"cursor-pointer lg:hidden"} onClick={handleOpenMenu}/>
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