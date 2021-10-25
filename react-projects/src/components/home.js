import { motion } from 'framer-motion'
import { BrowserRouter, Link } from 'react-router-dom'
import '../App.css'
import jupiter from '../images/jupiter.svg'
import planet1 from '../images/planet1.svg'
import planet2 from '../images/planet2.svg'
import planet3 from '../images/planet3.svg'

const Home = () => {
  return (
    <div className="container-fluid my-5">
      <motion.div
        className="column-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1.5 },
        }}
      >
        <motion.img
          alt="planet"
          src={planet2}
          className="planet2"
          whileDrag={{ scale: 1.1 }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ yoyo: Infinity, duration: 20 }}
        />
        <motion.img
          src={planet3}
          className="planet3"
          whileDrag={{ scale: 1.1 }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ yoyo: Infinity, duration: 20 }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="center-title text-center justify-content-center"
      >
        <motion.h1
          className="display-2"
          drag={true}
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        >
          WELCOME
        </motion.h1>
        <motion.h4
          className=""
          drag={true}
          dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
        >
          TO MY REACT PROJECTS
        </motion.h4>
        <br />
        <Link to="/project" className="text-decoration-none">
          <motion.button
            className="btn btn-outline-dark get-started-button"
            whileTap={{ scale: 0.8 }}
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        className="column-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
      >
        <motion.img
          src={jupiter}
          className="jupiter"
          whileDrag={{ scale: 1.1 }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ yoyo: Infinity, duration: 20 }}
        />
        <motion.img
          src={planet1}
          className="planet1"
          whileDrag={{ scale: 1.1 }}
          drag={true}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ yoyo: Infinity, duration: 20 }}
        />
      </motion.div>
    </div>
  )
}

export default Home
