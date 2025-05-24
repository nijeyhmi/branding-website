import { useState } from "react";

const Tab = ({ color, type }: { color: string; type: "video" | "shop" }) => {
  const tabs = ["전체", "크림", "클렌저", "선크림"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderVideoContent = () => {
    switch (activeTab) {
      case "전체":
        return (
          <div className="flex">
            <div className="m-3 p-5 bg-white">
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
            <div className="m-3 p-5 bg-white">
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
            <div className="m-3 p-5 bg-white">
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
            <div className="m-3 p-5 bg-white">
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
            <div className="bg-white border-2 border-primary h-[650px] w-[400px] group hover:bg-primary">
              <div className="w-full h-[300px] bg-contain bg-center bg-no-repeat bg-[url('/img/shop/asnaturescualan.png')]">
                <div className="text-3xl font-nanum mx-5 pt-5 group-hover:text-white">
                  01
                </div>
              </div>
              <div className="mx-5 py-5 text-center">
                <span className="text-2xl group-hover:text-white">
                  에스네이처 스쿠알란 크림
                </span>
                <p className="mt-5 text-xl group-hover:text-white">
                  - 스쿠알란 150,000ppm
                  <br />
                  - 말라세지아 유발성분 0개
                  <br />
                  - 속당김 개선 → 수부지 추천
                  <br />- 함습성분 매우 풍부
                </p>
              </div>
              <div className="mx-14">
                <button className="px-7 py-2 text-lg font-nanum w-full rounded-xl bg-primary text-white opacity-0 group-hover:opacity-100 transition border border-white">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="bg-white border-2 border-primary h-[650px] w-[400px] group hover:bg-primary">
              <div className="w-full h-[300px] bg-contain bg-center bg-no-repeat bg-[url('/img/shop/dalsosu.png')]">
                <div className="text-3xl font-nanum mx-5 pt-5 group-hover:text-white">
                  02
                </div>
              </div>
              <div className="mx-5 py-5 text-center">
                <span className="text-2xl group-hover:text-white">
                  달소수 egf 세라마이드 크림
                </span>
                <p className="mt-5 text-xl group-hover:text-white">
                  -세라마이드 10000ppm
                  <br />
                  -나이아신아마이드 2%
                  <br />
                  + 풍부한 항염성분
                  <br />
                  -부드럽고 실키한데 피부에
                  <br />잘 밀착되는 크림 타입
                </p>
              </div>
              <div className="mx-14">
                <button className="px-7 py-2 text-lg font-nanum w-full rounded-xl bg-primary text-white opacity-0 group-hover:opacity-100 transition border border-white">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="bg-white border-2 border-primary h-[650px] w-[400px] group hover:bg-primary">
              <div className="w-full h-[300px] bg-contain bg-center bg-no-repeat bg-[url('/img/shop/uriage.png')]">
                <div className="text-3xl font-nanum mx-5 pt-5 group-hover:text-white">
                  03
                </div>
              </div>
              <div className="mx-5 py-5 text-center">
                <span className="text-2xl group-hover:text-white">
                  유리아쥬 배리어덤 시카 젤 크림
                </span>
                <p className="mt-5 text-xl group-hover:text-white">
                  -가볍고 촉촉 / 산틋한 젤타입
                  <br />
                  -전성분 19개로 심플한 구성
                  <br />
                  -지질,항염,함습 성분
                  <br />
                  균형있는 포뮬러
                  <br />
                  -극지성, 극민감성 추천템
                </p>
              </div>
              <div className="mx-14">
                <button className="px-7 py-2 text-lg font-nanum w-full rounded-xl bg-primary text-white opacity-0 group-hover:opacity-100 transition border border-white">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="bg-white border-2 border-primary h-[650px] w-[400px] group hover:bg-primary">
              <div className="w-full h-[300px] bg-contain bg-center bg-no-repeat bg-[url('/img/shop/mamondeamazing.png')]">
                <div className="text-3xl font-nanum mx-5 pt-5 group-hover:text-white">
                  04
                </div>
              </div>
              <div className="mx-5 py-5 text-center">
                <span className="text-2xl group-hover:text-white">
                  마몽드 어메이징 딥민트 약알칼리성 클렌징폼
                </span>
                <p className="mt-5 text-xl group-hover:text-white">
                  - 민감피부에 자극될 수 있는
                  <br />
                  세정력 강한 4가지 성분 없음
                  <br />
                  - 저농도 BHA (0.5%)로
                  <br />
                  부담없이 각질케어
                  <br />
                  - 말라세지아 유발 성분0개
                  <br />- 세안 후 당김 없고 촉촉
                </p>
              </div>
              <div className="mx-14">
                <button className="px-7 py-2 text-lg font-nanum w-full rounded-xl bg-primary text-white opacity-0 group-hover:opacity-100 transition border border-white">
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="bg-white border-2 border-primary h-[650px] w-[400px] group hover:bg-primary">
              <div className="w-full h-[300px] bg-contain bg-center bg-no-repeat bg-[url('/img/shop/asnaturescualan.png')]">
                <div className="text-3xl font-nanum mx-5 pt-5 group-hover:text-white">
                  01
                </div>
              </div>
              <div className="mx-5 py-5 text-center">
                <span className="text-2xl group-hover:text-white">
                  에스네이처 스쿠알란 크림
                </span>
                <p className="mt-5 text-xl group-hover:text-white">
                  - 스쿠알란 150,000ppm
                  <br />
                  - 말라세지아 유발성분 0개
                  <br />
                  - 속당김 개선 → 수부지 추천
                  <br />- 함습성분 매우 풍부
                </p>
              </div>
              <div className="mx-14">
                <button className="px-7 py-2 text-lg font-nanum w-full rounded-xl bg-primary text-white opacity-0 group-hover:opacity-100 transition border border-white">
                  SHOP NOW
                </button>
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

  return (
    <div className="w-full max-w-[80%] mx-auto mt-14">
      <div className="flex w-full">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-1/4 mx-24 py-2 text-3xl font-light transition-colors cursor-pointer text-${color} ${
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
