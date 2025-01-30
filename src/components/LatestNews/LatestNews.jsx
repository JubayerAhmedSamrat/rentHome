import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="py-4 border border-black bg-gray-700 text-white my-10">
      <Marquee pauseOnHover={true}>
        In 2025 the government plans 4,000 rental flats to address housing
        shortages.
      </Marquee>
    </div>
  );
};

export default LatestNews;
