import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiMysql, SiMongodb, SiPytorch, SiTailwindcss, SiC } from "react-icons/si";
import { motion } from "framer-motion";


const iconVariable = (duration) => ({
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
                        }
                 }
}
)
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, u:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>
            Technologies</motion.h2>
            <motion.div
            whileInView={{opacity:1, x:0 }}
            initial={{opacity:0, x:100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                variants={iconVariable(1)}
                initial="initial"
                animate="animate"
                 className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className="text-6xl text-yellow-400"/> {/* Python: Yellow */}
                </motion.div>
                <motion.div
                 variants={iconVariable(1.25)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className="text-6xl text-red-600"/> {/* Java: Red */}
                </motion.div>
                <motion.div
                 variants={iconVariable(1.5)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiCplusplus className="text-6xl text-blue-600"/> {/* C++: Blue */}
                </motion.div>
                <motion.div
                 variants={iconVariable(1.75)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiC className="text-6xl text-blue-600"/> {/* C++: Blue */}
                </motion.div>
                <motion.div
                 variants={iconVariable(2)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiJavascript className="text-6xl text-yellow-300"/> {/* JavaScript: Yellow */}
                </motion.div>
                <motion.div
                 variants={iconVariable(2.5)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className="text-6xl text-blue-500"/> {/* MySQL: Blue */}
                </motion.div>
                <motion.div
                 variants={iconVariable(2.5)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className="text-6xl text-green-600"/> {/* MongoDB: Green */}
                </motion.div>
                <motion.div
                 variants={iconVariable(2)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPytorch className="text-6xl text-orange-500"/> {/* PyTorch: Orange */}
                </motion.div>
                <motion.div
                 variants={iconVariable(1.75)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className="text-6xl text-orange-600"/> {/* HTML5: Orange */}
                </motion.div>
                <motion.div
                 variants={iconVariable(1.5)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className="text-6xl text-blue-600"/> {/* CSS3: Blue */}
                </motion.div>
                <motion.div
                 variants={iconVariable(1.25)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaReact className="text-6xl text-cyan-400"/> {/* React: Cyan */}
                </motion.div>
                <motion.div
                 variants={iconVariable(1)}
                 initial="initial"
                 animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className="text-6xl text-teal-400"/> {/* TailwindCSS: Teal */}
                </motion.div>
            </motion.div>
    </div> 
  )
}

export default Technologies;
