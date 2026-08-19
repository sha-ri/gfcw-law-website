import React from 'react';
import { X, FileCheck, AlertTriangle, BookOpen } from 'lucide-react';
import { PracticeArea } from '../types';

interface PracticeDetailModalProps {
  practice: PracticeArea | null;
  onClose: () => void;
}

export const PracticeDetailModal: React.FC<PracticeDetailModalProps> = ({
  practice,
  onClose
}) => {
  if (!practice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a1120] border border-[#1e2f4d] shadow-2xl text-[#f1f5f9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#0a1120]/95 backdrop-blur-sm border-b border-[#1e2f4d] px-6 py-4 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#c5a059]">{practice.category}</span>
            <h2 className="text-xl font-serif text-[#f1f5f9] font-medium">{practice.name}</h2>
          </div>
          <button
            onClick={onClose}
            id="close-practice-modal-btn"
            className="p-1.5 text-[#94a3b8] hover:text-[#f1f5f9] border border-[#1e2f4d] hover:border-[#c5a059]/40 transition-all"
            aria-label="Close Practice Area Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 lg:p-8 space-y-6">
          
          {/* Overview Statement */}
          <div className="p-5 bg-[#0f1a2e] border border-[#1e2f4d]">
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-2 font-semibold">Practice Overview & Doctrine</h3>
            <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed font-sans">{practice.overview}</p>
            
            {/* Statutory & Legal Framework */}
            <div className="mt-4 pt-3 border-t border-[#1e2f4d] flex items-start space-x-2 text-xs text-[#94a3b8] font-sans">
              <BookOpen className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#f1f5f9]">Statutory Foundation & Authorities: </span>
                <span>{practice.statutoryFocus}</span>
              </div>
            </div>
          </div>

          {/* Key Advisory & Litigation Services */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-3 flex items-center space-x-2 font-semibold">
              <FileCheck className="w-4 h-4" />
              <span>Core Mandates & Legal Services</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {practice.keyServices.map((service, idx) => (
                <div key={idx} className="p-3.5 bg-[#0f1a2e] border border-[#1e2f4d] flex items-start space-x-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-1.5 shrink-0" />
                  <span className="text-xs text-[#e2e8f0] font-medium font-sans">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Dispute Scenarios */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#c5a059] mb-3 flex items-center space-x-2 font-semibold">
              <AlertTriangle className="w-4 h-4" />
              <span>Common Fact Patterns</span>
            </h3>
            <div className="space-y-2">
              {practice.typicalDisputes.map((dispute, idx) => (
                <div key={idx} className="p-3 bg-[#0f1a2e] border border-[#1e2f4d]/60 text-xs text-[#94a3b8] flex items-start space-x-2.5 font-sans">
                  <span className="text-[#c5a059] font-bold">0{idx + 1}.</span>
                  <span className="text-[#cbd5e1]">{dispute}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#070d18] border-t border-[#1e2f4d] px-6 py-4 flex items-center justify-center font-sans">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 border border-[#1e2f4d] text-xs uppercase tracking-[0.15em] text-[#94a3b8] hover:text-[#f1f5f9] bg-[#0f1a2e]"
          >
            Back to Directory
          </button>
        </div>

      </div>
    </div>
  );
};
