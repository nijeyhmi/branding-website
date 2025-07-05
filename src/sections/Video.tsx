"use client";
import Tab from "../components/Tab";

const Video = ({ refItem }: { refItem: React.RefObject<HTMLDivElement> }) => {
  return (
    <div className="w-full h-[calc(100dvh-60px)] bg-primary" ref={refItem}>
      <section className="h-full">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="flex justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl m-5">
            <span className="pr-5">[</span>Checkout
            <span className="pl-3 italic"> My Latest Videos </span>
            <span className="pl-5">]</span>
          </div>
          <div className="mt-5">
            <Tab color="white" type="video" />
          </div>
          <div className="flex justify-center w-full text-white text-sm sm:text-sm md:text-md lg:text-lg">
            <a href="" className="underline">
              More Videos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
