import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt2} from "react-icons/hi";
import { FaRegWindowClose } from "react-icons/fa";



const NavBar = () => {
    const [open, setOpen] =useState(false)
    const routes = [
        {id:1,name:'Home',path:'/'},
        {id:2,name:'About',path:'/about'},
        {id:3,name:'Services',path:'/services'},
        {id:4,name:'Contact',path:'/contact'},
        {id:5,name:'NotFound',path:'*'}];


    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
            {
                open === true ?  <FaRegWindowClose /> :<HiMenuAlt2 />
            }
                
            </div>
           <ul className="md:flex ">
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;