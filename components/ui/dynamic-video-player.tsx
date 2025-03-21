"use client"

import type React from "react"
import { useRef, useEffect, useState, useCallback } from "react"

interface DynamicVideoPlayerProps {
  src: string
  type?: string
}

const DynamicVideoPlayer: React.FC<DynamicVideoPlayerProps> = ({ src, type = "video/mp4" }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const enterFullscreen = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    if (container.requestFullscreen) {
      container.requestFullscreen()
    } else if ((container as any).webkitRequestFullscreen) {
      ;(container as any).webkitRequestFullscreen()
    } else if ((container as any).mozRequestFullScreen) {
      ;(container as any).mozRequestFullScreen()
    } else if ((container as any).msRequestFullscreen) {
      ;(container as any).msRequestFullscreen()
    }
  }, [])

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if ((document as any).webkitExitFullscreen) {
      ;(document as any).webkitExitFullscreen()
    } else if ((document as any).mozCancelFullScreen) {
      ;(document as any).mozCancelFullScreen()
    } else if ((document as any).msExitFullscreen) {
      ;(document as any).msExitFullscreen()
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      enterFullscreen()
    } else {
      exitFullscreen()
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen])

  const togglePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.log("Video play error:", error.message)
          // Don't update state on error to allow for retry
        })
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current

    if (!video || !container) return

    const handleFullscreenChange = () => {
      const isFullscreenNow =
        document.fullscreenElement === container ||
        (document as any).webkitFullscreenElement === container ||
        (document as any).mozFullScreenElement === container ||
        (document as any).msFullscreenElement === container

      setIsFullscreen(isFullscreenNow)

      if (isFullscreenNow) {
        video.style.transform = "scale(1.2)"
      } else {
        video.style.transform = "scale(1)"
      }
    }

    // Handle video events
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      // Loop the video when it ends
      video.currentTime = 0
      video.play().catch((error) => console.log("Video replay error:", error.message))
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
    document.addEventListener("mozfullscreenchange", handleFullscreenChange)
    document.addEventListener("MSFullscreenChange", handleFullscreenChange)

    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)
    video.addEventListener("ended", handleEnded)

    // Try to play the video with proper error handling
    const playVideo = async () => {
      try {
        // Only attempt to play if the video is not already playing
        if (video.paused) {
          await video.play()
        }
      } catch (error) {
        console.log("Initial autoplay failed:", error)
        // We'll let the user click to play instead
      }
    }

    // Attempt to play the video
    playVideo()

    // Cleanup event listeners
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange)
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange)
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange)

      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 rounded-2xl"
        loop
        muted
        playsInline
        preload="auto"
        poster={`${src.split(".")[0]}.jpg`} // Optional: use a poster image with same name but jpg extension
        onDoubleClick={toggleFullscreen}
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>

      {/* Optional play button overlay that shows when video is paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300">
          <button
            className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="black" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default DynamicVideoPlayer

