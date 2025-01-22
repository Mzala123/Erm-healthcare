import {PanelLeftClose} from "lucide-react";
import PropTypes from "prop-types";
import {Menu as menuItems} from "../../routes/Menu.jsx"
import {Link, useLocation} from "react-router-dom";

function Sidebar({handleCloseMenu, isOpen}) {


    const location = useLocation()

    return (
        <div className={`bg-white  min-w-72 w-72 h-screen fixed z-20 transition-all shadow-md lg:border-r lg:border-slate-300 ${isOpen ? "left-0" : "-left-72"} lg:left-0 lg:shadow-none`}>
            <div className="flex justify-between items-center h-16 pl-3 border-b border-slate-300 ">
                <div className="font-Martian">
                    ERM System
                </div>
                <div>
                   <PanelLeftClose onClick={handleCloseMenu} className="cursor-pointer -mr-[0.5px] lg:hidden "/>
                </div>
            </div>
            <div className="px-3 flex flex-col gap-2 text-[16px] mt-3">
                {
                 menuItems.map((menuItem) => {
                     const isActive = location.pathname === menuItem.path
                     console.log(location.pathname," ", menuItem.path)
                     return <div key={menuItem.title} className="flex gap-1 items-center">
                         <div className={`${isActive ? "bg-blue-700" : ""} h-5 w-[3px] rounded-2xl`}></div>
                         <Link key={menuItem.title} className={`flex flex-1 gap-4 items-center py-1 px-2 rounded-md hover:text-blue-700 hover:bg-stone-100 
                             ${isActive ? "rounded-md bg-stone-100 text-blue-700" : ""}`}
                               to={`${menuItem.path}`}>
                             <div className="flex gap-2 items-center"><span>{menuItem.icon}</span>{menuItem.title}</div>
                         </Link>
                     </div>

                 })
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