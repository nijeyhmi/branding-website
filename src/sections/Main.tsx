const Main = () => {
  return (
    <section className="w-full h-[calc(100dvh-80px)] bg-white">
      <div className="mx-auto max-w-[calc(100dvw-250px)] h-full px-4 py-4">
        <div className="flex flex-col justify-between bg-[url('/img/mainImg.png')] bg-cover bg-no-repeat bg-center px-4 sm:px-6 md:px-12 py-6 md:py-8 lg:py-12 text-right h-full">
          <div>
            <p className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              The Journey to
              <br />
              My True Skin
              <br />
              <span className="text-primary">─ with AsYun</span>
            </p>
          </div>
          <div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Get Started →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
