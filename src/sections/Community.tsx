const Community = ({
  refItem,
}: {
  refItem: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      className="w-full sm:h-[calc(100dvh-50px)] md:h-[calc(100dvh-60px)] bg-primary"
      ref={refItem}
    >
      <section className="h-full">
        <div className="w-full h-full flex flex-col justify-center items-center py-10 sm:py-0">
          <div className="text-center text-white text-4xl lg:text-5xl leading-none mb-5 font-bold">
            <span className="pr-3 sm:pr-5 hidden md:inline">[</span>
            <span className="pl-1 sm:pl-3 italic block sm:inline">
              Welcome to
            </span>
            <span className="pl-1 sm:pl-3 italic block sm:inline">
              Tomato Skin Club
            </span>
            <span className="pl-3 sm:pl-5 hidden md:inline">]</span>
          </div>
          <div className="text-center text-white text-base sm:text-lg">
            민감피부를 위한 커뮤니티, 토마토피부클럽
          </div>
          <div className="w-full flex md:flex-row flex-col items-center justify-evenly md:pt-10">
            <div className="flex flex-col items-center md:mx-20 pt-7 md:pt-0 md:w-[40%]">
              <img
                src="/img/communityImg.png"
                alt=""
                className="w-[500px] md:w-[540px] mb-7"
              />
              <button className="p-4 bg-red-100 text-primary w-[250px] sm:w-[280px] rounded-3xl font-bold">
                <a
                  href="https://cafe.naver.com/tomatoskinclub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  토마토피부클럽 멤버 되기
                </a>
              </button>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="h-full flex flex-col text-base sm:text-sm md:text-base leading-7 text-white px-10 pt-5 md:p-0 break-keep">
                <p>
                  오픈채팅방에서는 좋은 정보들이 금세 지나가 버릴 수 있으니까,
                  <br />
                  소중한 경험과 팁들이 사라지지 않도록
                  <br />
                  우리가 함께 만들어나가는 기록 공간을 준비했어요!
                </p>
                <div className="mt-3">
                  ✨ 이런 공간이에요
                  <ul className="pl-6">
                    <li className="list-disc">
                      피부 고민 상담과 제품 후기를 나누는 곳
                    </li>
                    <li className="list-disc">
                      "이런 방법 써보니까 좋더라" 소소한 팁 공유
                    </li>
                    <li className="list-disc">
                      서로의 변화 과정을 응원하고 기록하는 따뜻한 커뮤니티
                    </li>
                  </ul>
                </div>
                <p className="mt-3">
                  단순한 정보 게시판이 아닌,
                  <br />
                  같은 고민을 가진 사람들이 모여서
                  <br />
                  함께 성장해나가는 피부 커뮤니티가 되도록 함께해 주세요 :)
                </p>
                <p className="mt-3">
                  차근차근 쌓아가는 우리들의 피부 여정, 함께 만들어가요 💗
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
