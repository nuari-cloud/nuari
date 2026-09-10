import { useState } from 'react';
import { FileText, ArrowDown, Send, Sparkles, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium w-fit mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] mb-3 leading-[1.15]">
              안녕하세요, <br className="hidden sm:inline" />
              <span className="text-[#171717]">김민서</span>입니다 👋
            </h1>

            {/* Role designation */}
            <p className="text-xl sm:text-2xl font-bold text-[#E65100] tracking-tight mb-6">
              {PERSONAL_INFO.role}
              <span className="text-sm sm:text-base font-normal text-[#737373] ml-2">
                / {PERSONAL_INFO.engRole}
              </span>
            </p>

            {/* Primary Tagline Block */}
            <div className="border-l-3 border-[#E65100] pl-4 py-1 mb-8 bg-[#F4F3EF]/60 rounded-r-lg pr-3">
              <blockquote className="text-lg sm:text-xl font-medium text-[#262626] leading-relaxed">
                “사람과 업무 사이의 복잡한 일을 정리하고,
                <br className="hidden sm:inline" />
                아이디어를 실제 결과물로 연결합니다.”
              </blockquote>
            </div>

            {/* Brief Context & Intro */}
            <p className="text-[#525252] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              대학 취업지원센터에서 약 2년간 행정 및 프로그램 운영 실무를 담당했습니다.
              학생들의 두루뭉술한 아이디어를 실행 가능한 기획안으로 다듬고, 
              학생·담당자·의사결정권자 사이의 의견을 유연하게 조율하여 성공적인 결과물로 이끌어냅니다.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1E1E1E] text-white font-semibold text-sm hover:bg-[#E65100] transition-colors shadow-xs group"
              >
                <FileText className="w-4 h-4 text-white/80 group-hover:scale-110 transition-transform" />
                <span>이력서 보기 및 인쇄</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#DCDAD4] text-[#262626] font-semibold text-sm hover:border-[#E65100] hover:text-[#E65100] transition-colors shadow-2xs"
              >
                <Send className="w-4 h-4 text-[#E65100]" />
                <span>연락하기 (Let's connect)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-full bg-[#F4F3EE] hover:bg-[#ECEAE3] text-[#525252] text-xs font-medium transition-colors"
                title="이메일 복사"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>이메일 복사</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Keyword Highlights */}
            <div className="pt-6 border-t border-[#EAE8E2] flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#737373] mr-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#E65100]" />
                핵심 키워드
              </span>
              {PERSONAL_INFO.keywords.map((kw) => (
                <span
                  key={kw}
                  className="text-xs px-2.5 py-1 rounded-md bg-white border border-[#E5E5DF] text-[#404040] font-medium"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Right Hero Column: Hanging Lanyard Staff Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] pt-12 pb-4 flex flex-col items-center">
              
              {/* Lanyard Strap hanging down from top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-14 bg-linear-to-b from-[#1E1E1E] to-[#2B2B2B] shadow-inner rounded-t-sm z-10 flex items-center justify-center">
                {/* Lanyard fabric texture lines */}
                <div className="w-1 h-full bg-[#383838]" />
              </div>

              {/* Metallic Clip & Ring */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="w-5 h-3 rounded-t-sm bg-linear-to-b from-gray-200 to-gray-400 border border-gray-400 shadow-xs" />
                <div className="w-7 h-4 rounded-full border-2 border-gray-400 bg-transparent -mt-1 shadow-2xs" />
              </div>

              {/* The ID Badge Card Body */}
              <div className="w-full bg-white rounded-2xl border border-[#E0DED9] p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative mt-3 group">
                
                {/* Badge punch hole at top */}
                <div className="w-12 h-2.5 rounded-full bg-[#E5E3DC] mx-auto mb-4 border border-[#D5D3CC]" />

                {/* Badge Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F0EFEA]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E65100]" />
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#737373]">
                      STAFF PASS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A3A3A3]">
                    {PERSONAL_INFO.badgeId}
                  </span>
                </div>

                {/* Portrait & Graphic Representation */}
                <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4 bg-linear-to-br from-[#F5F4F0] to-[#EAE8E1] border border-[#EAE8E2] flex flex-col items-center justify-center text-center p-4">
                  {/* Stylized Avatar Illustration */}
                  <div className="relative mb-2">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-[#D5D3CB] p-1 shadow-xs flex items-center justify-center overflow-hidden">
                      {/* Stylized portrait SVG */}
                      <svg viewBox="0 0 80 80" className="w-full h-full text-[#404040]">
                        <circle cx="40" cy="40" r="38" fill="#FBFBFA" />
                        {/* Head */}
                        <ellipse cx="40" cy="32" rx="14" ry="16" fill="#F0C7A6" />
                        {/* Hair */}
                        <path d="M24 30 C24 16, 56 16, 56 30 C56 22, 50 18, 40 18 C30 18, 24 22, 24 30 Z" fill="#2E241E" />
                        <path d="M23 30 C23 44, 27 48, 30 48 C28 40, 27 34, 27 30 Z" fill="#2E241E" />
                        <path d="M57 30 C57 44, 53 48, 50 48 C52 40, 53 34, 53 30 Z" fill="#2E241E" />
                        {/* Bangs */}
                        <path d="M26 26 Q40 22 54 26 Q48 19 40 19 Q32 19 26 26 Z" fill="#2E241E" />
                        {/* Shoulders & Jacket */}
                        <path d="M16 74 C16 54, 25 48, 40 48 C55 48, 64 54, 64 74 Z" fill="#3D4552" />
                        {/* Inner shirt collar */}
                        <polygon points="34,48 40,58 46,48" fill="#FFFFFF" />
                        {/* ID card ribbon on chest */}
                        <path d="M38 58 L42 58 L41 74 L39 74 Z" fill="#E65100" />
                      </svg>
                    </div>
                    <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Active" />
                  </div>

                  <span className="text-xs font-semibold text-[#262626]">
                    대학 취업지원센터 행정 실무자
                  </span>
                  <span className="text-[11px] text-[#737373]">
                    University Career Center
                  </span>
                </div>

                {/* Badge Meta Details */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8C8C8C]">NAME</span>
                    <span className="font-bold text-[#1E1E1E] text-sm">
                      {PERSONAL_INFO.name} ({PERSONAL_INFO.engName})
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8C8C8C]">POSITION</span>
                    <span className="font-medium text-[#262626]">
                      {PERSONAL_INFO.role}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8C8C8C]">EXP</span>
                    <span className="font-medium text-[#E65100]">
                      약 2년 (2025.01 ~ 현재)
                    </span>
                  </div>
                </div>

                {/* Barcode & Signature Footprint */}
                <div className="pt-3 border-t border-dashed border-[#E5E3DC] flex items-center justify-between">
                  {/* Decorative Barcode */}
                  <div className="flex items-center gap-0.5 h-6">
                    {[3, 1, 2, 4, 1, 2, 3, 1, 4, 2, 1, 3, 2, 1, 2, 4, 1, 3].map((w, i) => (
                      <div
                        key={i}
                        className="bg-[#2B2B2B] h-full"
                        style={{ width: `${w}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-[#8C8C8C] tracking-widest">
                    VERIFIED
                  </span>
                </div>

              </div>

              {/* Subtle visual shadow below hanging card */}
              <div className="w-48 h-3 rounded-full bg-black/10 blur-sm mt-3" />
            </div>
          </div>

        </div>

        {/* Scroll down prompt */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="flex items-center gap-1.5 text-xs text-[#8C8C8C] hover:text-[#E65100] transition-colors py-2"
          >
            <span>상세 소개 및 실무 이력 살펴보기</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E65100]" />
          </a>
        </div>
      </div>
    </section>
  );
}
