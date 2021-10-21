import jupiter from '../images/jupiter.svg'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Image = styled(motion.img)`
  position: absolute;
`

const Project = () => {
  return (
    <div className="container my-5">
      <h1>This is the project page</h1>
    </div>
  )
}

export default Project
