import "./home.css";
import Typewriter from "typewriter-effect";
import {motion} from "framer-motion";


const textVariants={
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }

}



const Home=()=>{
    const handleClick=()=>{
        console.log("CLicked");
     alert("Clicked");
        window.open("https://drive.google.com/file/d/1_bJpIL9IHTvP_0FrRAUzdcyBEI5t7esJ/view?usp=sharing","_blank");

    }

    return(
        <div className="home">

             <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants}>I'm </motion.h2>
                <motion.h1 variants={textVariants}>Saakshi</motion.h1>
                <motion.h2 variants={textVariants}>
                    {<Typewriter
                            options={{
                            strings: ['Software Developer', 'Full Stack Developer'],
                            autoStart: true,
                            loop: true,
                            delay: 150, // Delay between typing each character
                            }}
                    />}
                </motion.h2>
              
                <motion.div className="button" variants={textVariants} initial="initial" animate="animate">
                    <motion.button  variants={textVariants} onClick={()=>handleClick()}>Download Resume</motion.button>
                </motion.div>
            </motion.div>                
            <motion.div className="imageContainer"  animate={{ y: [0, -10, 0],x: [0, 5, 0], }} // Bouncing animation on the y-axis
      transition={{ duration: 2, repeat: Infinity ,ease: 'easeInOut' }}>
                <img src="/images/person.png" alt="person_img" />
            </motion.div>

            </div> 
           
         </div>
    )
}
export default Home;