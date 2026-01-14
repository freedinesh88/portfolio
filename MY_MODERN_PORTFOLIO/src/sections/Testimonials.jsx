import {motion } from "framer-motion";

const testimonials = [
    {
        name: "John Smith",
        role: "CEO at TechCorp",
        review: "Outstanding work! The project exceeded our expectations and was delivered on time. Highly professional and skilled developer.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Sarah Johnson",
        role: "Product Manager at StartupXYZ",
        review: "Incredible attention to detail and excellent communication throughout the project. The final product was exactly what we envisioned.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Michael Chen",
        role: "CTO at InnovateInc",
        review: "Top-notch development skills and great problem-solving abilities. Delivered a scalable and maintainable solution.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "Emily Davis",
        role: "Marketing Director at GrowthCo",
        review: "Professional, reliable, and creative. The website design and functionality perfectly captured our brand identity.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
        name: "David Rodriguez",
        role: "Founder at Digital Solutions",
        review: "Exceptional coding skills and great collaboration. The project was completed ahead of schedule with excellent quality.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
];

export default function Testimonials(){
    return(
        <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
        <motion.h2 className="text-4xl font-bold mb-16"
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}>
        What People says
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        {testimonials.map((t,i) => 
        <motion.div
        key={t.name+1}
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5, delay:i*0.2}}
        viewport={{once: true}}
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500
        hover:scale-105 hover:-rotate-1">
        <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
        loading="lazy" />
        <p className="text-grey-200 italic mb-4">
        {t.review}
        </p>
        <h3 className="text-lg font-semibold">
        {t.name}
        </h3>
        <p className="text-sm text-grey-400">
        {t.role}
        </p>
        </motion.div>
        )}
        
        </div>
        </section>
    )
}