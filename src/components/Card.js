import React, { useRef } from "react"
import {
  FiPlay,
  FiPause,
  FiSquare,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi"

const Card = ({ src, description, avatar, name }) => {
  const vidRef = useRef(null)

  const playBtn = () => {
    vidRef.current.play()
  }
  const pauseBtn = () => {
    vidRef.current.pause()
  }

  const bwdBtn = () => {
    vidRef.current.currentTime -= 5
    vidRef.current.play()
  }
  const fwdBtn = () => {
    vidRef.current.currentTime += 5
    vidRef.current.play()
  }

  const stopBtn = () => {
    vidRef.current.pause()
    vidRef.current.currentTime = 0
  }

  return (
    <div>
      <div className="rounded border-white border-2">
        <video
          ref={vidRef}
          src={src}
          type="video/mp4"
          className="w-full h-64"
        >
          {/* <source src={src} type="video/mp4" /> */}
        </video>
      </div>
      {/* <div className="flex items-center justify-center space-x-3 my-3">
        <button onClick={playBtn}>
          <FiPlay />
        </button>
        <button onClick={bwdBtn}>
          <FiSkipBack />
        </button>

        <button onClick={pauseBtn}>
          <FiPause />
        </button>
        <button onClick={stopBtn}>
          <FiSquare />
        </button>
        <button onClick={fwdBtn}>
          <FiSkipForward />
        </button>
      </div> */}
      <div className="flex mt-3 space-x-3 h-24">
        <div className="px-2 flex items-center">
          <img src={avatar} alt="" className="rounded-full w-16 object-cover"  />
        </div>
        <div className=" flex flex-col px-2">
          <p className="text-semibold text-sm">{name}</p>
          <p className="text-light text-sm mt-4">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
