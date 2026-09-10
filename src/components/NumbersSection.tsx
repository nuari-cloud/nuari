import { Building2, Users, FileText, Video, CalendarCheck, Award, Sparkles } from 'lucide-react';
import { STATS_DATA } from '../data/portfolioData';

export default function NumbersSection() {
  const iconMap: Record<string, any> = {
    Building2,
    Users,
    FileText,
    Video,
    CalendarCheck,
    Languages: Award
  };

  return (
    <section id="numbers" className="py-16 bg-white border-b border-[#EAE8E2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#F0EFEA] gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-[#E65100] text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// Numbers & Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
              수치로 증명하는 운영 실무 규모
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#737373] max-w-md">
            학기별 다수의 서포터즈 관리부터 수십 건의 콘텐츠 검토, 수백 명 단위의 대규모 행사까지 오차 없이 수행했습니다.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {STATS_DATA.map((stat) => {
            const Icon = iconMap[stat.iconName] || FileText;

            return (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-[#FAF9F7] border border-[#EBEAE5] hover:border-[#E65100]/40 hover:bg-white transition-all shadow-2xs group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E1DA] flex items-center justify-center text-[#525252] group-hover:text-[#E65100] group-hover:border-[#E65100]/30 transition-colors mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1E1E1E] tracking-tight mb-1 group-hover:text-[#E65100] transition-colors">
                    {stat.value}
                  </div>
                  <h3 className="text-xs font-bold text-[#404040] mb-1">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-[11px] text-[#737373] leading-tight pt-2 border-t border-[#EDECE7] mt-3">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
