"use client";
import Tab from "@/components/Tab";

const Shop = ({
  refItem,
}: {
  refItem: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section
      className="w-full h-[calc(100dvh-50px)] md:h-[calc(100dvh-60px)] bg-white"
      ref={refItem}
    >
      <div className="flex flex-col justify-center h-full items-center">
        <div className="mt-5 text-center w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2">
          <span className="pr-3 sm:pr-5">[</span>Recommended
          <span className="pl-1 sm:pl-3 italic"> Products</span>
          <span className="pl-3 sm:pl-5">]</span>
        </div>
        <div className="text-center text-primary text-sm sm:text-sm md:text-md lg:text-lg mb-3 sm:mb-12">
          에즈윤이 직접 사용하고 추천하는 제품들
        </div>
        <Tab color="black" type="shop" />
      </div>
    </section>
  );
};

export default Shop;
