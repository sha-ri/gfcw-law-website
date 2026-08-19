import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { PARTNERS } from '../data/firmData';
import gfcwLockup from '../assets/branding/gfcw-lockup-gold-cream.svg';

interface NavbarProps {
  onSelectPartner: (partnerId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectPartner }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070d18]/95 backdrop-blur-md border-b border-[#1e2f4d] shadow-2xl py-3.5' 
          : 'bg-[#070d18]/85 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Crest */}
          <a href="#" className="flex items-center group" id="navbar-brand-link">
            <img
              src={gfcwLockup}
              alt="GFCW Law – Civil & Business Litigation"
              className="h-10 sm:h-11 w-auto"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] uppercase tracking-[0.2em] font-sans text-[#cbd5e1]">
            {/* Partners Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPartnerDropdownOpen(!partnerDropdownOpen)}
                onMouseEnter={() => setPartnerDropdownOpen(true)}
                className="hover:text-[#c5a059] transition-colors flex items-center space-x-1 py-1 focus:outline-none uppercase"
                id="nav-partners-link"
              >
                <span>Partners</span>
                <ChevronDown className="w-3 h-3 text-[#c5a059] opacity-70" />
              </button>

              {partnerDropdownOpen && (
                <div 
                  onMouseLeave={() => setPartnerDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-[#0d172a] border border-[#1e2f4d] shadow-2xl py-2 z-50 animate-fadeIn"
                >
                  <div className="px-3 py-1.5 border-b border-[#1e2f4d]/60 text-[10px] uppercase tracking-wider text-[#94a3b8]">
                    Firm Owners Dossiers
                  </div>
                  {PARTNERS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onSelectPartner(p.id);
                        setPartnerDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2.5 hover:bg-[#13223d] text-xs flex items-center justify-between group/item transition-colors"
                    >
                      <div className="flex items-center space-x-2.5">
                        <span className="w-7 h-7 flex items-center justify-center bg-[#070d18] border border-[#1e2f4d] font-crest text-[10px] text-[#c5a059] font-bold">
                          {p.initials}
                        </span>
                        <div>
                          <span className="text-[#f1f5f9] font-medium block text-xs group-hover/item:text-[#c5a059]">{p.fullName}</span>
                          <span className="text-[10px] text-[#94a3b8] block">{p.title}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#practices" className="hover:text-[#c5a059] transition-colors" id="nav-practices-link">
              Practice Areas
            </a>
            <a href="#doctrine" className="hover:text-[#c5a059] transition-colors" id="nav-doctrine-link">
              Advocacy
            </a>
            <a href="#offices" className="hover:text-[#c5a059] transition-colors" id="nav-offices-link">
              Contact
            </a>
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex flex-col items-end space-y-1.5">
            <a
              href="tel:+14075028068"
              id="navbar-intake-cta-btn"
              className="relative group overflow-hidden bg-[#c5a059] text-[#070d18] font-bold text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-[#d6b572] transition-all duration-200 shadow-md"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>(407) 502-8068</span>
              </span>
            </a>
            <a
              href="mailto:info@gfcwlaw.com"
              className="text-[10px] tracking-wider text-[#94a3b8] hover:text-[#c5a059] transition-colors font-sans"
            >
              info@gfcwlaw.com
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="tel:+14075028068"
              className="bg-[#c5a059] text-[#070d18] text-xs font-bold px-3 py-1.5 uppercase tracking-wider"
            >
              (407) 502-8068
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 text-[#e2e8f0] opacity-80 hover:opacity-100 border border-[#1e2f4d]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1120] border-b border-[#1e2f4d] px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="py-2 border-b border-[#1e2f4d]/50">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] block mb-2">The Four Firm Owners</span>
            <div className="grid grid-cols-2 gap-2">
              {PARTNERS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSelectPartner(p.id);
                  }}
                  className="p-2 bg-[#0f1a2e] border border-[#1e2f4d] text-left flex items-center space-x-2"
                >
                  <span className="font-crest text-xs font-bold text-[#c5a059]">{p.initials}</span>
                  <span className="text-xs text-[#e2e8f0]">{p.fullName}</span>
                </button>
              ))}
            </div>
          </div>
          <a
            href="#practices"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-[0.2em] text-[#cbd5e1] hover:text-[#c5a059] py-2 border-b border-[#1e2f4d]/40"
          >
            Practice Areas
          </a>
          <a
            href="#doctrine"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-[0.2em] text-[#cbd5e1] hover:text-[#c5a059] py-2 border-b border-[#1e2f4d]/40"
          >
            Advocacy
          </a>
          <a
            href="#offices"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs uppercase tracking-[0.2em] text-[#cbd5e1] hover:text-[#c5a059] py-2 border-b border-[#1e2f4d]/40"
          >
            Contact
          </a>
          <div className="pt-2 flex flex-col space-y-2">
            <a
              href="tel:+14075028068"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#c5a059] text-[#070d18] py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-center"
            >
              (407) 502-8068
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
