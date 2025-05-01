import bgVideo from "../../assets/Food_Video_1.mp4";
import Card from "../common/Card";

const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]"></div>
        {/* Foreground content */}
        <div className="flex flex-col items-center justify-center gap-5 h-full text-white z-10 relative">
          <h1 className="text-2xl md:text-4xltext-center font-roboto">
            Delivering Food Delivering Happiness
          </h1>
          <h1 className="text-xl mt-7 md:text-4xl mt-5 text-center">Get Flat 30% off on All Food items</h1>
          <button className=" bg-[#302c2c99] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  cursor-pointer p-2 rounded-md">Checkout All trending Items</button>
        </div>
      </div>
      <h2 className="text-center mt-3 text-[30px] text-bold">Bestselling Food Items</h2>
      <div className="mt-10 mx-3 flex items-center flex-wrap justify-center gap-4">

      <Card/>
      <Card/>

      </div>

    </>
  );
};

export default Home;
