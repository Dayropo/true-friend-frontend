import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Grid } from "@material-ui/core"
import io from "socket.io-client"
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward,
  FaSquare,
} from "react-icons/fa"
import { FiUser } from "react-icons/fi"

export default function Tricks() {
  const socket = io("https://true-friend-backend-2.herokuapp.com")

  const [state, setState] = useState({ comment: "" })
  const [comments, setComments] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [info, setInfo] = useState(null)

  const vidRef = useRef(null)

  const playBtn = () => {
    vidRef.current.play()
    setIsPlaying(true)
  }
  const pauseBtn = () => {
    vidRef.current.pause()
    setIsPlaying(false)
  }

  const bwdBtn = () => {
    vidRef.current.currentTime -= 5
    vidRef.current.play()
    setIsPlaying(true)
  }
  const fwdBtn = () => {
    vidRef.current.currentTime += 5
    vidRef.current.play()
    setIsPlaying(true)
  }

  const stopBtn = () => {
    vidRef.current.pause()
    vidRef.current.currentTime = 0
    setIsPlaying(false)
  }

  useEffect(() => {
    const url = "http://localhost:3001"

    const fetchData = () => {
      fetch(`${url}/api`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setInfo(data)
        })
    }

    fetchData()
  }, [])

  useEffect(() => {
    socket.on("comment", ({ comment }) => {
      setComments([...comments, { comment }])
      console.log(comments)
    })
  }, [socket, comments])

  const onTextChange = e => {
    setState({ [e.target.name]: e.target.value })
  }

  const onCommentSubmit = e => {
    e.preventDefault()
    const { comment } = state
    socket.emit("comment", { comment })
    setState({ comment: "" })
  }

  return (
    <div className="m-0 min-h-screen font-poppins">
      {/** navbar */}
      <nav className="flex items-center justify-between md:px-16 py-4 md:text-xl shadow-md">
        <Link to="/">LOGO</Link>
        <div className="flex items-center space-x-3">
          <Link to="/tricks">Tricks</Link>
          <a href="#contact">Contact Us</a>
        </div>
      </nav>

      {/** videos */}
      <div>
        <Grid container spacing={2}>
          {/**video */}
          <Grid item xs={12} md={8}>
            <div className="px-10 py-6">
              <div className="w-full h-[66vh] relative">
                {info && (
                  <video
                    ref={vidRef}
                    src={info[0].url}
                    className="w-full h-full bg-black"
                  />
                )}
                <div className="flex text-white absolute left-4 bottom-2 space-x-4">
                  {!isPlaying ? (
                    <span className="p-4 bg-">
                      <FaPlay
                        size={24}
                        className="cursor-pointer"
                        onClick={playBtn}
                      />
                    </span>
                  ) : (
                    <span className="p-4 bg-">
                      <FaPause
                        size={24}
                        className="cursor-pointer"
                        onClick={pauseBtn}
                      />
                    </span>
                  )}

                  <span className="p-4">
                    <FaBackward
                      size={24}
                      className="cursor-pointer"
                      onClick={bwdBtn}
                    />
                  </span>
                  <span className="p-4">
                    <FaForward
                      size={24}
                      className="cursor-pointer"
                      onClick={fwdBtn}
                    />
                  </span>
                  <span className="p-4">
                    <FaSquare
                      size={24}
                      className="cursor-pointer"
                      onClick={stopBtn}
                    />
                  </span>
                </div>
              </div>
              {info && <h3 className="mt-6 text-lg">{info[0].snippet}</h3>}
              {info && <p className="text-sm mt-4">{info[0].description}</p>}
            </div>
          </Grid>

          {/**comments */}
          <Grid item xs={12} md={4}>
            <div className="py-3 px-4">
              <h3>Comments</h3>

              <form
                onSubmit={onCommentSubmit}
                className="flex space-x-3 w-full mt-6"
              >
                <div className="rounded-full p-2 bg-gray-200 flex items-center justify-center">
                  <FiUser size={24} />
                </div>
                <input
                  type="text"
                  name="comment"
                  autoComplete="off"
                  placeholder="Add Comment"
                  className="w-3/4 border-gray-200 border-b text-sm placeholder:text-sm px-4 py-2 focus-within:border-b-2 focus:border-black"
                  onChange={e => onTextChange(e)}
                  value={state.comment}
                />
                <input
                  type="submit"
                  value="Send"
                  className="bg-[#000033] py-2 px-8 rounded-lg text-sm text-white"
                />
              </form>

              {comments.map(({ comment }, index) => (
                <div key={index}>
                  <div className="flex space-x-3 mt-6">
                    <div className="rounded-full p-2 bg-gray-200 flex items-center justify-center">
                      <FiUser size={24} />
                    </div>
                    <p className="w-full">{comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
