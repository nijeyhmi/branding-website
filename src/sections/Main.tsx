import Typing from "@/components/Typing";

const Main = () => {
  return (
    <section className="w-full h-[calc(100dvh-80px)] bg-white">
      <div className="mx-auto max-w-[calc(100dvw-250px)] h-full px-4 py-4">
        <div className="flex flex-col justify-between bg-[url('/img/mainImg.png')] bg-cover bg-no-repeat bg-center px-4 sm:px-6 md:px-12 py-6 md:py-8 lg:py-12 text-right h-full">
          <div>
            <div className="">
              <Typing
                lines={["The Journey to", "My True Skin", "─ with AsYun"]}
                speed={100}
                delay={800}
                highlightLine={2}
              />
            </div>
          </div>
          <div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <a
                href="https://www.youtube.com/@%EC%97%90%EC%A6%88%EC%9C%A4Asyun-w7d"
                className="inline-block group align-middle"
              >
                Get Started
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
