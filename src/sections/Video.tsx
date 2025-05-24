import Tab from "../components/Tab";

const Video = () => {
  return (
    <section className="w-full h-[calc(100dvh-80px)] bg-primary flex items-center">
      <div className="flex flex-col w-full">
        <div className="flex justify-center w-full text-white text-7xl">
          <span className="pr-5">[</span>Checkout
          <span className="pl-3 italic"> My Latest Videos </span>
          <span className="pl-5">]</span>
        </div>
        <div>
          <Tab color="white" type="video" />
        </div>
        <div className="flex justify-center w-full text-white text-3xl">
          <a href="" className="underline">
            More Videos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Video;
