import React from 'react'
import { useNavigate } from 'react-router-dom'

const LeftSideMenu = () => {
    const navigate = useNavigate()
    return (
        <div className=' w-[100%] h-full flex flex-col justify-center gap-5 items-start px-5 text-2xl font-semibold'>
            <h1 className='cursor-pointer hover:bg-slate-300 p-1 rounded-sm' onClick={() => navigate('/')}>Home</h1>
            <h1 className='cursor-pointer hover:bg-slate-300 p-1 rounded-sm' onClick={() => navigate('/explore')}>Explore</h1>
            <h1 className='cursor-pointer hover:bg-slate-300 p-1 rounded-sm' onClick={() => navigate('/playlist')}>Playlist</h1>
            <h1 className='cursor-pointer hover:bg-slate-300 p-1 rounded-sm' onClick={() => navigate('/watchlater')}>watchlater</h1>
        </div>
    )
}

export default LeftSideMenu
