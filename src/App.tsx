import React, { memo } from "react";

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
      <header className="relative bg-gradient-to-r from-[#ffd6e0] to-[#ffecf1] p-4 md:p-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-[5rem] font-bold text-pink-700 mb-4">Florist Studio</h1>
          <nav className="flex space-x-4 md:space-x-8">
            <a href="#" className="text-base md:text-[2rem] text-pink-600 hover:text-pink-800 transition-colors">클래스</a>
            <a href="#" className="text-base md:text-[2rem] text-pink-600 hover:text-pink-800 transition-colors">갤러리</a>
            <a href="#" className="text-base md:text-[2rem] text-pink-600 hover:text-pink-800 transition-colors">문의하기</a>
          </nav>
        </div>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={IMAGES.hero}
            alt="Floral background" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 to-pink-600/30"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-[5rem] lg:text-[6.67rem] font-bold mb-6 drop-shadow-lg">감성을 전하는 꽃</h2>
          <p className="text-2xl md:text-6xl lg:text-8xl mb-8 font-light">당신만의 특별한 순간을 더욱 특별하게</p>
          <button className="px-8 md:px-16 py-4 md:py-6 bg-white text-pink-600 rounded-full hover:bg-pink-50 transition-colors duration-300 shadow-lg hover:shadow-xl text-xl md:text-5xl">
            클래스 둘러보기
          </button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* 소개 섹션 */}
        <section className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-[5rem] font-bold text-pink-700 mb-6">🌸 클래스 안내</h2>
          <p className="text-lg md:text-[2rem] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            1:1 플라워 클래스부터 원데이 클래스, 웨딩 부케까지<br/>
            당신만의 특별한 순간을 만들어보세요
          </p>
        </section>

        {/* 클래스 카드 섹션 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
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
        </section>

        {/* CTA 섹션 */}
        <section className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-3xl p-6 md:p-12 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-[5rem] font-bold text-pink-700 mb-6">✨ 특별한 경험을 선물하세요</h2>
            <p className="text-lg md:text-[2rem] text-gray-700 mb-8">당신만의 특별한 순간을 더욱 특별하게 만들어드립니다</p>
            <button className="px-8 md:px-16 py-4 md:py-6 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl text-xl md:text-[2rem]">
              문의하기
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-pink-50 to-pink-100 mt-12 md:mt-20 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6 md:mb-8">
            <h3 className="text-2xl md:text-[3rem] font-bold text-pink-700 mb-4">Florist Studio</h3>
            <p className="text-base md:text-[1.5rem] text-gray-600">꽃으로 전하는 특별한 마음</p>
          </div>
          <div className="text-sm md:text-[1.2rem] text-gray-500">
            <p className="mb-2">ⓒ 2025 Florist Studio. All rights reserved.</p>
            <p>서울특별시 강남구 테헤란로 123</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default memo(App);