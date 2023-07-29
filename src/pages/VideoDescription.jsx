import React from 'react'
import LeftSideMenu from '../components/LeftSideMenu'
import { useNavigate, useParams } from 'react-router-dom'
import { videos } from '../db/Videos'

const VideoDescription = () => {
    const { videoId } = useParams()
    const video = videos.find((video) => video._id === Number(videoId))

    console.log(video)
    return (
        <div className='w-full min-h-full'>
            <div className="left w-[20%]">
                <LeftSideMenu />
            </div>

            <div className="mid w-[60%]">
                <iframe width="560" height="315" src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='w-[100%] h-[400px]'></iframe>
            </div>

            <div className="right w-[20%]">


            </div>

        </div>
    )
}

export default VideoDescription
