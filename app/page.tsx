"use client"

import VideoPlayer from "@/components/VideoPlayer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className=" text-xl text-blue-300  ">Video</h1>
      <VideoPlayer />
    </main>
  )
}
