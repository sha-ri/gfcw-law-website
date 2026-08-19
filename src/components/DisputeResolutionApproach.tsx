import React from 'react';
import { Target, Zap, Lock, ShieldCheck, Scale, Cpu } from 'lucide-react';

export const DisputeResolutionApproach: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Trial Readiness as Leverage',
      description: 'Opponents settle favorably when they know trial counsel is ready to seat a jury. Every dispute at GFCW is prepped for verdict from the initial pleading.'
    },
    {
      icon: Zap,
      title: 'Emergency Injunctive Relief',
      description: 'When proprietary assets, non-competes, or commercial real estate rights are threatened, we deploy emergency restraining orders within 24 to 48 hours.'
    },
    {
      icon: ShieldCheck,
      title: 'Fiduciary Defense & Governance',
      description: 'We defend directors, managing partners, and corporate boards against freeze-outs, derivative claims, and corporate opportunity allegations.'
    },
    {
      icon: Scale,
      title: 'Arbitral Command (AAA / ICC)',
      description: 'Mastery of AAA, ICC, and JAMS commercial arbitration rules allows us to bypass prolonged dockets and achieve binding, confidential awards.'
    },
    {
      icon: Lock,
      title: 'Commercial Confidentiality',
      description: 'We understand that public exposure can damage market valuation. We aggressively utilize protective orders and private settlement frameworks.'
    },
    {
      icon: Cpu,
      title: 'Forensic E-Discovery',
      description: 'Dissecting electronic communications, financial ledgers, and forensic accounting trails to uncover decisive leverage.'
    }
  ];

  return (
    <section id="doctrine" className="py-24 bg-[#070d18] border-b border-[#1e2f4d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#0f1a2e] border border-[#1e2f4d] text-[#c5a059] text-[11px] uppercase tracking-[0.2em] font-sans mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Litigation Doctrine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#f1f5f9] tracking-tight">
            Strategic Trial Advocacy
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base font-light mt-3 font-sans tracking-wide">
            Civil and commercial litigation is not merely about legal research—it is the disciplined deployment of procedural rules, forensic evidence, and high-impact trial advocacy to force favorable terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#0a1120] hover:bg-[#0f1a2e] border border-[#1e2f4d] p-6 hover:border-[#c5a059]/40 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 border border-[#1e2f4d] bg-[#070d18] text-[#c5a059] flex items-center justify-center mb-4 group-hover:border-[#c5a059] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif text-[#f1f5f9] font-medium mb-2">{pillar.title}</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
