import React from "react";
import { useParams } from "react-router-dom";
import LeftSideMenu from "../components/LeftSideMenu";

import { videos } from "../db/Videos";
import VideoCard from "../components/VideoCard";

const Categorie = () => {
    const { category } = useParams();
    const categoryVideo = videos.filter((video) => video.category === category);
    return (
        <>
            <div className="home w-full h-full flex ">
                <div className="left w-[20%] h-[100%]]">
                    <LeftSideMenu />
                </div>

                <div className="right w-[80%] flex p-2 h-full flex-wrap justify-around items-start gap-2">
                    {categoryVideo.map((video) => (
                        <VideoCard video={video} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categorie;
