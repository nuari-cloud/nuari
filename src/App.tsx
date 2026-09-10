/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutBentoSection from './components/AboutBentoSection';
import NumbersSection from './components/NumbersSection';
import ProjectsSection from './components/ProjectsSection';
import CompetenciesSection from './components/CompetenciesSection';
import ExperienceSection from './components/ExperienceSection';
import NextVisionSection from './components/NextVisionSection';
import ContactSection from './components/ContactSection';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import { ProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1E1E1E] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Top Floating Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutBentoSection />
        <NumbersSection />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <CompetenciesSection />
        <ExperienceSection />
        <NextVisionSection />
        <ContactSection />
      </main>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

