import "./skills.css";
import {motion} from "framer-motion"


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
        x:-30,
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
        delay:0.2,
        duration:1,
        staggerChildren:0.1
       }
    }
}


const Container = ({title,skills})=>{
    return (
        <motion.div className="container" variants={variants} initial="initial" whileInView="animate">
            <div className="heading">
                <h1>{title}</h1>

            </div>

            <motion.div className="list" variants={itemVariants} whileInView="animate" initial="initial">
                 <motion.ul variants={itemVariants}>
                    {skills.map(skill=>{
                        return(
                            <motion.li key={skill} variants={itemVariants} initial="initial" animate="animate">{skill}</motion.li>
                        )
                    })}
                 </motion.ul>
            </motion.div>
           
        </motion.div>
    )

}

const Skills=()=>{
    return (
        <div className="skills" >
            <div className="wrapper">

                <div className="heading">
                <h1>Skills</h1>
                </div>
                
               <motion.div className="skill" variants={variants} initial="initial" whileInView="animate">
               
                    <Container title="FrontEnd" skills={["ReactJs","HTML","CSS","JavaScript"]}/>
                    <Container title="BackEnd" skills= {["ExpressJs","NodeJs"]}/>
                    <Container title="DataBases" skills={["PostgreSQL", "MongoDB", "SQL"]}/>
                    <Container title="Others" skills={["Java","python","AWS Services","CDK","DSA"]}/>

               </motion.div>

                
            </div>
        </div>
    )
}
export default Skills;