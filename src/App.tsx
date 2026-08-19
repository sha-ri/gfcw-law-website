import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnerModal } from './components/PartnerModal';
import { PracticeAreas } from './components/PracticeAreas';
import { PracticeDetailModal } from './components/PracticeDetailModal';
import { DisputeResolutionApproach } from './components/DisputeResolutionApproach';
import { OfficesSection } from './components/OfficesSection';
import { Footer } from './components/Footer';
import { PARTNERS, PRACTICE_AREAS } from './data/firmData';
import { Partner, PracticeArea } from './types';

export default function App() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  const handleSelectPartnerById = (partnerId: string) => {
    const p = PARTNERS.find((item) => item.id === partnerId);
    if (p) {
      setSelectedPartner(p);
    }
  };

  const handleSelectPracticeByName = (practiceName: string) => {
    const normalized = practiceName.toLowerCase();
    const found = PRACTICE_AREAS.find(
      (p) => p.name.toLowerCase() === normalized || p.name.toLowerCase().includes(normalized)
    );
    if (found) {
      setSelectedPractice(found);
    } else {
      // Scroll to practice section
      const el = document.getElementById('practices');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-[#e2e8f0] flex flex-col selection:bg-[#c5a059] selection:text-[#070d18]">
      {/* Navigation */}
      <Navbar
        onSelectPartner={handleSelectPartnerById}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Big Law Statement & 4 Partner Previews */}
        <Hero
          onSelectPartner={handleSelectPartnerById}
        />

        {/* All 13 Areas of Law Section */}
        <PracticeAreas
          onSelectPractice={(practice) => setSelectedPractice(practice)}
        />

        {/* Big Law Dispute Resolution Strategy & Doctrine */}
        <DisputeResolutionApproach />

        {/* Offices & Jurisdictions */}
        <OfficesSection />
      </main>

      {/* Footer */}
      <Footer
        onSelectPartner={handleSelectPartnerById}
        onSelectPractice={handleSelectPracticeByName}
      />

      {/* Partner Dossier Modal */}
      <PartnerModal
        partner={selectedPartner}
        onClose={() => setSelectedPartner(null)}
        onSelectPracticeArea={handleSelectPracticeByName}
      />

      {/* Practice Area Detail Modal */}
      <PracticeDetailModal
        practice={selectedPractice}
        onClose={() => setSelectedPractice(null)}
      />
    </div>
  );
}
