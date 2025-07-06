import SlideLine from "@/components/SlideLine";
// import Typing from "@/components/Typing";

const Main = () => {
  const lines: {
    text: string;
    from: "right" | "left";
    isHighlight: boolean;
  }[] = [
    { text: "The Journey to", from: "right", isHighlight: false },
    { text: "My True Skin", from: "left", isHighlight: false },
    { text: "─ with AsYun", from: "right", isHighlight: true },
  ];
  return (
    <section className="w-full h-[calc(100dvh-50px)] md:h-[calc(100dvh-60px)] bg-white">
      <div className="w-full h-full px-0 md:px-4 md:py-4 md:max-w-[calc(100dvw-250px)] md:mx-auto">
        <div
          className="
        flex flex-col justify-between
        bg-[url('/img/mainImg.png')] bg-cover bg-no-repeat md:bg-center bg-[position:40%_center]
        px-4 sm:px-6 md:px-12 py-6 md:py-8 lg:py-12
        text-right h-full
      "
        >
          <div>
            {/* <Typing
              lines={["The Journey to", "My True Skin", "─ with AsYun"]}
              speed={100}
              delay={800}
              highlightLine={2}
            /> */}
            {lines.map((line, i) => (
              <SlideLine
                text={line.text}
                from={line.from}
                delay={i * 500 + 100}
                isHighlight={line.isHighlight}
              />
            ))}
          </div>
          <div>
            <button className="group relative inline-block text-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <span className="relative z-10">
                <a
                  href="https://www.youtube.com/@%EC%97%90%EC%A6%88%EC%9C%A4Asyun-w7d"
                  className="inline-block group align-middle"
                >
                  Get Started
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </span>
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
