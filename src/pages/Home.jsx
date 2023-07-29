import React from "react";
import LeftSideMenu from "../components/LeftSideMenu";
import { categories } from "../db/categories";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
    return (
        <>
            <div className="home w-full h-full flex ">
                <div className="left w-[20%] h-[100%]]">
                    <LeftSideMenu />
                </div>


                <div className="right w-[80%] flex p-2 h-full flex-wrap justify-around items-start gap-2">

                    {
                        categories.map((video) =>
                            <CategoryCard video={video} />

                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Home;
