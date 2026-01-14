import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const socials =[
  {Icon: FaTwitter, label: "X" , link: "https://x.com/Dinesh801821617"},
  {Icon: FaLinkedin, label: "LinkedIn" , link: "https://www.linkedin.com/in/dinesh-sahoo-b83b741a2/"},
  {Icon: FaGithub, label: "GitHub" , link: "https://github.com/freedinesh88"},
];
export default function Footer() {
  return(
        <footer className="relative overflow-hidden bg-black">
        <div  className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(13,88,202,0.35),transparent_70%)]"/>
        <div  className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(16,185,129,0.30),transparent_70%)]"/>
        <motion.div className="relative z-10 px-4 sm:px-8 lg:px-10 py:16 md:py-16 md:py-20 flex flex-col items-center text-center space-y-6"
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8}}>

        <h1 className="font-semibold leading-none text-white text-center select-none"
        style={{
            fontSize: "clamp(3rem,5vm,14rem)",
            letterSpacing: "0.02rem",
            lineHeight: 0.9,
            padding: "0 3vm",
            whiteSpace: "nowrap",
            textShadow: "0 2px 18px rgba(0,0,0,0.45)"

        }}>
        Dinesh Sahoo
        </h1>
        <div className="h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#0d58cc] via-cyan-300 to-emerald-400" />
         <div className="flex gap-5 text-2xl md:text-3xl">
         {socials.map(({Icon,label,link}) => (
            <motion.a href={link}
            key={label}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-grey-300 transition-colors duration-200 inline-flex items-center justify-center">
            <Icon />
            </motion.a>
         ))}
         </div>

         <p className="text-grey-300 italic max-w-xl">"Success is when preparation meets opportunity."</p>
        <p className="text-xs text-grey-400">
        &copy; {new Date().getFullYear()} Dinesh Sahoo. All rights reserved.
        
        </p>
        
        </motion.div>
        </footer>
    )
}