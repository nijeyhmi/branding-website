import Tab from "@/components/Tab";

const Shop = () => {
  return (
    <section className="w-full h-[calc(100dvh-80px)] bg-white flex items-center">
      <div className="flex flex-col w-full">
        <div className="flex justify-center w-full text-6xl mb-5">
          <span className="pr-5">[</span>Recommended
          <span className="pl-3 italic"> Products </span>
          <span className="pl-5">]</span>
        </div>
        <div className="text-center text-primary text-2xl">
          에즈윤이 직접 사용하고 추천하는 제품들
        </div>
        <Tab color="black" type="shop" />
      </div>
    </section>
  );
};

export default Shop;
