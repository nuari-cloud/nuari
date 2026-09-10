import { Building2, GraduationCap, Award, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';
import { CAREER_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="career" className="py-20 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-1.5 text-[#E65100] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>// Career & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-2">
            실무 경력과 학업 및 자격 사항
          </h2>
          <p className="text-base text-[#666]">
            공공기관 인턴부터 대학 취업지원센터 행정 실무까지, 조직의 업무 흐름을 익히고 발전시켜왔습니다.
          </p>
        </div>

        {/* Timeline List (Styled cleanly after reference image timeline) */}
        <div className="space-y-12">
          {CAREER_DATA.map((item, idx) => (
            <div key={item.id} className="relative pl-8 sm:pl-10 border-l-2 border-[#E0DDD5]">
              
              {/* Step indicator dot on line */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#E65100] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E65100]" />
              </div>

              {/* Number marker */}
              <div className="text-xs font-mono font-bold text-[#E65100] tracking-wider mb-1">
                0{idx + 1}
              </div>

              {/* Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
                  {item.organization}
                </h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#EBE9E2] text-[#555]">
                  {item.period}
                </span>
              </div>

              {/* Role and Type */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-[#E65100]">
                  {item.role}
                </span>
                <span className="text-xs text-[#8C8C8C]">|</span>
                <span className="text-xs text-[#666]">{item.type}</span>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#4A4A4A] leading-relaxed mb-6 bg-white p-4 rounded-xl border border-[#E5E5DF]">
                {item.summary}
              </p>

              {/* Tasks breakdown */}
              <div className="space-y-4 mb-6">
                {item.tasks.map((taskGroup) => (
                  <div key={taskGroup.category} className="bg-white/80 p-4 rounded-xl border border-[#EAE8E2]">
                    <h4 className="text-xs font-bold text-[#1E1E1E] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#E65100]" />
                      {taskGroup.category}
                    </h4>
                    <ul className="space-y-1.5">
                      {taskGroup.items.map((t, tIdx) => (
                        <li key={tIdx} className="text-xs sm:text-sm text-[#525252] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C8C8C] mt-1.5 shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Highlight Note (업무에서 특히 잘했던 일) */}
              {item.highlightNote && (
                <div className="p-5 rounded-2xl bg-[#FFF8E1] border border-[#FFE082] text-sm text-[#3E2723]">
                  <h4 className="font-bold text-sm sm:text-base text-[#E65100] mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    {item.highlightNote.title}
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed mb-3 text-[#4E342E]">
                    {item.highlightNote.description}
                  </p>
                  <ul className="space-y-1.5 mb-3">
                    {item.highlightNote.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs font-medium text-[#3E2723]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold text-[#E65100] pt-2 border-t border-amber-300/60">
                    💡 {item.highlightNote.conclusion}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Education & Certifications 2-Column Grid */}
        <div className="mt-16 pt-12 border-t border-[#EAE8E2] grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Education (Col 6) */}
          <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-[#E5E5DF] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C8C8C] uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4 text-[#E65100]" />
              <span>EDUCATION</span>
            </div>

            {EDUCATION_DATA.map((edu) => (
              <div key={edu.school}>
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-lg font-bold text-[#1E1E1E]">{edu.school}</h4>
                  <span className="text-xs text-[#737373] font-mono">{edu.degree}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {edu.majors.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 rounded-md bg-[#F4F3EE] text-xs font-semibold text-[#1E1E1E]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#525252] leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Languages (Col 6) */}
          <div className="md:col-span-6 bg-white p-6 rounded-2xl border border-[#E5E5DF] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C8C8C] uppercase tracking-wider mb-4">
                <FileCheck className="w-4 h-4 text-[#E65100]" />
                <span>CERTIFICATES & LANGUAGE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3 rounded-xl bg-[#FAF9F7] border border-[#EBEAE4] flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-[#262626]">
                      {cert.name}
                    </span>
                    <span className="text-[10px] text-[#737373] bg-white px-2 py-0.5 rounded-sm border border-[#E0DED7]">
                      {cert.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F0EFEA] text-[11px] text-[#737373] flex items-center justify-between">
              <span>사무 행정 & 글로벌 소통 자격 완비</span>
              <span className="font-mono text-[#E65100] font-bold">100% VERIFIED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
