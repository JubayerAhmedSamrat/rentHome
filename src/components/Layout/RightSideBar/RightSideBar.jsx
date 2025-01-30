import { Link } from "react-router-dom";


const RightSideBar = () => {
  return (
    <div className="m-4">
       <p className="text-indigo-600 text-2xl">Recent Visits</p>
        <Link><li><p>Home dhaka</p></li></Link>
        <Link><li><p>Home dhaka</p></li></Link>
        <Link><li><p>Home dhaka</p></li></Link>
        <Link><li><p>Home dhaka</p></li></Link>
    </div>
  );
};

export default RightSideBar;
