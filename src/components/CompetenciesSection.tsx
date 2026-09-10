import { useState } from 'react';
import { Plus, Minus, Check, ClipboardCheck, Lightbulb, MessageSquareShare, Layout, ShieldAlert, BookOpen, ExternalLink, Laptop, Sparkles } from 'lucide-react';
import { COMPETENCIES_DATA, SELF_DEVELOPMENT_PROJECT } from '../data/portfolioData';

export default function CompetenciesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const iconMap: Record<string, any> = {
    ClipboardCheck,
    Lightbulb,
    MessageSquareShare,
    Layout,
    ShieldAlert
  };

  return (
    <section id="competencies" className="py-20 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-1.5 text-[#E65100] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>// Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-2">
            조직과 프로젝트를 지탱하는 5가지 실무 강점
          </h2>
          <p className="text-base text-[#666]">
            행정적 정확성을 기반으로 아이디어를 구체화하고 다자간 조율을 이끌어내는 김민서의 차별화된 역량입니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#EBEAE4] border-y border-[#EBEAE4]">
          {COMPETENCIES_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            const Icon = iconMap[item.iconName] || ClipboardCheck;

            return (
              <div key={item.id} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left group gap-4 py-1"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono font-bold text-[#E65100]">
                      {item.number}.
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#1E1E1E] group-hover:text-[#E65100] transition-colors inline-block">
                        {item.title}
                      </h3>
                      <span className="hidden sm:inline-block ml-3 text-xs text-[#737373] font-medium">
                        — {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-[#D5D4CC] flex items-center justify-center text-[#555] group-hover:border-[#E65100] group-hover:text-[#E65100] transition-colors shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content Area */}
                {isOpen && (
                  <div className="pt-4 pb-2 pl-8 sm:pl-10 pr-2 space-y-4 text-sm text-[#474747] animate-in fade-in duration-200">
                    <p className="leading-relaxed bg-[#FAF9F7] p-4 rounded-xl border border-[#EBEAE5] text-[#333]">
                      {item.description}
                    </p>

                    <div>
                      <span className="text-xs font-bold text-[#737373] uppercase tracking-wider block mb-2">
                        핵심 실무 수행 능력 (Key Strengths)
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {item.keyStrengths.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3 rounded-lg bg-white border border-[#E5E5DF] text-xs flex items-start gap-2"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span className="text-[#262626] font-medium leading-snug">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Self Development & Technical Practice Section */}
        <div className="mt-14 pt-10 border-t border-[#EAE8E2]">
          <div className="flex items-center gap-1.5 text-[#E65100] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>// Continuous Self-Development & Tech Skills</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-[#171717] tracking-tight">
                자기개발 및 디지털 실습 역량
              </h3>
              <p className="text-sm text-[#666] mt-1">
                행정·운영 실무에 더해 최신 디지털 툴과 데이터 시각화를 능동적으로 학습하며 지속적으로 실무 역량을 확장하고 있습니다.
              </p>
            </div>
          </div>

          {/* Self-Development Card */}
          <div className="rounded-2xl bg-linear-to-br from-[#FAF9F7] to-white border border-[#E2DFD8] p-6 sm:p-8 shadow-xs hover:border-[#E65100]/50 transition-all">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              {/* Left Column: Info & Details */}
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#FFE0B2] text-[#E65100] text-xs font-bold font-mono">
                    {SELF_DEVELOPMENT_PROJECT.period}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#EBE9E2] text-[#444] text-xs font-medium">
                    {SELF_DEVELOPMENT_PROJECT.course}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#E0DED7] text-[#666] text-xs font-mono">
                    {SELF_DEVELOPMENT_PROJECT.session}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#1E1E1E] mb-2 flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-[#E65100]" />
                    {SELF_DEVELOPMENT_PROJECT.title}
                  </h4>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">
                    {SELF_DEVELOPMENT_PROJECT.description}
                  </p>
                </div>

                {/* Key Takeaways */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-[#737373] uppercase tracking-wider block">
                    실습을 통해 습득한 역량 (Key Learnings)
                  </span>
                  <div className="space-y-1.5">
                    {SELF_DEVELOPMENT_PROJECT.keyTakeaways.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#333]">
                        <Check className="w-3.5 h-3.5 text-[#E65100] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {SELF_DEVELOPMENT_PROJECT.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white border border-[#E2E0D8] text-[#555] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Prominent Live Demo Action Box */}
              <div className="md:w-64 shrink-0 p-5 rounded-xl bg-white border border-[#E5E5DF] shadow-2xs flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#E65100] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Project Artifact</span>
                  </div>
                  <p className="text-xs text-[#666] leading-relaxed">
                    2주차 실습에서 제작된 데이터 시각화 인터페이스(HTML) 결과물입니다.
                  </p>
                </div>

                <div>
                  <a
                    href={SELF_DEVELOPMENT_PROJECT.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#E65100] text-white font-bold text-sm hover:bg-[#D84315] active:scale-[0.98] transition-all shadow-md group cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Live Demo 바로 열기</span>
                  </a>
                </div>

                <p className="text-[10px] text-[#888] leading-tight text-center">
                  * 클릭 시 새 탭에서 실습 결과물(HTML)이 바로 열립니다.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
