import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({ video }) => {
    const navigate = useNavigate()
    return (
        <div className='w-[300px]' onClick={() => navigate(`/categorie/${video.category}`)} >
            <img src={video.thumbnail} alt="" className='w-[100%] h-[80%] cursor-pointer' />
            <h1 className='text-gray-500 text-xl '>{video.category}</h1>
        </div>
    )
}

export default CategoryCard
