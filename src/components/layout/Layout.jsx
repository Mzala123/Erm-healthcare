import Sidebar from "./Sidebar.jsx";
import Appbar from "./Appbar.jsx";
import {Outlet} from "react-router-dom";
import {useEffect, useRef, useState} from "react";


function Layout() {

    const [isOpen, setIsOpen] = useState(false);

    const sideBarRef = useRef(null);

    function handleToggleMenu() {
        setIsOpen(!isOpen);
    }

    function handleClickAway(e) {
        if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }


    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickAway);
        } else {
            document.addEventListener("mousedown", handleClickAway);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickAway);
        }

    }, [isOpen])


    return (
        <div className="flex h-screen w-full relative">
            <div className="" ref={sideBarRef}>
                <Sidebar handleCloseMenu={handleToggleMenu} isOpen={isOpen}/>
            </div>
            <div className="flex w-full h-screen bg-white">
                <Appbar handleOpenMenu={handleToggleMenu}/>
                <div className="flex flex-1 py-4 px-2 transition-all relative pt-20 lg:ml-72">
                    <Outlet/>
                </div>
            </div>

        </div>
    )
}

export default Layout;