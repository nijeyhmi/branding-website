const Contact = () => {
  return (
    <div className="bg-[url('/img/contactImg.png')] bg-cover bg-center w-full h-[calc(100dvh-80px)]">
      <section className="w-full h-full">
        <div className="w-full h-full flex">
          <div className="w-[55%] h-full py-56">
            <div className="h-full w-full flex flex-col justify-center items-center ">
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary">
                Contact Me
              </div>
              <p className="text-white text-center mt-10 text-md sm:text-xl md:text-lg lg:text-xl font-nanum">
                <span className="block">Let's Work Together</span>
                <span className="block pt-3">And Create Something Great</span>
              </p>
            </div>
          </div>
          <div className="w-[45%] h-full ml-24">
            <ul className="h-full flex flex-col justify-center items-start text-xl pl-24 leading-10">
              <li className="flex items-center space-x-3 p-4 h-20">
                <img
                  src="/icons/mail.svg"
                  alt="Mail"
                  className="w-12 h-12 block object-contain"
                />
                <span className="text-md sm:text-xl md:text-lg lg:text-xl font-nanum text-white">
                  94yjung@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3 p-4 h-20">
                <img
                  src="/icons/call.svg"
                  alt="Call"
                  className="w-12 h-12 block object-contain"
                />
                <span className="text-md sm:text-xl md:text-lg lg:text-xl font-nanum text-white">
                  +82 010 6740 9786
                </span>
              </li>
              <li className="flex items-center space-x-3 p-4 h-20">
                <img
                  src="/icons/youtube.svg"
                  alt="YouTube"
                  className="w-12 h-12 block object-contain"
                />
                <a
                  href="https://www.youtube.com/@%EC%97%90%EC%A6%88%EC%9C%A4Asyun-w7d"
                  className="text-md sm:text-xl md:text-lg lg:text-xl font-nanum text-white underline"
                >
                  youtube.com/@에즈윤Asyun
                </a>
              </li>
              <li className="flex items-center space-x-3 p-4 h-20">
                <img
                  src="/icons/kakaotalk.svg"
                  alt="Kakaotalk"
                  className="w-12 h-12 block object-contain"
                />
                <span className="text-md sm:text-xl md:text-lg lg:text-xl font-nanum text-white">
                  As_yun
                </span>
                <img
                  src="/img/QRCode.png"
                  alt="KakaotalkQRCode"
                  className="w-24 h-24 block object-contain"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
