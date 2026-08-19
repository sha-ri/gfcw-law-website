import React from 'react';
import { X, Award, GraduationCap, Scale, Briefcase, Mail, Phone, MapPin, CheckCircle, FileText } from 'lucide-react';
import { Partner } from '../types';

interface PartnerModalProps {
  partner: Partner | null;
  onClose: () => void;
  onSelectPracticeArea: (practiceName: string) => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({
  partner,
  onClose,
  onSelectPracticeArea
}) => {
  if (!partner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a1120] border border-[#1e2f4d] shadow-2xl text-[#f1f5f9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#0a1120]/95 backdrop-blur-sm border-b border-[#1e2f4d] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3.5">
            <span className="text-3xl font-light text-[#c5a059] font-crest">
              {partner.initials}
            </span>
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#c5a059]">Partner Dossier</span>
              <h2 className="text-lg font-serif text-[#f1f5f9] font-medium">{partner.fullName}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-partner-modal-btn"
            className="p-1.5 text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1e2f4d] hover:border-[#c5a059]/40 transition-all"
            aria-label="Close Partner Profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 lg:p-8 space-y-8">
          
          {/* Top Banner / Role & Contact */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[#0f1a2e] border border-[#1e2f4d]">
            <div>
              <p className="text-sm font-serif font-semibold text-[#c5a059]">{partner.title}</p>
              <p className="text-sm text-[#cbd5e1] font-sans mt-0.5">{partner.role}</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-[#94a3b8] font-sans">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{partner.office}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{partner.phone}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{partner.email}</span>
                </span>
              </div>
            </div>
            
            <a
              href={`mailto:${partner.email}`}
              id={`partner-modal-book-${partner.id}`}
              className="whitespace-nowrap bg-[#c5a059] hover:bg-[#d6b572] text-[#070d18] font-bold text-xs uppercase tracking-[0.15em] px-6 py-3 transition-all flex items-center justify-center space-x-2 shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>Consult {partner.firstName ?? partner.initials}</span>
            </a>
          </div>

          {/* Partner Quote */}
          <blockquote className="border-l-2 border-[#c5a059] pl-5 py-2.5 italic text-base lg:text-lg font-serif text-[#f1f5f9] bg-[#0f1a2e]/60">
            "{partner.quote}"
          </blockquote>

          {/* Full Biography */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-3 flex items-center space-x-2 font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Biography</span>
            </h3>
            {partner.bio.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-sm text-[#cbd5e1] leading-relaxed font-sans mb-3 last:mb-0">{paragraph}</p>
            ))}
          </div>

          {/* Practice Focus Tags */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-3 flex items-center space-x-2 font-semibold">
              <Scale className="w-4 h-4" />
              <span>Primary Practice Focus</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {partner.practiceAreas.map((area, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    onClose();
                    onSelectPracticeArea(area);
                  }}
                  className="text-xs px-3 py-1.5 bg-[#0f1a2e] hover:bg-[#13223d] text-[#cbd5e1] hover:text-[#c5a059] border border-[#1e2f4d] hover:border-[#c5a059]/40 transition-colors font-sans"
                >
                  {area} &rarr;
                </button>
              ))}
            </div>
          </div>

          {/* Representative Victories / Landmark Matters */}
          {partner.representativeVictories.length > 0 && (
            <div>
              <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-3 flex items-center space-x-2 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Representative Victories</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partner.representativeVictories.map((vic, idx) => (
                  <div key={idx} className="p-4 bg-[#0f1a2e] border border-[#1e2f4d]">
                    <p className="text-xs font-sans text-[#c5a059] font-semibold tracking-wide">{vic.result}</p>
                    <h4 className="text-sm font-serif font-medium text-[#f1f5f9] mt-1">{vic.matter}</h4>
                    <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed font-sans">{vic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education & Bar Admissions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#1e2f4d] font-sans">
            <div>
              <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-3 flex items-center space-x-2 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#cbd5e1]">
                {partner.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#c5a059] font-bold">•</span>
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-3 flex items-center space-x-2 font-semibold">
                <Award className="w-4 h-4" />
                <span>Admissions & Honors</span>
              </h3>
              <ul className="space-y-2 text-xs text-[#cbd5e1]">
                {partner.admissions.map((adm, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#c5a059] font-bold">•</span>
                    <span>{adm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#070d18] border-t border-[#1e2f4d] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans">
          <span className="text-xs text-[#94a3b8]">Attorney Advertising • Prior results do not guarantee similar outcome.</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 border border-[#1e2f4d] text-xs uppercase tracking-[0.15em] text-[#94a3b8] hover:text-[#f1f5f9] bg-[#0f1a2e]"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
