import { motion } from 'framer-motion'
import '../App.css'
import jupiter from '../images/jupiter.svg'
import planet1 from '../images/planet1.svg'
import planet2 from '../images/planet2.svg'
import planet3 from '../images/planet3.svg'

const Home = () => {
  return (
    <div className="container-fluid my-5">
      <div className="column-left">
        <motion.img
          alt="planet"
          src={planet2}
          className="planet2"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
        />
        <motion.img
          src={planet3}
          className="planet3"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
      </div>
      <div className="center-title text-center">
        <motion.h1
          className="display-2"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        >
          WELCOME
        </motion.h1>
        <motion.h4
          className=""
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        >
          TO MY REACT PROJECTS
        </motion.h4>
      </div>
      <div className="column-right">
        <motion.img
          src={jupiter}
          className="jupiter"
          whileTap={{ scale: 0.9 }}
          drag={true}
          initial={{ opacity: 0, x: 50 }}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
        />
        <motion.img
          src={planet1}
          className="planet1"
          whileTap={{ scale: 0.9 }}
          drag={true}
          initial={{ opacity: 0, y: 100 }}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
        />
      </div>
    </div>
  )
}

export default Home
