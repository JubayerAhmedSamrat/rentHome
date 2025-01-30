import LatestNews from "../LatestNews/LatestNews";
import LeftSideBar from "../Layout/LeftSideBar/LeftSideBar";
import RightSideBar from "../Layout/RightSideBar/RightSideBar";


const Home = () => {
    return (
        <div className="font-[Poppins] text-xl max-w-5xl mx-auto mt-10 mb-10">
            This is home
            <LatestNews></LatestNews>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="border border-blue-500 rounded-lg">
                    <div className>
                    <LeftSideBar></LeftSideBar>
                    </div>
                </div>
                <div className="border border-blue-500 col-span-2 rounded-lg">
                    <div className="m-4">
                    this is middle 
                    </div>
                </div>
                <div className="border border-blue-500 rounded-lg">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;