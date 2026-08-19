import React, { useState, useMemo } from 'react';
import { Search, Scale, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  onSelectPractice: (practice: PracticeArea) => void;
}

const CATEGORIES = [
  'All 13 Disciplines',
  'Litigation & Trials',
  'Corporate Governance',
  'Contracts & Commercial',
  'Restructuring & Equity'
] as const;

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  onSelectPractice
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All 13 Disciplines');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPractices = useMemo(() => {
    return PRACTICE_AREAS.filter((practice) => {
      const matchesCategory =
        selectedCategory === 'All 13 Disciplines' || practice.category === selectedCategory;
      const matchesSearch =
        practice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        practice.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        practice.keyServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        practice.statutoryFocus.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="practices" className="py-16 bg-[#070d18] border-b border-[#1e2f4d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-[#0f1a2e] border border-[#1e2f4d] text-[#c5a059] text-[11px] uppercase tracking-[0.2em] font-sans mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Practice Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#f1f5f9] tracking-tight">
              Practice Areas
            </h2>
            <p className="text-[#94a3b8] text-sm sm:text-base font-light mt-3 max-w-2xl font-sans tracking-wide">
              GFCW Law focuses exclusively on high-value civil controversies, business governance, commercial contracts, and enterprise dispute resolution.
            </p>
          </div>

          <div className="text-right font-sans">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a059] block font-semibold">
              13 Core Areas of Practice
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#94a3b8]">
              Federal • State • Chancery • Arbitral Forums
            </span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  id={`practice-cat-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-xs uppercase tracking-[0.15em] px-4 py-2 transition-all font-sans ${
                    selectedCategory === category
                      ? 'bg-[#c5a059] text-[#070d18] font-bold shadow-md'
                      : 'bg-[#0f1a2e] text-[#cbd5e1] hover:text-[#f1f5f9] hover:bg-[#13223d] border border-[#1e2f4d]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search practice area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="practice-search-input"
                className="w-full bg-[#0f1a2e] border border-[#1e2f4d] focus:border-[#c5a059] px-3.5 py-2 pl-9 text-xs text-[#f1f5f9] placeholder-slate-500 focus:outline-none transition-colors font-sans"
              />
              <Search className="w-3.5 h-3.5 text-[#94a3b8] absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94a3b8] hover:text-[#f1f5f9]"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Practice Areas Grid */}
        {filteredPractices.length === 0 ? (
          <div className="p-12 text-center bg-[#0d172a] border border-[#1e2f4d]">
            <p className="text-sm text-[#94a3b8]">No practice disciplines matched your search query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All 13 Disciplines');
              }}
              className="mt-3 text-xs uppercase tracking-[0.15em] text-[#c5a059] hover:underline"
            >
              Clear filters and view all 13 practice areas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPractices.map((practice) => (
              <div
                key={practice.id}
                id={`practice-card-${practice.id}`}
                className="group bg-[#0d172a] hover:bg-[#13223d] border border-[#1e2f4d] hover:border-[#c5a059]/50 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm"
              >
                <div>
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] uppercase font-sans tracking-[0.2em] text-[#c5a059] font-bold">
                      {practice.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-[#f1f5f9] font-medium group-hover:text-[#c5a059] transition-colors mb-2.5">
                    {practice.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#94a3b8] leading-relaxed line-clamp-3 mb-4 font-sans">
                    {practice.shortDescription}
                  </p>

                  {/* Key Services Preview */}
                  <div className="space-y-1.5 pt-3 border-t border-[#1e2f4d] mb-4">
                    {practice.keyServices.slice(0, 2).map((srv, sIdx) => (
                      <div key={sIdx} className="text-[11px] text-[#cbd5e1] flex items-center space-x-2 line-clamp-1 font-sans">
                        <span className="w-1 h-1 bg-[#c5a059] shrink-0" />
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Button */}
                <div className="pt-4 border-t border-[#1e2f4d] flex items-center font-sans">
                  <button
                    onClick={() => onSelectPractice(practice)}
                    id={`view-details-btn-${practice.id}`}
                    className="text-xs uppercase tracking-[0.15em] text-[#c5a059] group-hover:text-white font-medium flex items-center space-x-1"
                  >
                    <span>Practice Dossier</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
