import { useRef } from "react";
import "./projects.css";
import {motion,useScroll, useSpring, useTransform} from "framer-motion";



const items = [
    {
        id:1,
        title:"Social-Media-App",
        img:"/images/projects/social_media_app.png",
        desc:"A Social Media app where people can follow/unfollow other users and can like and comment on their posts"
    },
    {
        id:2,
        title:"Chat-Application",
        img:"/images/projects/chat_application.png",
        desc:"Real-time chat application to facilitate instant communication among users."
    },
    {
        id:3,
        title:"Movie Recommendation",
        img:"/images/projects/movie_recommender.png",
        desc:"A Movie Recommendation System where Users can search for the movie and movies having same characteristics as the searched one will be recommended.User can also search the movie based on particular Genres."
    }
]


const Single = ({item})=>{
    const ref=useRef();
    const {scrollYProgress} = useScroll({target:ref, 
        // offset:["start start", "end start" ]
    })

    const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return (
        <section id="Projects">
            <div className="container">
             <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt=""/>
            </div>
            
                <motion.div className="textContainer" style={{y}}>
                     <h2 >{item.title}</h2>
                     <p>{item.desc}</p>
                     <button>visit</button>
                </motion.div>    
             </div>
               
            </div>
        </section>
    )
}


const Projects=()=>{

    const ref=useRef();
   
    const {scrollYProgress} = useScroll({target:ref,offset:["end end","start start"]})
    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })
    
    return (
        <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>

            </div>
             {items.map(item=>(
                <Single item={item} key={item.id}/>
             ))}
        </div>
    )
}

export default Projects;