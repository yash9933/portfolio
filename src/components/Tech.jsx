import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tech Stack</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Throughout my journey as a developer, I've cultivated a diverse skill set that spans multiple technologies and frameworks. My proficiency includes both frontend and backend development, allowing me to create seamless, responsive, and robust applications. Below are technologies and tools I am skilled in. <br/>(Feel free to spin them)
        </motion.p>
      </div>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
      {/* <div className="mt-20 flex flex-wrap gap-7"> */}
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')