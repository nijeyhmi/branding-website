import { useState } from "react";

const Tab = ({ color, type }: { color: string; type: "video" | "shop" }) => {
  const tabs = ["전체", "크림", "클렌저", "선크림"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderVideoContent = () => {
    switch (activeTab) {
      case "전체":
        return (
          <div className="flex">
            <div className="m-2 p-2 bg-white">
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="https://i.ytimg.com/vi/8NL6bB_UOf0/hqdefault.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="m-2 p-2 bg-white">
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="https://i.ytimg.com/vi/SDk2rWlAoJc/hqdefault.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="m-2 p-2 bg-white">
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="https://i.ytimg.com/vi/LDJ1Nt5gcR8/hqdefault.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span></span>
              </div>
            </div>
            <div className="m-2 p-2 bg-white">
              <div className="w-full aspect-video overflow-hidden">
                <img
                  src="https://i.ytimg.com/vi/biRAo_91AMo/hqdefault.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span></span>
              </div>
            </div>
          </div>
        );
      case "크림":
        return <div>크림</div>;
      case "클렌저":
        return <div>클렌저</div>;
      case "선크림":
        return <div>선크림</div>;
      default:
        return null;
    }
  };
  const renderShopContent = () => {
    switch (activeTab) {
      case "전체":
        return (
          <div className="flex justify-center ">
            {new Array(5).fill(undefined).map((item, idx) => (
              <div className="bg-white border-2 border-primary h-[400px] w-[370px] group hover:bg-primary pt-4">
                <div className="w-full h-[150px] bg-contain bg-center bg-no-repeat bg-[url('/img/shop/asnaturescualan.png')]">
                  <div className="text-sm sm:text-sm md:text-md lg:text-lg font-nanum mx-5 group-hover:text-white">
                    {`0${idx + 1}`}
                  </div>
                </div>
                <div className="mx-5 py-5 text-center">
                  <span className="text-sm sm:text-sm md:text-md lg:text-md font-bold group-hover:text-white">
                    에스네이처 스쿠알란 크림
                  </span>
                  <p className="mt-2 text-sm sm:text-sm md:text-md lg:text-md group-hover:text-white">
                    - 스쿠알란 150,000ppm
                    <br />
                    - 말라세지아 유발성분 0개
                    <br />
                    - 속당김 개선 → 수부지 추천
                    <br />- 함습성분 매우 풍부
                  </p>
                </div>
                <div className="mx-8">
                  <button className="px-5 py-2 text-sm sm:text-sm md:text-md lg:text-md font-nanum w-full rounded-xl bg-primary text-white opacity-0 group-hover:opacity-100 transition border border-white">
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        );
      case "크림":
        return <div>크림</div>;
      case "클렌저":
        return <div>클렌저</div>;
      case "선크림":
        return <div>선크림</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-1/4 mx-24 py-2 text-md sm:text-xl md:text-lg lg:text-xl font-light transition-colors cursor-pointer text-${color} ${
              activeTab === tab ? `border-b-4 border-${color}` : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4">
        {type === "video" ? renderVideoContent() : renderShopContent()}
      </div>
    </div>
  );
};

export default Tab;
