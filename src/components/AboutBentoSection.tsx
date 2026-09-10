import { Sparkles, Lightbulb, Layers, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutBentoSection() {
  return (
    <section id="about" className="py-20 border-t border-[#EAE8E2] bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Accent Marker */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#E65100] text-sm font-mono font-semibold mb-2">
            <span>// About me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            사람과 업무 사이를 정리하고 결과를 만듭니다
          </h2>
          <p className="text-[#666] text-base sm:text-lg mt-2 max-w-2xl">
            2년간 대학 취업지원센터에서 프로그램의 전 과정을 운영하며 쌓은 실무 경험과 일하는 방식입니다.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Bento Card 1: Core Story & Identity (Col 7) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-[#E5E5DF] p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:border-[#D5D4CD] transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#8C8C8C] mb-4 uppercase tracking-wider">
                <Layers className="w-4 h-4 text-[#E65100]" />
                <span>OPERATIONS & ADMINISTRATIVE ESSENCE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#171717] mb-4 leading-snug">
                두루뭉술한 학생의 아이디어를 <br />
                <span className="text-[#E65100]">현실적인 실행안</span>으로 바꾸어왔습니다
              </h3>

              <div className="space-y-4 text-[#474747] text-sm sm:text-base leading-relaxed">
                <p>
                  대학 취업지원센터에서 약 2년간 행정·프로그램 운영 실무를 담당했습니다. 단순한 사무 처리를 넘어
                  <strong className="text-[#1E1E1E] font-semibold"> 학생 프로그램 모집부터 현장 운영, 콘텐츠 검토, 행사 기획, 일정 조율, 결과보고와 비용 집행</strong>까지 프로그램의 A to Z를 책임지고 완수했습니다.
                </p>
                <p>
                  학생들이 가져오는 참신하지만 다듬어지지 않은 아이디어를 실행 가능한 구체적 기획으로 정리하고,
                  학생·실무 담당자·최종 결재권자 사이의 관점 차이를 매끄럽게 조율하여 기한 내에 결과물을 만들어내는 역할을 맡아왔습니다.
                </p>
              </div>
            </div>

            {/* Step pipeline indicator */}
            <div className="mt-8 pt-6 border-t border-[#F0EFEA]">
              <span className="text-xs font-semibold text-[#737373] block mb-3">
                김민서의 실무 프로세스 파이프라인
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PERSONAL_INFO.formula.steps.map((step, idx) => (
                  <div
                    key={step}
                    className="p-2.5 rounded-xl bg-[#F8F7F4] border border-[#EBEAE5] text-center"
                  >
                    <span className="text-[10px] font-mono text-[#E65100] font-bold block mb-0.5">
                      STEP 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#262626]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 2: The Yellow Sticky Note (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {/* Real Sticky Note Aesthetic */}
            <div className="relative bg-[#FFF9C4] rounded-2xl border border-[#F0E68C] p-6 shadow-sm hover:shadow-md transition-shadow transform rotate-0.5 hover:rotate-0 transition-transform">
              {/* Tape Pin Graphic at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-white/70 backdrop-blur-xs border border-amber-200/50 shadow-2xs rotate-1" />

              <div className="flex items-center justify-between mb-3 pt-1">
                <span className="text-xs font-mono font-bold text-amber-900 flex items-center gap-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-800" />
                  업무 철학 메모 (Memo)
                </span>
                <span className="text-sm">📌</span>
              </div>

              <blockquote className="text-base sm:text-lg font-semibold text-[#3E2723] leading-relaxed mb-4">
                "{PERSONAL_INFO.formula.quote}"
              </blockquote>

              <div className="text-xs text-[#5D4037] leading-relaxed space-y-2 border-t border-amber-300/60 pt-3">
                <p>
                  거창한 전략보다 중요한 것은 <strong>현장에서 실제로 굴러가는 정교한 매뉴얼과 정확한 행정</strong>입니다.
                </p>
                <p>
                  문제를 숨기지 않고 가장 빠른 현실적 대안을 찾아 마침표를 찍습니다.
                </p>
              </div>

              <div className="mt-4 flex items-center justify-end">
                <span className="text-xs font-mono font-bold text-[#8D6E63] italic">
                  — 김민서 (Minseo Kim)
                </span>
              </div>
            </div>

            {/* Bento Card 3: Core Keywords Grid */}
            <div className="bg-white rounded-2xl border border-[#E5E5DF] p-6 shadow-2xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#8C8C8C] mb-3 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#E65100]" />
                  <span>CORE ATTRIBUTES</span>
                </div>
                <h4 className="text-base font-bold text-[#1E1E1E] mb-3">
                  업무를 관통하는 6대 키워드
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs px-3 py-1.5 rounded-lg bg-[#F5F4EF] border border-[#E5E4DE] text-[#262626] font-medium"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0EFEA] flex items-center justify-between text-xs text-[#737373]">
                <span>실무 중심의 안정적 실행력</span>
                <a
                  href="#projects"
                  className="font-semibold text-[#E65100] hover:underline flex items-center gap-1"
                >
                  사례 보기 <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
