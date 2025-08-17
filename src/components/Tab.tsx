import { useState } from "react";
import VideoList from "./ViedeoList";
import ShopList from "./ShopList";

const Tab = ({ color, type }: { color: string; type: "video" | "shop" }) => {
  const tabs = ["전체", "크림", "클렌저", "선크림"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderVideoContent = () => {
    return (
      <div>
        <VideoList type={activeTab} />
      </div>
    );
  };
  const renderShopContent = () => {
    return (
      <div>
        <ShopList category={activeTab} />
      </div>
    );
  };

  return (
    <div className="w-full mx-auto">
      <div className="hidden md:flex w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-1/4 mx-24 py-2 text-md sm:text-xl md:text-lg lg:text-xl transition-colors cursor-pointer text-${color} ${
              activeTab === tab ? `border-b-4 border-${color} font-bold` : ""
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
