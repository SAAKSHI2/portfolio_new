import "./about.css";
import {motion} from "framer-motion";

const variants={
    initial:{
        y:100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            // delay:0.2,
            duration:1,
            staggerChildren:0.1,
        }
    }

}

const itemVariants={
    initial:{
        y:40,
        opacity:0,
        transition:{
            staggerChildren:0.1,
        },
    },
    animate:{
    //    y:50,
        y:0,
       opacity:1,
       transition:{
        delay:0.2,
        duration:1,
        staggerChildren:0.1
       }
    }
}


const About=()=>{
    return (
        <motion.div className="about" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="inside-about" variants={variants} initial="initial" whileInView="animate">
            <div className="heading" variants={variants}>
                <h1>About Me</h1>
               </div>
                     <motion.div className="profile-pic" variants={variants} initial="initial" whileInView="animate">
                        <img src="/images/about.png" alt="profile_pic" />
                     </motion.div>
                  
                    <motion.div className="content" variants={itemVariants} initial="initial" whileInView="animate">
                        <motion.p variants={itemVariants} initial="initial" whileInView="animate">Hi ! I'm Saakshi, a passionate and dedicated Computer Science undergraduate based in India,  with a keen interest in software development and technology, constantly seeking opportunities to enhance my skills and contribute to innovative projects.I have worked on FullStack projects and also I actively participate in competitive programming on platforms like LeetCode where I code in Java .
 Eager to explore new challenges and opportunities, I am always seeking to expand my knowledge and contribute to impactful projects. Let's connect and explore the possibilities together! :)</motion.p>
                   </motion.div>

            </motion.div>
           

        </motion.div>
    )
}
export default About;