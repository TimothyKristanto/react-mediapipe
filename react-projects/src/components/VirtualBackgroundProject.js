import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Camera } from '@mediapipe/camera_utils'
import { SelfieSegmentation } from '@mediapipe/selfie_segmentation'

const VirtualBackgroundProject = () => {
  // * useRef usage
  //   const backButton = useRef(null)

  const videoElement = useRef()
  const canvasElement = useRef()

  const onResults = (results) => {
    const canvasCtx = canvasElement.current.getElement('2d')

    canvasCtx.save()
    canvasCtx.clearRect(
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    )
    canvasCtx.drawImage(
      results.segmentationMask,
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    )

    // Only overwrite existing pixels.
    canvasCtx.globalCompositeOperation = 'destination-atop'
    canvasCtx.fillStyle = '#00FF00'
    canvasCtx.fillRect(
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    )

    // Only overwrite missing pixels.
    canvasCtx.globalCompositeOperation = 'destination-atop'
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.current.width,
      canvasElement.current.height
    )

    canvasCtx.restore()
  }

  const selfieSegmentation = new SelfieSegmentation({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/${file}`
    },
  })
  selfieSegmentation.setOptions({
    modelSelection: 1,
  })
  selfieSegmentation.onResults(onResults)

  const camera = new Camera(videoElement.current, {
    onFrame: async () => {
      await selfieSegmentation.send({ image: videoElement.current })
    },
    width: 1280,
    height: 720,
  })
  camera.start()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Link to="/project" className="back-button">
        <motion.button className="btn btn-outline-dark">Back</motion.button>
      </Link>
      <div class="container">
        <video ref={videoElement} class="input_video"></video>
        <canvas
          ref={canvasElement}
          class="output_canvas"
          width="1280px"
          height="720px"
        ></canvas>
      </div>
    </motion.div>
  )
}

export default VirtualBackgroundProject
