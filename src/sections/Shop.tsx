"use client";
import Tab from "@/components/Tab";

const Shop = ({ refItem }: { refItem: React.RefObject<HTMLDivElement> }) => {
  return (
    <section className="w-full h-[calc(100dvh-60px)] bg-white" ref={refItem}>
      <div className="flex flex-col justify-center h-full items-center">
        <div className="mt-5 text-center w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2">
          <span className="pr-5">[</span>Recommended
          <span className="pl-3 italic"> Products</span>
          <span className="pl-5">]</span>
        </div>
        <div className="text-center text-primary text-sm sm:text-sm md:text-md lg:text-lg mb-12">
          에즈윤이 직접 사용하고 추천하는 제품들
        </div>
        <Tab color="black" type="shop" />
      </div>
    </section>
  );
};

export default Shop;
