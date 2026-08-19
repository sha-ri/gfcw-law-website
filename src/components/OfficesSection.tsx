import React from 'react';
import { MapPin, Phone, Printer, Building2 } from 'lucide-react';
import { OFFICES } from '../data/firmData';

export const OfficesSection: React.FC = () => {
  return (
    <section id="offices" className="py-16 bg-[#070d18] border-b border-[#1e2f4d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0f1a2e] border border-[#1e2f4d] text-[#c5a059] text-[11px] uppercase tracking-[0.2em] font-sans mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Office Jurisdictions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#f1f5f9] tracking-tight">
            Offices & Jurisdictions
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base font-light mt-3 max-w-2xl font-sans tracking-wide">
            Serving Orlando and Winter Park, Florida, positioned to manage complex civil litigation and commercial disputes across state and federal courts.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {OFFICES.map((office) => (
            <div
              key={office.city}
              id={`office-card-${office.city.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              className="bg-[#0a1120] hover:bg-[#0f1a2e] border border-[#1e2f4d] hover:border-[#c5a059]/40 p-8 transition-all shadow-md"
            >
              <h3 className="text-2xl font-serif font-medium text-[#f1f5f9] mb-3">{office.city}</h3>

              <p className="text-xs text-[#c5a059] font-sans mb-5 font-semibold tracking-wide">{office.role}</p>

              <div className="space-y-3 text-xs font-sans text-[#cbd5e1]">
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#f1f5f9] font-medium">{office.address}</p>
                    <p className="text-[#94a3b8]">{office.suite}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center space-x-2.5 text-[#94a3b8]">
                  <Printer className="w-4 h-4 shrink-0" />
                  <span>{office.fax}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
