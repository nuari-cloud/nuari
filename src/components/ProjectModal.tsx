import { X, CheckCircle2, AlertCircle, Sparkles, Calendar, Users, Award, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs no-print animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl border border-[#E0DED8] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#F0EFEA] flex items-start justify-between gap-4 bg-[#FAF9F7]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-[#E65100] px-2 py-0.5 rounded-md bg-[#FFF3E0]">
                {project.scale}
              </span>
              <span className="text-xs text-[#737373] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.period}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#171717] leading-snug">
              {project.title}
            </h3>
            <p className="text-xs font-medium text-[#525252] mt-1">
              <strong>Role:</strong> {project.role}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#737373] hover:text-[#171717] hover:bg-[#EAE8E1] transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#383838] leading-relaxed">
          
          {/* Summary Box */}
          <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#EAE8E2]">
            <span className="text-xs font-bold text-[#737373] uppercase tracking-wider block mb-1">
              프로젝트 개요 (Overview)
            </span>
            <p className="text-sm font-medium text-[#1E1E1E]">
              {project.summary}
            </p>
          </div>

          {/* Metrics Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-3 rounded-lg border border-[#E5E5DF] bg-white text-center"
              >
                <span className="text-[11px] text-[#737373] block mb-0.5">
                  {m.label}
                </span>
                <span className="text-sm font-bold text-[#1E1E1E]">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Challenges / Problem Faced */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-2.5">
              <AlertCircle className="w-4 h-4" />
              <span>직면했던 문제 및 운영상 과제 (Challenges)</span>
            </div>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A4A4A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mt-1.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions Taken / Solutions */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>실행한 해결 조치 및 역할 (Actions Taken)</span>
            </div>
            <ul className="space-y-2">
              {project.actions.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#333]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Learned */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>What I learned (배운 점과 실무 인사이트)</span>
            </div>
            <ul className="space-y-2">
              {project.learnings.map((l, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-amber-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-md bg-[#F4F3EE] text-[#555] font-medium"
              >
                #{t}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#F0EFEA] bg-[#FAF9F7] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#1E1E1E] text-white hover:bg-[#E65100] transition-colors"
          >
            확인 및 닫기
          </button>
        </div>

      </div>
    </div>
  );
}
