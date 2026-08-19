import React from 'react';
import { Scale, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PARTNERS } from '../data/firmData';

interface HeroProps {
  onSelectPartner: (partnerId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectPartner }) => {
  return (
    <section className="relative pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-[#070d18] bg-subtle-grid border-b border-[#1e2f4d]">
      {/* Subtle architectural ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#1e3a8a]/10 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#c5a059]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badging */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#0f1a2e] border border-[#1e2f4d] text-[#c5a059] text-[11px] uppercase tracking-[0.2em] font-sans">
            <Scale className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Civil & Business Dispute Advocates</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#f1f5f9] tracking-tight leading-[1.08] mb-6">
            Preeminent Advocacy for <br className="hidden sm:block" />
            <span className="text-[#c5a059] italic font-serif">Complex Business Disputes</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#cbd5e1] font-sans font-light leading-relaxed max-w-3xl mb-10 tracking-wide">
            GFCW Law provides sophisticated counsel and representation in complex civil and commercial litigation, with a focus on high-value entity disputes, fiduciary controversies, contract enforcement, and other significant business disputes in federal and state courts.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-14">
            <a
              href="mailto:info@gfcwlaw.com"
              id="hero-initiate-consultation-btn"
              className="bg-[#c5a059] hover:bg-[#d6b572] text-[#070d18] font-bold text-xs tracking-[0.2em] uppercase px-8 py-3.5 flex items-center justify-center space-x-2 transition-all shadow-lg shadow-[#c5a059]/10"
            >
              <span>Request Counsel & Conflict Check</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#practices"
              id="hero-explore-practices-btn"
              className="border border-[#1e2f4d] hover:border-[#c5a059]/50 bg-[#0f1a2e] hover:bg-[#13223d] text-[#f1f5f9] text-xs tracking-[0.15em] uppercase px-7 py-3.5 flex items-center justify-center space-x-2 transition-all"
            >
              <span>Explore 13 Practice Areas</span>
            </a>
          </div>
        </div>

        {/* Attorneys Quick Access Bar */}
        <div className="border-t border-[#1e2f4d] pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] font-sans text-[#c5a059] font-semibold">Attorneys</p>
              <p className="text-xs text-[#94a3b8] font-sans mt-0.5">Select a partner to examine their trial dossier and credentials</p>
            </div>
          </div>

          {/* Partner Quick Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                id={`hero-partner-card-${partner.id}`}
                onClick={() => onSelectPartner(partner.id)}
                className="group cursor-pointer bg-[#0d172a] hover:bg-[#13223d] border border-[#1e2f4d] hover:border-[#c5a059]/60 p-5 transition-all duration-200 flex flex-col justify-between shadow-sm"
              >
                <div className="mb-3">
                  <img
                    src={partner.photo}
                    alt={partner.fullName}
                    className="w-16 h-16 rounded-full object-cover border border-[#1e2f4d] group-hover:border-[#c5a059]/60 transition-colors"
                  />
                </div>
                <div>
                  <h2 className="text-base font-serif font-medium text-[#f1f5f9] group-hover:text-[#c5a059] transition-colors">
                    {partner.fullName}
                  </h2>
                  <p className="text-xs text-[#94a3b8] font-sans line-clamp-1 mt-0.5">{partner.title}</p>
                  <p className="text-[11px] text-[#cbd5e1] font-sans line-clamp-2 mt-2 leading-relaxed opacity-80">{partner.role}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#1e2f4d] flex items-center justify-between text-[11px] text-[#c5a059] uppercase tracking-wider font-sans">
                  <span>Open Dossier</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
