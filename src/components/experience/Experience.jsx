import "./experience.css";

import {motion} from "framer-motion";

const variantsLeft={
    initial:{
        x:-100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            delay:0.1,
            duration:1,
            staggerChildren:0.1,
        }
    }
}
const variantsRight={
    initial:{
        x:200,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            delay:0.1,
            duration:1,
            staggerChildren:0.1,
        }
    }
}
const itemVariants={
    initial:{
        x:50,
        opacity:0,
        transition:{
            staggerChildren:0.1,
        },
    },
    animate:{
    //    y:50,
        x:0,
       opacity:1,
       transition:{
        delay:0.1,
        duration:1,
        staggerChildren:0.1
       }
    }
}


const CompanyDetails=({title,duration,location,logo,skills,id})=>{
    return (
        <motion.section className="section" id={id}>
        <motion.div className="details" initial="initial" whileInView="animate" variants={variantsLeft}>
            <motion.div className="imgContainer" variants={variantsLeft}>
                <motion.img variants={variantsLeft} src={logo} alt="image" />
            </motion.div>
            <motion.div className="info" variants={variantsRight}>
                <motion.h2 variants={itemVariants}>{title}</motion.h2>
                <motion.h3 variants={itemVariants}>{duration}</motion.h3>
                <motion.h3 variants={itemVariants}>{location}</motion.h3>
                <motion.h3 variants={itemVariants}>Skills : <motion.span variants={itemVariants}>{skills}</motion.span></motion.h3>

            </motion.div>
        </motion.div>
        </motion.section>
    )
}

const Experience=()=>{
    return (
        <div className="experience">
            <div className="wrapper">
               <div className="heading">
                <h1>Experience</h1>
               </div>

             <CompanyDetails id="Experience"
             title="Software Developer Intern"
             duration = "Jan,2023 - June, 2023"
             location= "Bangaluru, India"
             logo = "/images/experience/Amazon.png"
             skills = "AWS , Amazon S3 , Amazon SQS, Lambda, Firehose, CloudWatchLogs, CDK Resources, Java, Full CD pipeline, Cucumber"
             />
            <CompanyDetails 
             title="Research Intern"
             duration = "Jan,2023 - June, 2023"
             location= "Remote"
             logo = "/images/experience/SamsungPrism.png"
             skills="Researching about Matter specification"
             />

           </div>
        </div>
        
    )
}
export default Experience;