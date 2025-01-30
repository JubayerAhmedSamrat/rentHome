import LatestNews from "../LatestNews/LatestNews";
import LeftSideBar from "../Layout/LeftSideBar/LeftSideBar";
import RightSideBar from "../Layout/RightSideBar/RightSideBar";


const Home = () => {
    return (
        <div className="font-[Poppins] text-xl max-w-5xl mx-auto mt-10 mb-10">
            This is home
            <LatestNews></LatestNews>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="border border-blue-500">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="border border-blue-500 col-span-2">
                    this is middle 
                </div>
                <div className="border border-blue-500">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;