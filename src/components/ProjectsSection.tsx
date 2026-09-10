import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Filter, Users, CalendarCheck, FileSpreadsheet } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'program' | 'event' | 'content'>('all');

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-[#FAF9F6] border-b border-[#EAE8E2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#F0EFEA] gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-[#E65100] text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
              <span>// Selected Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
              아이디어를 실행으로 완성한 주요 프로젝트
            </h2>
            <p className="text-sm sm:text-base text-[#666] mt-1.5">
              기획·조율·실행 과정에서 직면한 문제를 정의하고 실제 성과와 배움을 이끌어낸 3가지 핵심 사례입니다.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#EFECE6] p-1 rounded-xl self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-white text-[#171717] shadow-2xs'
                  : 'text-[#666] hover:text-[#171717]'
              }`}
            >
              전체 (3)
            </button>
            <button
              type="button"
              onClick={() => setFilter('program')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'program'
                  ? 'bg-white text-[#171717] shadow-2xs'
                  : 'text-[#666] hover:text-[#171717]'
              }`}
            >
              프로그램 운영
            </button>
            <button
              type="button"
              onClick={() => setFilter('event')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'event'
                  ? 'bg-white text-[#171717] shadow-2xs'
                  : 'text-[#666] hover:text-[#171717]'
              }`}
            >
              행사 기획
            </button>
            <button
              type="button"
              onClick={() => setFilter('content')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'content'
                  ? 'bg-white text-[#171717] shadow-2xs'
                  : 'text-[#666] hover:text-[#171717]'
              }`}
            >
              콘텐츠 검토
            </button>
          </div>
        </div>

        {/* Project Cards Grid (2-column card layout like reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const projectIcons = [Users, CalendarCheck, FileSpreadsheet];
            const Icon = projectIcons[index % projectIcons.length];

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-white rounded-2xl border border-[#E5E5DF] p-6 shadow-2xs hover:shadow-lg hover:border-[#D0CECB] transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Top Metadata Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#F4F3EE] text-[#555] border border-[#EBEAE4]">
                      {project.scale}
                    </span>
                    <span className="text-[11px] text-[#8C8C8C] font-mono">
                      {project.period}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#E65100] transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="text-xs text-[#E65100] font-semibold mb-3">
                    {project.role}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-[#525252] leading-relaxed line-clamp-3 mb-4">
                    {project.summary}
                  </p>

                  {/* Key Learning Highlights */}
                  <div className="p-3 rounded-xl bg-[#FAF9F7] border border-[#EFEFEA] mb-4">
                    <span className="text-[10px] font-bold text-[#737373] uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#E65100]" />
                      What I learned
                    </span>
                    <p className="text-[11px] text-[#333] leading-relaxed line-clamp-2">
                      {project.learnings[0]}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-sm bg-[#F5F5F2] text-[#666]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-xs">
                  <span className="font-medium text-[#737373] group-hover:text-[#171717] transition-colors">
                    상세 케이스 스터디
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#1E1E1E] text-white flex items-center justify-center group-hover:bg-[#E65100] transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#E5E5DF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#666]">
          <span>
            💡 프로젝트 카드를 클릭하시면 <strong>직면 문제, 실행 조치, 성과 및 상세 배운 점</strong>을 확인하실 수 있습니다.
          </span>
          <button
            type="button"
            onClick={() => onSelectProject(PROJECTS_DATA[0])}
            className="text-[#E65100] font-semibold hover:underline shrink-0"
          >
            첫 번째 사례 바로보기 →
          </button>
        </div>

      </div>
    </section>
  );
}
