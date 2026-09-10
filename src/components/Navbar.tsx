import { useState, useEffect } from 'react';
import { Mail, Printer, Menu, X, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { name: '소개', href: '#about' },
    { name: '핵심 수치', href: '#numbers' },
    { name: '프로젝트', href: '#projects' },
    { name: '핵심 역량', href: '#competencies' },
    { name: '경력 사항', href: '#career' },
    { name: '지향점', href: '#vision' },
    { name: '연락처', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
        scrolled
          ? 'bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#E7E5E0] shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-[#1E1E1E] text-white flex items-center justify-center font-bold text-sm tracking-wide group-hover:bg-[#E65100] transition-colors">
            M
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-[#1E1E1E] text-base leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-[#737373] tracking-tight">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#525252]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#E65100] transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white border border-[#E5E5DF] text-[#404040] hover:border-[#E65100] hover:text-[#E65100] transition-colors shadow-2xs"
            title="이메일 주소 복사"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">복사완료!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5" />
                <span>이메일 복사</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#1E1E1E] text-white hover:bg-[#E65100] transition-colors shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>이력서 보기/인쇄</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenResume}
            className="p-2 text-xs font-medium rounded-lg bg-[#1E1E1E] text-white"
            title="이력서 보기"
          >
            <Printer className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#404040] hover:text-[#1E1E1E] rounded-lg border border-[#E5E5DF] bg-white"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#E5E5DF] px-4 py-4 space-y-2 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-[#F0EFEA]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-800 font-medium">
                {PERSONAL_INFO.status}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-xs text-[#E65100] font-medium flex items-center gap-1"
            >
              {copiedEmail ? '복사됨!' : '이메일 복사'}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-[#404040] hover:bg-[#F5F4F0] hover:text-[#E65100] rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg bg-[#1E1E1E] text-white"
            >
              <Printer className="w-4 h-4" />
              이력서 보기 및 인쇄하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
