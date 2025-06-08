import { memo } from "react";

// 이미지 URL 상수
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  bouquet: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  table: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  wrapping: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
};

// 메모이제이션된 카드 컴포넌트
const ClassCard = memo(({ image, title, description }: { image: string; title: string; description: string }) => (
  <div className="group bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center">
    <div className="relative overflow-hidden h-[40vh] w-full">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-8 text-center">
      <h3 className="text-2xl md:text-[2.5rem] font-bold text-pink-700 mb-4">{title}</h3>
      <p className="text-lg md:text-[1.5rem] text-gray-600 mb-6">{description}</p>
      <button className="w-full px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 text-base md:text-[1.5rem]">
        자세히 보기
      </button>
    </div>
  </div>
));

ClassCard.displayName = 'ClassCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffe4e9] via-white to-[#fff0f3] text-gray-800 font-['Noto_Sans_KR']">
      {/* 헤더 섹션 */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-[2.5rem] font-bold text-pink-600 mb-4 md:mb-0">Florist Studio</div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#classes" className="text-[1rem] text-gray-600 hover:text-pink-600 transition-colors">클래스</a>
            <a href="#about" className="text-[1rem] text-gray-600 hover:text-pink-600 transition-colors">소개</a>
            <a href="#contact" className="text-[1rem] text-gray-600 hover:text-pink-600 transition-colors">문의</a>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="h-[40vh] relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Hero"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-[3.75rem] md:text-[5rem] font-bold mb-4">꽃으로 말하다</h1>
          <p className="text-[2.5rem] md:text-[3.33rem]">감성을 전하는 꽃</p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <section id="classes" className="mb-20">
          <h2 className="text-[2.5rem] font-bold text-center mb-12">클래스 안내</h2>
          <p className="text-[1rem] text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            꽃과 함께하는 특별한 시간을 만들어보세요. 전문 플로리스트와 함께하는 다양한 클래스를 준비했습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ClassCard 
              image={IMAGES.bouquet}
              title="부케 클래스"
              description="감각적인 웨딩 부케 만들기"
            />
            <ClassCard 
              image={IMAGES.table}
              title="테이블 플라워"
              description="홈카페 분위기의 테이블 연출"
            />
            <ClassCard 
              image={IMAGES.wrapping}
              title="꽃다발 포장"
              description="감성 가득한 꽃다발 만들기"
            />
          </div>
        </section>

        <section id="about" className="mb-20">
          <h2 className="text-[2.5rem] font-bold text-center mb-12">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={IMAGES.hero}
                alt="About Us"
                className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h3 className="text-[1.25rem] font-bold mb-4">우리의 이야기</h3>
              <p className="text-[0.75rem] text-gray-600 mb-6">
                Florist Studio는 꽃을 통해 감성을 전달하고, 아름다움을 나누는 공간입니다.
                우리는 각자의 개성과 스타일을 존중하며, 창의적인 플로리스트가 될 수 있도록 도와드립니다.
              </p>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-full text-[0.75rem] hover:bg-pink-700 transition-colors">
                더 알아보기
              </button>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-[2.5rem] font-bold mb-8">문의하기</h2>
          <p className="text-[1rem] text-gray-600 mb-8">
            궁금한 점이 있으시다면 언제든지 문의해 주세요.
          </p>
          <button className="bg-pink-600 text-white px-8 py-4 rounded-full text-[0.75rem] hover:bg-pink-700 transition-colors">
            문의하기
          </button>
        </section>
      </main>

      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-[1.5rem] font-bold text-gray-800 mb-4">Florist Studio</h3>
          <p className="text-[0.75rem] text-gray-600">
            © 2025 Florist Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default memo(App);