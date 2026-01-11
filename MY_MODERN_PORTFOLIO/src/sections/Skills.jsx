import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { SiHibernate } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { motion } from "framer-motion";
export default function Skills() {
  const skills =[
    { icon :<FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    {icon: <SiMysql />, name: "MySQL" },
    {icon: <FaHtml5 />, name: "HTML5" },
    {icon: <FaCss3 />, name: "CSS3" },
    {icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    {icon: <FaJs />, name: "JavaScript" },
    {icon: <SiHibernate />, name: "Hibernate" },
    {icon: <SiApachemaven />, name: "Maven" },
    {icon: <SiGit />, name: "Git" },
    {icon: <SiGithub />, name: "GitHub" },
    {icon: <DiVisualstudio />, name: "VS Code" },
    {icon: <FaReact />, name: "React" },
    {icon : <FaVuejs />, name: "Vue.js" },
    {icon: <FaShopify />, name: "Shopify" },
    {icon: <GrGraphQl />, name: "GraphQL" },
  ]
  const repeated = [...skills, ...skills];
  return (
    <section id="skills" className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-20 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-20 blur-[120px] animate-pulse delay-500"/>

        </div>
        <motion.h2 className="text-4xl mt-5 sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{opacity:1,y:0}}
        transition={{ duration: 0.5, delay: 0.1 }}>
        My Skils
        </motion.h2>
        <motion.p className="mt-2 mb-8 text-white/90 text-base sm:text-lg z-10"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{opacity:1,y:0}}
        transition={{ duration: 0.5, delay: 0.1 }}>
        Modern Application | Modern Technologies
        </motion.p>
        <div className="relative w-full overflow-hidden">
          <motion.div className="flex gap-10 text-6xl text-[#1cd8d2]">
            {repeated.map((s, i) => (
                <div key={i} className="flex flex-col items-center gap-2 min-w-[120px]"
                aria-label={s.name}
                title={s.name}>
                    <span className="hover:scale-125 transition-transform duration-300">
                        {s.icon}
                    </span>
                    <p className="text-sm">
                      {s.name}
                    </p>
                </div>
            ))}

          </motion.div>

        </div>
    </section>
  );
}