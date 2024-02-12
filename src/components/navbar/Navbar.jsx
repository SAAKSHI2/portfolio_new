import Sidebar from "../sidebar/Sidebar";
import "./navbar.css";
import {motion} from "framer-motion";

const Navbar = ()=>{
    const handleClick=(link)=>{
        window.open(link, '_blank');
    }

    return (
        <div className="navbar">

            <Sidebar/>
            
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}  transition={{duration:0.5}}>Saakshi</motion.span>

                <div className="socialLinks">
                    <img src="/images/socialMedia/leetcode.png" alt="" onClick={()=>handleClick("https://leetcode.com/Saakshi_27/")} />
                    <img src="/images/socialMedia/github.png" alt=""  onClick={()=>handleClick("https://github.com/SAAKSHI2")}/>
                    <img src="/images/socialMedia/linkedin.png" alt="" onClick={()=>handleClick("https://www.linkedin.com/in/saakshi-b6918720b/")}/>
                </div>
            </div>
        
        </div>
    )
}

export default Navbar;