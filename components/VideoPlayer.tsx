import { useState } from 'react'

export default function VideoPlayer() {
  const [isStreaming, setIsStreaming] = useState<boolean>(false)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(true)

  const handleOnClick = async () => {
    if (!isStreaming) {
      setIsStreaming(true)
      setIsLoaded(false)
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      setIsLoaded(true)
      setStream(stream)

      const video = document.querySelector('video')
      if (video) {
        video.srcObject = stream
      }
    } else {
      console.log(stream)
      stream?.getTracks().forEach((track) => track.stop())
      setStream(null)
      console.log(stream)

      const video = document.querySelector('video')
      if (video) {
        video.srcObject = null
      }

      setIsStreaming(false)
    }
  }

  return (
    <div className="flex flex-col">
      <video autoPlay muted playsInline className={`h-36 w-48 border-4 border-blue-400 ${!isStreaming && "bg-slate-500"}`} />
      <button
        className={`${!isLoaded && "pointer-events-none cursor-not-allowed text-gray-600"} select-none`}
        onClick={handleOnClick}
      >
        {isStreaming ? "Stop" : "Start"}
      </button>
    </div>
  )
}