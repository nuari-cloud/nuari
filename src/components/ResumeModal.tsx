import { X, Printer, Download, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import {
  PERSONAL_INFO,
  CAREER_DATA,
  PROJECTS_DATA,
  COMPETENCIES_DATA,
  STATS_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA,
  BEYOND_WORK_DATA,
  NEXT_STEPS_DATA
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
# ${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}

> ${PERSONAL_INFO.tagline}

## About Me
${PERSONAL_INFO.aboutDescription.join('\n\n')}

## 핵심 수치
${STATS_DATA.map((s) => `- ${s.label}: ${s.value} (${s.subtext})`).join('\n')}

## 경력 사항
${CAREER_DATA.map((c) => `
### ${c.organization} (${c.role} | ${c.period})
${c.summary}
${c.tasks.map((t) => `* ${t.category}\n${t.items.map((i) => `  - ${i}`).join('\n')}`).join('\n')}
`).join('\n')}

## 주요 프로젝트
${PROJECTS_DATA.map((p) => `
### ${p.title} (${p.period} / ${p.scale})
- 역할: ${p.role}
- 개요: ${p.summary}
- 배운점: ${p.learnings.join(', ')}
`).join('\n')}

## 학력 및 자격
- 학력: 대학교 (철학 전공, 경제학 복수전공)
- 자격 및 어학: ${CERTIFICATIONS_DATA.map((cert) => cert.name).join(', ')}

## 연락처
- Email: ${PERSONAL_INFO.email}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden my-6 border border-[#D5D4CC] flex flex-col max-h-[92vh]">
        
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="no-print px-6 py-4 bg-[#1E1E1E] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-bold tracking-wider">
              PRINTABLE RESUME / CV
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-medium transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '복사됨!' : '텍스트 복사'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#E65100] hover:bg-[#D84315] text-xs font-semibold text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PDF 저장 / 인쇄하기</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-white/10 text-gray-300 hover:text-white transition-colors ml-2"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Body (Clean typography designed for print & reading) */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-10 text-[#222] bg-white font-sans text-sm leading-relaxed">
          
          {/* Header */}
          <div className="border-b-2 border-[#1E1E1E] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[#111] tracking-tight">
                {PERSONAL_INFO.name} <span className="text-lg font-normal text-[#666]">| {PERSONAL_INFO.role}</span>
              </h1>
              <p className="text-sm font-medium text-[#E65100] mt-1">
                {PERSONAL_INFO.tagline}
              </p>
            </div>
            <div className="text-xs text-[#555] space-y-0.5 sm:text-right font-mono">
              <div>Email: {PERSONAL_INFO.email}</div>
              <div>Location: {PERSONAL_INFO.location}</div>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h2 className="text-sm font-mono font-bold text-[#1E1E1E] uppercase tracking-wider pb-1 border-b border-[#E0DED8] mb-3">
              About Me
            </h2>
            <div className="space-y-2 text-[#444] text-xs sm:text-sm leading-relaxed">
              {PERSONAL_INFO.aboutDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {PERSONAL_INFO.keywords.map((kw) => (
                <span key={kw} className="text-[11px] px-2 py-0.5 rounded bg-[#F5F4EF] text-[#444] border border-[#E8E7E0]">
                  #{kw}
                </span>
              ))}
            </div>
          </div>

          {/* Numbers Table */}
          <div>
            <h2 className="text-sm font-mono font-bold text-[#1E1E1E] uppercase tracking-wider pb-1 border-b border-[#E0DED8] mb-3">
              Key Metrics & Scale (핵심 실무 규모)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {STATS_DATA.map((s) => (
                <div key={s.label} className="p-2.5 rounded-lg border border-[#EAE8E2] bg-[#FAF9F7]">
                  <span className="text-[11px] text-[#737373] block">{s.label}</span>
                  <span className="text-sm font-bold text-[#111]">{s.value}</span>
                  <span className="text-[10px] text-[#888] block mt-0.5">{s.subtext}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career */}
          <div>
            <h2 className="text-sm font-mono font-bold text-[#1E1E1E] uppercase tracking-wider pb-1 border-b border-[#E0DED8] mb-4">
              Work Experience (경력 사항)
            </h2>
            <div className="space-y-6">
              {CAREER_DATA.map((c) => (
                <div key={c.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-base font-bold text-[#111]">{c.organization}</h3>
                    <span className="text-xs font-mono font-semibold text-[#666]">{c.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#E65100] mb-2">{c.role} ({c.type})</div>
                  <p className="text-xs text-[#555] mb-3">{c.summary}</p>
                  <div className="space-y-2 pl-3 border-l-2 border-[#EEE]">
                    {c.tasks.map((tg) => (
                      <div key={tg.category}>
                        <span className="text-xs font-bold text-[#333] block mb-0.5">· {tg.category}</span>
                        <ul className="list-disc list-inside text-xs text-[#555] space-y-0.5">
                          {tg.items.map((it, idx) => (
                            <li key={idx}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-mono font-bold text-[#1E1E1E] uppercase tracking-wider pb-1 border-b border-[#E0DED8] mb-4">
              Selected Projects (주요 프로젝트)
            </h2>
            <div className="space-y-5">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id} className="p-4 rounded-xl border border-[#EAE8E2] bg-[#FAF9F7]">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-sm font-bold text-[#111]">{p.title}</h3>
                    <span className="text-xs font-mono text-[#777]">{p.scale}</span>
                  </div>
                  <div className="text-xs text-[#E65100] font-medium mb-1.5">Role: {p.role}</div>
                  <p className="text-xs text-[#444] mb-2">{p.summary}</p>
                  <div className="text-[11px] text-[#555] space-y-1 pt-2 border-t border-[#EAE8E2]">
                    <div><strong>해결 조치:</strong> {p.actions.join(' / ')}</div>
                    <div><strong>배운 점:</strong> {p.learnings.join(' / ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competencies */}
          <div>
            <h2 className="text-sm font-mono font-bold text-[#1E1E1E] uppercase tracking-wider pb-1 border-b border-[#E0DED8] mb-3">
              Core Competencies (핵심 역량)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {COMPETENCIES_DATA.map((comp) => (
                <div key={comp.id} className="text-xs">
                  <span className="font-bold text-[#111]">{comp.number}. {comp.title}</span>
                  <p className="text-[#555] mt-0.5">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-sm font-mono font-bold text-[#1E1E1E] uppercase tracking-wider pb-1 border-b border-[#E0DED8] mb-2">
                Education (학력)
              </h2>
              {EDUCATION_DATA.map((e) => (
                <div key={e.school} className="text-xs">
                  <span className="font-bold">{e.school}</span> ({e.degree})
                  <div className="text-[#E65100] font-medium mt-0.5">{e.majors.join(' / ')}</div>
                  <p className="text-[#555] mt-1">{e.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm font-mono font-bold text-[#1E1E1E] uppercase tracking-wider pb-1 border-b border-[#E0DED8] mb-2">
                Certificates & Language (자격 및 어학)
              </h2>
              <ul className="text-xs text-[#444] space-y-1">
                {CERTIFICATIONS_DATA.map((c) => (
                  <li key={c.name} className="flex justify-between">
                    <span>{c.name}</span>
                    <span className="text-[#888] font-mono">{c.category}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
