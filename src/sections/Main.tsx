const Main = () => {
  return (
    <section className="w-full h-[calc(100dvh-80px)] bg-white">
      <div className="mx-32 my-20 h-full flex flex-col ">
        <div className="h-full w-full my-16 flex flex-col justify-between p-16 bg-[url('/img/mainImg.png')] bg-cover bg-no-repeat bg-center">
          <p className="text-black text-8xl text-right">
            The Journey to
            <br />
            My True Skin
            <br />
            <span className="text-primary">─ with AsYun</span>
          </p>
          <p className="text-6xl text-right">Get Started →</p>
        </div>
      </div>
    </section>
  );
};

export default Main;
