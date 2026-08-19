import React, { useState } from 'react';
import { ArrowUpRight, GraduationCap, Shield, ChevronRight, Award, Mail, Phone, Scale } from 'lucide-react';
import { PARTNERS } from '../data/firmData';
import { Partner } from '../types';

interface PartnerSectionProps {
  onSelectPartner: (partnerId: string) => void;
  onOpenIntake: (preferredPartner?: string) => void;
}

export const PartnerSection: React.FC<PartnerSectionProps> = ({
  onSelectPartner,
  onOpenIntake
}) => {
  return (
    <section id="partners" className="py-24 bg-[#0a0a0a] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/10 text-[#c5a059] text-[11px] uppercase tracking-[0.2em] font-sans mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>Firm Leadership & Ownership</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#e5e5e5] tracking-tight">
              The Four Firm Owners
            </h2>
            <p className="text-[#e5e5e5] opacity-60 text-sm sm:text-base font-light mt-3 max-w-2xl font-sans tracking-wide">
              Gordon, Foster, Chen & Walsh (ZG, SF, AC, JW) are veteran practitioners with decades of federal trial experience, rigorous corporate governance doctrine, and relentless client protection.
            </p>
          </div>

          <div className="flex items-center space-x-3 font-sans text-xs tracking-[0.25em] text-[#e5e5e5] opacity-70 bg-white/[0.02] px-4 py-2 border border-white/10">
            <span className="text-[#c5a059] font-bold font-crest">ZG</span>
            <span>•</span>
            <span className="text-[#c5a059] font-bold font-crest">SF</span>
            <span>•</span>
            <span className="text-[#c5a059] font-bold font-crest">AC</span>
            <span>•</span>
            <span className="text-[#c5a059] font-bold font-crest">JW</span>
          </div>
        </div>

        {/* The Four Partners Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              id={`partner-profile-card-${partner.id}`}
              className="bg-white/[0.02] hover:bg-white/[0.03] border border-white/10 hover:border-[#c5a059]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top background monogram */}
              <div className="absolute -top-6 -right-6 text-[90px] font-crest font-bold text-white/[0.02] pointer-events-none select-none">
                {partner.initials}
              </div>

              <div>
                {/* Top header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl text-[#c5a059] font-light opacity-40 group-hover:opacity-100 transition-opacity font-crest">
                      {partner.initials}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#e5e5e5] font-medium group-hover:text-[#c5a059] transition-colors">
                        {partner.fullName}
                      </h3>
                      <p className="text-[11px] font-sans text-[#c5a059] uppercase tracking-[0.2em] mt-0.5">
                        {partner.title}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-sans px-2.5 py-1 bg-black/40 text-[#e5e5e5] opacity-60 border border-white/5 uppercase tracking-widest">
                    {partner.office}
                  </span>
                </div>

                {/* Role Description */}
                <p className="text-xs text-[#e5e5e5] opacity-80 font-medium border-l border-[#c5a059] pl-3 py-1 mb-4 bg-white/[0.02] font-sans">
                  {partner.role}
                </p>

                {/* Short Bio Snippet */}
                <p className="text-sm text-[#e5e5e5] opacity-60 leading-relaxed mb-6 font-sans line-clamp-3">
                  {partner.bio}
                </p>

                {/* Education & Accolades */}
                <div className="space-y-2 mb-6 bg-black/30 p-4 border border-white/5">
                  <div className="flex items-center space-x-2 text-xs text-[#e5e5e5] opacity-70">
                    <GraduationCap className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span className="line-clamp-1">{partner.education[0]}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-[#e5e5e5] opacity-70">
                    <Award className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                    <span className="line-clamp-1">{partner.honors[0]}</span>
                  </div>
                </div>

                {/* Core Practice Areas Tags */}
                <div className="mb-6">
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] opacity-40 block mb-2">Practice Specialties</span>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.practiceAreas.map((practice, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 bg-white/[0.02] text-[#e5e5e5] opacity-80 border border-white/5"
                      >
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  onClick={() => onSelectPartner(partner.id)}
                  id={`view-partner-dossier-btn-${partner.id}`}
                  className="text-xs uppercase tracking-[0.15em] text-[#e5e5e5] hover:text-[#c5a059] flex items-center justify-center sm:justify-start space-x-1.5 py-2 group/btn font-sans"
                >
                  <span>Examine Trial Record & Bio</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c5a059] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenIntake(`${partner.initials} (${partner.fullName.split(',')[0]})`)}
                  id={`consult-partner-btn-${partner.id}`}
                  className="bg-white/[0.04] hover:bg-[#c5a059] text-[#c5a059] hover:text-[#0a0a0a] border border-white/10 hover:border-[#c5a059] text-xs uppercase tracking-[0.15em] font-semibold px-4 py-2 transition-all flex items-center justify-center space-x-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Consult {partner.initials}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
