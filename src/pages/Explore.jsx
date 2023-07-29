import React from "react";
import { useParams } from "react-router-dom";
import LeftSideMenu from "../components/LeftSideMenu";

import { videos } from "../db/Videos";
import VideoCard from "../components/VideoCard";
import SearchBar from "../components/SearchBar";

const Explore = () => {
    return (
        <>
            <div className="home w-full h-full flex ">

                <div className=" sticky top-2 flex justify-start left w-[20%]">
                    <LeftSideMenu />
                </div>

                <div className="right w-[80%] flex p-2 h-full flex-wrap justify-around items-start gap-2">
                    <div className="div w-[100%]">
                        <SearchBar />
                    </div>
                    <div className="div w-[100%] flex flex-wrap justify-between items-center gap-5">
                        {videos.map((video) => (
                            <VideoCard video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explore;
