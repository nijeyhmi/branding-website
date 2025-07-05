"use client";
import { useEffect, useState } from "react";

type VideoType = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: { url: string };
    };
  };
  statistics: {
    viewCount: string;
  };
};

const YOUTUBE_VIDEO_IDS = [
  "8NL6bB_UOf0",
  "biRAo_91AMo",
  "LDJ1Nt5gcR8",
  "j7c6Vqemw70",
];

function chunkArrayWithPadding<T>(arr: T[], size: number): (T | null)[][] {
  const result: (T | null)[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk: (T | null)[] = arr.slice(i, i + size);
    while (chunk.length < size) {
      chunk.push(null);
    }
    result.push(chunk);
  }
  return result;
}

const VideoList = () => {
  const [chunkSize, setChunkSize] = useState(3);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const ids = YOUTUBE_VIDEO_IDS.join(",");
    fetch(`/api/youtube/videos?ids=${ids}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const slides: (VideoType | null)[][] = chunkArrayWithPadding(
    videos,
    chunkSize
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === slides.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  return (
    <div className="relative w-full overflow-hidden px-6">
      <button
        onClick={isPrevDisabled ? undefined : handlePrev}
        className={`
          absolute top-1/2 -translate-y-1/2 left-0 z-10 px-3 py-2 bg-gray-200 rounded-full shadow cursor-pointer
          transition-opacity duration-200
          ${
            isPrevDisabled
              ? "opacity-20 cursor-not-allowed"
              : "opacity-70 hover:opacity-100"
          }
        `}
      >
        ←
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-4 px-2"
              style={{ width: `${100 / slides.length}` }}
            >
              {slide.map((video, idx) =>
                video ? (
                  <div key={video.id} className="bg-white p-2 rounded shadow">
                    <div className="w-full aspect-video overflow-hidden">
                      <img
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <p className="font-semibold line-clamp-2">
                        {video.snippet.title}
                      </p>
                      <p className="text-sm text-gray-600 font-nanum">
                        {Number(video.statistics.viewCount).toLocaleString()}{" "}
                        views
                      </p>
                    </div>
                    <div className="mt-2 mb-3 text-center text-primary font-bold cursor-pointer">
                      <button className="relative py-1 text-md font-bold text-primary after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 after:ease-out hover:after:left-0 hover:after:w-full cursor-pointer after:bg-primary">
                        WATCH NOW
                      </button>
                    </div>
                  </div>
                ) : (
                  <div key={`placeholder-${idx}`} className="p-2" />
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={isNextDisabled ? undefined : handleNext}
        className={`
          absolute top-1/2 -translate-y-1/2 right-0 z-10 px-3 py-2 bg-gray-200 rounded-full shadow cursor-pointer
          transition-opacity duration-200
          ${
            isNextDisabled
              ? "opacity-20 cursor-not-allowed"
              : "opacity-70 hover:opacity-100"
          }
        `}
      >
        →
      </button>
    </div>
  );
};

export default VideoList;
