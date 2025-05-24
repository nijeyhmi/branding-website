const Guide = () => {
  return (
    <section className="w-full h-[calc(100dvh-80px)] bg-primary flex items-center">
      <div className="flex flex-col w-full">
        <div className="flex justify-center w-full text-white text-6xl mb-5">
          <span className="pr-5">[</span>Free
          <span className="pl-3 italic"> Guides </span>
          <span className="pl-5">]</span>
        </div>
        <div className="text-center text-white text-2xl mb-7">
          민감성 피부를 위한 무료 자료집
        </div>
        <div className="flex items-center justify-center mx-32">
          <div className="w-[25%]">
            <div className="w-full aspect-video overflow-hidden">
              <img
                src="https://i.ytimg.com/vi/biRAo_91AMo/hqdefault.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mx-36">
            <img src="/img/bookCover.png" alt="" className="w-[280px] mb-7" />
            <button className="p-4 bg-red-100 text-primary w-[280px] rounded-3xl">
              자료집 무료 신청하기
            </button>
          </div>
          <div className="w-[30%]">
            <div className="h-full flex flex-col justify-center items-start text-xl leading-10 text-white">
              <p>
                민감성 피부로 힘든 시간을 보낼 때,
                <br />
                '어디서부터 케어를 시작해야 할지' 막막한 순간이 많죠.
              </p>
              <p className="mt-10">
                같은 고민을 하고 계신 분들이
                <br />
                조금이라도 덜 헤매셨으면 하는 마음으로,
                <br />
                에즈윤 채널에서 다뤄온 핵심 내용을 보기 쉽게
                <br />
                정리한 작은 안내서를 만들었습니다.
              </p>
              <div className="p-7 mt-10">
                <ul>
                  <li className="list-disc">
                    말라세지아 모낭염 유발 성분 피하는 법
                  </li>
                  <li className="list-disc">저자극 클렌징 방법</li>
                  <li className="list-disc">
                    클렌저 타입별 말라세지아 유발 성분 체크 리스트
                  </li>
                  <li className="list-disc">알레르기 유발 착향제 25가지</li>
                </ul>
              </div>
              <p className="mt-10">
                이 자료집에서는 민감성 피부의 관리 방법,
                <br />
                추천 제품까지 알차게 담았습니다.
              </p>
              <p className="mt-10">
                피부와 나를 위한 첫걸음,
                <br />
                지금 바로 무료로 받아보세요 :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
