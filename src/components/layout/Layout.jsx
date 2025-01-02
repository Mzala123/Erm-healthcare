import Sidebar from "./Sidebar.jsx";
import Appbar from "./Appbar.jsx";
import {Outlet} from "react-router-dom";
import {useEffect, useMemo, useRef, useState} from "react";
import InputField from "../form/InputField.jsx";
import Button from "../ui/Button.jsx";
import FormBuilder from "../form/FormBuilder.jsx";

function Layout() {

    const[isOpen, setIsOpen] = useState(false);

    const sideBarRef = useRef(null);

    function handleToggleMenu(){
        setIsOpen(!isOpen);
    }

    function handleClickAway(e){
        if(sideBarRef.current && !sideBarRef.current.contains(e.target)){
            setIsOpen(false);
        }
    }


    const loginForm = useMemo(()=>{
      return  [
            {
                name:"username",
                value:"",
                required:true,
                type:"text",
                width: 6,
                placeholder:"Username",
                label:"Username",
            },
           {
               name:"password",
               value:"",
               required:true,
               type:"text",
               width: 4,
               placeholder:"Password",
               label:"Password",
           }
        ]
    },[])

    console.log(loginForm);



    useEffect(() => {
        if(isOpen){
            document.addEventListener("mousedown", handleClickAway);
        }else{
            document.addEventListener("mousedown", handleClickAway);
        }

        return ()=>{
            document.removeEventListener("mousedown", handleClickAway);
        }

    },[isOpen])


   return (
       <div className="flex h-screen w-full relative">
           <div className="" ref={sideBarRef}>
               <Sidebar handleCloseMenu={handleToggleMenu} isOpen={isOpen} />
           </div>
           <div className="w-full">
               <Appbar handleOpenMenu={handleToggleMenu}/>
               <div className="bg-slate-100 h-full p-3 transition-all relative top-16 lg:ml-72">

                   <FormBuilder formFields={loginForm}/>
               </div>
           </div>

       </div>
   )
}

export default Layout;