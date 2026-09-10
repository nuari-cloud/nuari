import { Compass, ArrowRight, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { NEXT_STEPS_DATA } from '../data/portfolioData';

export default function NextVisionSection() {
  return (
    <section id="vision" className="py-20 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-1.5 text-[#E65100] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>// What I Want to Do Next</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-2">
            앞으로 기여하고 싶은 업무와 성장 방향
          </h2>
          <p className="text-base text-[#666]">
            행정의 정확성과 기획·실행의 유연함으로 조직의 실행력을 뒷받침하겠습니다.
          </p>
        </div>

        {/* Target Roles Grid */}
        <div className="mb-8">
          <span className="text-xs font-bold text-[#737373] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-[#E65100]" />
            탐색 중인 직무 영역 (Target Domains)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {NEXT_STEPS_DATA.roles.map((role) => (
              <div
                key={role}
                className="p-4 rounded-xl bg-[#FAF9F7] border border-[#EBEAE4] hover:border-[#E65100]/40 hover:bg-white transition-all flex items-center justify-between group"
              >
                <span className="text-sm font-bold text-[#1E1E1E] group-hover:text-[#E65100] transition-colors">
                  {role}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#A3A3A3] group-hover:text-[#E65100] group-hover:translate-x-0.5 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Manifesto / Working Philosophy Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-linear-to-br from-[#1E1E1E] to-[#2B2B2B] text-white shadow-lg relative overflow-hidden">
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-orange-200 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>실무자 김민서의 다짐 (Minseo's Commitment)</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed tracking-tight text-[#FAF9F6]">
              "{NEXT_STEPS_DATA.manifesto}"
            </blockquote>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl pt-2 border-t border-white/10">
              {NEXT_STEPS_DATA.goal}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                빈틈없는 행정 정확성
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                이해관계자 간 원활한 소통
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                책임감 있는 현장 완수
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
