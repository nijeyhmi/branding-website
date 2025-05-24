const Contact = () => {
  return (
    <section className="bg-[url('/img/contactImg.png')] bg-cover bg-center w-full h-[calc(100dvh-80px)] bg-pink-200 flex items-center">
      <div className="mx-32 w-full h-full flex">
        <div className="w-[55%] h-full py-56">
          <div className="h-full w-full flex flex-col justify-center items-center ">
            <div className="text-9xl font-bold text-primary">Contact Me</div>
            <p className="text-white text-center mt-14 text-3xl font-nanum">
              <span className="block">Let's Work Together</span>
              <span className="block pt-5">And Create Something Great</span>
            </p>
          </div>
        </div>
        <div className="w-[45%] h-full py-56 ml-36">
          <ul className="h-full flex flex-col justify-center items-start text-xl px-24 leading-10">
            <li className="flex items-center space-x-3 p-7 h-[150px]">
              <img
                src="/icons/mail.svg"
                alt="Mail"
                className="w-20 h-20 block object-contain"
              />
              <span className="text-3xl font-nanum text-white">
                94yjung@gmail.com
              </span>
            </li>
            <li className="flex items-center space-x-3 p-7 h-[150px]">
              <img
                src="/icons/call.svg"
                alt="Call"
                className="w-20 h-20 block object-contain"
              />
              <span className="text-3xl font-nanum text-white">
                +82 010 6740 9786
              </span>
            </li>
            <li className="flex items-center space-x-3 p-7 h-[150px]">
              <img
                src="/icons/youtube.svg"
                alt="YouTube"
                className="w-20 h-20 block object-contain"
              />
              <a
                href="https://www.youtube.com/@%EC%97%90%EC%A6%88%EC%9C%A4Asyun-w7d"
                className="text-3xl font-nanum text-white underline"
              >
                youtube.com/@에즈윤Asyun
              </a>
            </li>
            <li className="flex items-center space-x-3 p-7 h-[150px]">
              <img
                src="/icons/kakaotalk.svg"
                alt="Kakaotalk"
                className="w-20 h-20 block object-contain"
              />
              <span className="text-3xl font-nanum text-white">As_yun</span>
              <img
                src="/img/QRCode.png"
                alt="KakaotalkQRCode"
                className="w-36 h-36 block object-contain"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
