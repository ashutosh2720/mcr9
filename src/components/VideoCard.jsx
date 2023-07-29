import React from 'react'
import { useNavigate } from 'react-router-dom'

const VideoCard = ({ video }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[300px]'  >
            <img src={video.thumbnail} alt="" className='w-[100%] h-[50%] cursor-pointer' onClick={() => navigate(`/description/${video._id}`)} />
            <h1 className='font-semibold text-xl '>{video.title}</h1>
            <h1 className='font-semibold text-xl '>{video.category}</h1>
            <h1 className='text-gray-600 font-semibold text-sm '>{video.views} views | {video.creator}</h1>
        </div>
    )
}

export default VideoCard
