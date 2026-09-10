import { useState, type FormEvent } from 'react';
import { Mail, Copy, Check, Send, Sparkles, ExternalLink, MessageSquare, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[포트폴리오 문의] ${senderOrg ? `${senderOrg} ` : ''}${senderName || '채용 담당자'}`);
    const body = encodeURIComponent(`안녕하세요, 김민서 실무자님.\n\n${message}\n\n- 발신자: ${senderName}\n- 소속: ${senderOrg}\n`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
    setTimeout(() => setSentNotice(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-[#E65100] text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <span>// Contact & Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight mb-3">
            함께 일하고 싶은 실무자를 찾고 계신가요?
          </h2>
          <p className="text-base text-[#666] max-w-xl mx-auto">
            정확한 행정과 원활한 커뮤니케이션으로 조직의 프로젝트를 성공적으로 연결하겠습니다.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          
          {/* Left Direct Card (Col 5) */}
          <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-[#E5E5DF] shadow-2xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#8C8C8C] uppercase tracking-wider block mb-3">
                DIRECT CONTACT
              </span>
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-2">
                편하게 메일을 남겨주세요
              </h3>
              <p className="text-xs text-[#666] leading-relaxed mb-6">
                채용 면접, 실무 포지션 제안, 프로젝트 협업 등 어떤 문의든 확인 후 신속하게 회신드리겠습니다.
              </p>

              {/* Email Box */}
              <div className="p-3.5 rounded-xl bg-[#FAF9F7] border border-[#EAE8E2] mb-6">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] text-[#8C8C8C] font-mono">PRIMARY EMAIL</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm font-medium">
                    수신 확인
                  </span>
                </div>
                <div className="font-mono text-sm font-bold text-[#1E1E1E] break-all select-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              {/* Copy & Direct Mail buttons */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-[#D5D4CC] text-xs font-semibold text-[#1E1E1E] hover:border-[#E65100] hover:text-[#E65100] transition-colors shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">이메일 주소 복사완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>이메일 주소 복사하기</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1E1E1E] text-white text-xs font-semibold hover:bg-[#E65100] transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>기본 메일 앱으로 보내기</span>
                </a>
              </div>
            </div>

            {/* Quick metadata */}
            <div className="pt-6 border-t border-[#F0EFEA] text-xs text-[#737373] space-y-1 mt-6">
              <div className="flex justify-between">
                <span>활동 지역:</span>
                <span className="font-medium text-[#262626]">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex justify-between">
                <span>링크드인:</span>
                <span className="text-[#8C8C8C]">{PERSONAL_INFO.linkedin}</span>
              </div>
            </div>
          </div>

          {/* Right Quick Inquiry Form (Col 7) */}
          <div className="md:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-[#E5E5DF] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#8C8C8C] uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4 text-[#E65100]" />
              <span>QUICK INQUIRY</span>
            </div>
            <h3 className="text-lg font-bold text-[#1E1E1E] mb-4">
              빠른 문의 메시지 작성
            </h3>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#404040] block mb-1">
                    담당자 성함
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="예: 홍길동 인사담당자"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D5D4CC] bg-[#FAF9F7] focus:bg-white focus:border-[#E65100] focus:outline-hidden transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#404040] block mb-1">
                    회사 / 조직명
                  </label>
                  <input
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="예: OOO 교육재단 / 기업"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D5D4CC] bg-[#FAF9F7] focus:bg-white focus:border-[#E65100] focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#404040] block mb-1">
                  문의 및 제안 내용
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="포지션 및 업무 내용, 궁금하신 점을 자유롭게 적어주세요."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#D5D4CC] bg-[#FAF9F7] focus:bg-white focus:border-[#E65100] focus:outline-hidden transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E65100] text-white text-xs font-semibold hover:bg-[#D84315] transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>이메일 전송 클라이언트로 연결하기</span>
              </button>

              {sentNotice && (
                <p className="text-xs text-center text-emerald-700 font-medium animate-in fade-in">
                  메일 작성 창이 열렸습니다. 발송을 완료해주세요!
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Signature & Stamp Area (Inspired by reference footer stamp) */}
        <div className="pt-12 border-t border-[#EAE8E2] flex flex-col items-center text-center space-y-4">
          
          {/* Circular Stamp */}
          <div className="w-16 h-16 rounded-full bg-[#B71C1C] text-white p-1 flex flex-col items-center justify-center shadow-md border-2 border-white rotate-[-3deg] hover:rotate-0 transition-transform">
            <span className="text-[8px] font-mono tracking-widest uppercase text-red-200">
              OPERATIONS
            </span>
            <span className="text-xs font-extrabold tracking-tight">
              김민서
            </span>
            <span className="text-[7px] font-mono text-red-200">
              2025-2026
            </span>
          </div>

          <div>
            <p className="text-xs font-medium text-[#737373]">
              Thank you for visiting here
            </p>
            <p className="text-sm font-bold text-[#1E1E1E]">
              복잡한 것을 정리하고 신뢰할 수 있는 결과를 만듭니다.
            </p>
          </div>

          {/* Signature font aesthetic */}
          <div className="font-serif italic text-2xl text-[#525252] select-none pt-1">
            Minseo Kim
          </div>

          <div className="flex items-center justify-between w-full pt-6 text-[11px] text-[#8C8C8C] border-t border-[#F0EFEA]">
            <span>© 2026 Minseo Kim. All rights reserved.</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#E65100] transition-colors flex items-center gap-1 font-medium"
            >
              맨 위로 이동 <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
