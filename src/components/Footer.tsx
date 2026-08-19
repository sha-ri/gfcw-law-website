import React from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { PARTNERS, OFFICES } from '../data/firmData';
import gfcwLockup from '../assets/branding/gfcw-lockup-gold-cream.svg';

interface FooterProps {
  onSelectPartner: (partnerId: string) => void;
  onSelectPractice: (practiceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectPartner,
  onSelectPractice
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070d18] text-[#f1f5f9] border-t border-[#1e2f4d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: The Firm & Owners */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src={gfcwLockup}
                alt="GFCW Law – Civil & Business Litigation"
                className="h-9 w-auto"
              />
            </div>
            <p className="text-xs leading-relaxed text-[#94a3b8] pr-6 font-sans">
              GFCW Law is a premier law firm dedicated to the defense and prosecution of high-exposure business disputes, commercial breach of contract, fiduciary duties, and corporate governance controversies across Florida.
            </p>
            
            {/* The Four Owners Monogram Index */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#c5a059] block mb-2 font-semibold">Firm Ownership Dossiers</span>
              <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                {PARTNERS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectPartner(p.id)}
                    className="p-2.5 bg-[#0a1120] border border-[#1e2f4d] hover:border-[#c5a059]/40 text-left transition-colors flex items-center space-x-2.5 shadow-sm"
                  >
                    <span className="text-[#c5a059] font-crest font-bold text-sm">{p.initials}</span>
                    <span className="text-[#cbd5e1] hover:text-[#f1f5f9] truncate font-medium">{p.fullName}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Areas of Law (Part 1) */}
          <div>
            <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-[#c5a059] mb-4 font-semibold">
              Litigation & Contracts
            </h4>
            <ul className="space-y-2 text-xs text-[#94a3b8] font-sans">
              {[
                'Commercial Litigation',
                'Breach of Contract',
                'Alternative Dispute Resolution',
                'Contract Drafting and Review',
                'Unjust Enrichment',
                'Covenant Not to Compete',
                'Defamation'
              ].map((pName) => (
                <li key={pName}>
                  <button
                    onClick={() => onSelectPractice(pName)}
                    className="hover:text-[#c5a059] transition-colors text-left"
                  >
                    {pName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate, Formations & Real Estate */}
          <div>
            <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-[#c5a059] mb-4 font-semibold">
              Corporate & Governance
            </h4>
            <ul className="space-y-2 text-xs text-[#94a3b8] font-sans">
              {[
                'Corporate Law',
                'Business Law',
                'Breach of Fiduciary Duties',
                'Corporate Dissolutions and Receiverships',
                'Incorporation and Business Formation',
                'Real Estate'
              ].map((pName) => (
                <li key={pName}>
                  <button
                    onClick={() => onSelectPractice(pName)}
                    className="hover:text-[#c5a059] transition-colors text-left"
                  >
                    {pName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Offices */}
          <div>
            <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-[#c5a059] mb-4 font-semibold">
              Office Locations
            </h4>
            <div className="space-y-3.5 text-xs text-[#94a3b8] font-sans">
              {OFFICES.map((off) => (
                <div key={off.city} className="border-b border-[#1e2f4d] pb-2.5">
                  <p className="font-semibold text-[#f1f5f9]">{off.city}</p>
                  <p className="text-[11px] text-[#cbd5e1]">{off.address}</p>
                  <p className="text-[11px] text-[#cbd5e1]">{off.suite}</p>
                  <p className="text-[11px] text-[#c5a059] font-medium mt-0.5">{off.phone}</p>
                </div>
              ))}
            </div>
            <a
              href="tel:+14075028068"
              className="mt-4 w-full bg-[#c5a059] text-[#070d18] font-bold text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-[#d6b572] transition-all duration-200 shadow-md flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(407) 502-8068</span>
            </a>
          </div>

        </div>

        {/* Ethical Disclaimers & Bar Compliance */}
        <div className="pt-8 border-t border-[#1e2f4d] text-[11px] text-[#94a3b8] space-y-3 font-sans">
          <p>
            <span className="font-semibold text-[#cbd5e1]">ATTORNEY ADVERTISING NOTICE:</span> Prior results do not guarantee, warrant, or predict a similar outcome in future matters. The information provided on this website is for general informational purposes only and does not constitute formal legal advice. Sending an email, web submission, or case inquiry does not create an attorney-client relationship.
          </p>
          <p>
            GFCW Law operates offices in Orlando and Winter Park, Florida. Attorneys are admitted to practice before the bars and courts designated in their respective professional biographies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 text-xs">
            <span>© {new Date().getFullYear()} GFCW Law. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="mt-2 sm:mt-0 flex items-center space-x-1 text-[#94a3b8] hover:text-[#c5a059] transition-colors"
            >
              <span>Return to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
