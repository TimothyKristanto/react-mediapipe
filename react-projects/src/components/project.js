import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackgroundIcon from './BackgroundIcon'

// TODO: use react hook useRef (function like documentById)

// TODO: move this component to another file

const Project = () => {
  const rows = Array.from(Array(20), (_, i) => <BackgroundIcon key={i} />)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <section className="align-items-center">
        <Link to="/" className="back-button">
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="btn btn-outline-dark"
          >
            Back
          </motion.button>
        </Link>
        <motion.span
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="display-4 title"
        >
          {' '}
          <span>My Projects</span>{' '}
        </motion.span>
        {rows}
      </section>
      <div className="black-box-port-left">
        <div className="black-rounded-box-left"> </div>
        <h4 className="black-box-text-left">Selfie Segmentation</h4>
        <Link to="/project/vb">
          <motion.button
            className="black-box-child-left btn btn-outline-dark"
            // initial={{ translateX: -100 }}
            // animate={{ translateX: 0 }}
            // transition={{ duration: 1.5 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
          >
            Virtual Background
          </motion.button>
        </Link>
        <Link to="#">
          <motion.button
            className="black-box-child-left btn btn-outline-dark"
            // initial={{ translateX: -100 }}
            // animate={{ translateX: 0 }}
            // transition={{ duration: 1.5 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
          >
            Etc
          </motion.button>
        </Link>
      </div>
      <div className="black-box-port-left">
        <div className="black-rounded-box-left"> </div>
        <h4 className="black-box-text-left">Etc</h4>
        <Link to="#">
          <motion.button
            className="black-box-child-left btn btn-outline-dark"
            // initial={{ translateX: -100 }}
            // animate={{ translateX: 0 }}
            // transition={{ duration: 1.5 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
          >
            Etc
          </motion.button>
        </Link>
        <Link to="#">
          <motion.button
            className="black-box-child-left btn btn-outline-dark"
            // initial={{ translateX: -100 }}
            // animate={{ translateX: 0 }}
            // transition={{ duration: 1.5 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1 }}
          >
            Etc
          </motion.button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Project
