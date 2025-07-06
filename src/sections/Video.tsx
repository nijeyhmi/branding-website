"use client";
import Tab from "../components/Tab";

const Video = ({
  refItem,
}: {
  refItem: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      className="w-full h-[calc(100dvh-50px)] md:h-[calc(100dvh-60px)] bg-primary"
      ref={refItem}
    >
      <section className="h-full">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="flex justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl m-5">
            <span className="pr-2 sm:pr-5">[</span>Checkout
            <span className="pl-1 sm:pl-3 italic"> My Latest Videos </span>
            <span className="pl-2 sm:pl-5">]</span>
          </div>
          <div className="mt-5">
            <Tab color="white" type="video" />
          </div>
          <div className="flex justify-center w-full text-white text-sm sm:text-sm md:text-md lg:text-lg">
            <a
              href="https://www.youtube.com/@%EC%97%90%EC%A6%88%EC%9C%A4Asyun-w7d"
              className="underline"
            >
              More Videos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
