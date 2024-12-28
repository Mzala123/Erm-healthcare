import {PanelLeft} from "lucide-react";
import PropTypes from "prop-types";
import {Menu as menuItems} from "../../routes/Menu.jsx"
import {Link} from "react-router-dom";

function Sidebar({handleCloseMenu, isOpen}) {



    return (
        <div className={`bg-white border-r-2 border-slate-200 min-w-72 w-72 h-screen fixed z-20 transition-all shadow-md ${isOpen ? "left-0" : "-left-72"} lg:left-0 lg:shadow-none`}>
            <div className="flex justify-between items-center h-16 pl-3">
                <div>
                    ERM System
                </div>
                <div>
                   <PanelLeft onClick={handleCloseMenu} className="cursor-pointer -mr-[0.5px] lg:hidden "/>
                </div>
            </div>
            <div className="px-3 flex flex-col gap-2 text-sm">
                {
                 menuItems.map((menuItem) => (
                     // <div key={menuItem.title} className="flex">
                         <Link key={menuItem.title}  className={`flex gap-2 items-center`}  to={`/${menuItem.name}`} ><span>{menuItem.icon}</span>{menuItem.title}</Link>
                     // </div>
                 ))
                }

            </div>
        </div>
    )

}

Sidebar.propTypes = {
    handleCloseMenu: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default Sidebar;