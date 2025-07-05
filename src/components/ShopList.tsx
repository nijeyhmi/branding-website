"use client";
import { useEffect, useState } from "react";

function chunkArrayWithPadding<T>(arr: T[], size: number): (T | null)[][] {
  const result: (T | null)[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    while (chunk.length < size) {
      chunk.push(null);
    }
    result.push(chunk);
  }
  return result;
}

const shopItemList = [
  {
    name: "에스네이처 스쿠알란 크림",
    type: "cream",
    img: "asnaturescualan.png",
    desc: "- 스쿠알란 150,000ppm<br />- 말라세지아 유발성분 0개<br />- 속당김 개선 → 수부지 추천<br />- 함습성분 매우 풍부",
  },
  {
    name: "달소수 egf 세라마이드 크림",
    type: "cream",
    img: "dalsosu.png",
    desc: "- 세라마이드 10000ppm<br />- 나이아신아마이드 2%+ 풍부한 항염성분<br />- 부드럽고 실키한데 피부에 잘 밀착되는 크림 타입",
  },
  {
    name: "유리아쥬 배리어덤 시카 젤 크림",
    type: "cream",
    img: "uriage.png",
    desc: "- 가볍고 촉촉 / 산틋한 젤타입<br />- 전성분 19개로 심플한 구성<br />- 지질,항염,함습 성분 균형있는 포뮬러<br />- 극지성, 극민감성 추천템",
  },
  {
    name: "마몽드 어메이징 딥민트 약알칼리성 클렌징폼",
    type: "cleansing",
    img: "mamondeamazing.png",
    desc: "- 민감피부에 자극될 수 있는 세정력 강한 4가지 성분 없음<br />- 저농도 BHA (0.5%)로 부담없이 각질케어<br />- 말라세지아 유발 성분 0개<br />- 세안 후 당김 없고 촉촉",
  },
  {
    name: "썬플랜 미니멀 버블 클렌저",
    type: "cleansing",
    img: "sunplancleanser.png",
    desc: "- 약산성 클렌징 워터<br />- 전성분 18개로 심플한 구성<br />- 부드러운 거품으로 바로 나옴, 쫀쫀하게 오래 유지됨<br />- 순한 자연유래 계면활성제<br />- 세안 후 당김 없고 촉촉",
  },
  {
    name: "더파이 시카베타 앰플투폼",
    type: "cream",
    img: "thepicica.png",
    desc: "- 약산성 클렌징젤<br />- 앰플처럼 묽어 자극 최소화<br />- 말라세지아 유발 성분 0개<br />- 순한 계면활성제 사용<br />- 미끄덩거림/당김 없고 깔끔 촉촉한 마무리",
  },
  {
    name: "유리아쥬 배리어덤 시카 젤 크림",
    type: "cream",
    img: "uriage.png",
    desc: "- 약산성 클렌징폼<br />- 부드러운 크림 제형에 보들보들한 거품으로 자극 적음<br />- 국내산 여주 쌀 추출물 → 피부 촉촉하게 케어<br />- 피부가 편안 촉촉한 마무리감",
  },
];

const ShopList = ({ type }: { type: string }) => {
  const [chunkSize, setChunkSize] = useState(5);
  const filteredShopItemList =
    type === "all"
      ? shopItemList
      : shopItemList.filter((item) => item.type === type);
  const slides = chunkArrayWithPadding(filteredShopItemList, chunkSize);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex === slides.length - 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };
  useEffect(() => {
    setCurrentIndex(0);
  }, [type]);

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(window.innerWidth < 768 ? 1 : 5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

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
            transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-5 px-2 my-2"
              style={{ width: `${100 / slides.length}%` }}
            >
              {slide.map((item, idx) =>
                item ? (
                  <div
                    key={idx}
                    className="relative bg-white outline-2 outline-primary h-[400px] group hover:bg-primary pt-4 overflow-hidden"
                  >
                    <div
                      className="w-full h-[150px] bg-contain bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(/img/shop/${item.img})`,
                      }}
                    >
                      <div className="text-sm sm:text-sm md:text-md lg:text-lg font-nanum mx-5 group-hover:text-white">
                        {`0${i * 5 + idx + 1}`}
                      </div>
                    </div>

                    <div className="mx-5 py-5 text-center relative z-10">
                      <span className="text-sm sm:text-sm md:text-md lg:text-md font-bold group-hover:text-white">
                        {item.name}
                      </span>
                      <p
                        className="mt-2 text-sm sm:text-sm md:text-md lg:text-md group-hover:text-white/60 relative z-10 h-full"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      ></p>

                      <div
                        className={`
      mt-4 
      flex justify-center
      md:absolute md:inset-0 md:items-center md:justify-center md:z-20 
      md:opacity-0 md:translate-y-2 
      md:group-hover:opacity-100 md:group-hover:translate-y-0 
      transition-all duration-300 ease-out
    `}
                      >
                        <button className="px-5 py-2 text-md font-nanum rounded-xl bg-primary text-white border border-white cursor-pointer">
                          SHOP NOW
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-2"></div>
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

export default ShopList;
