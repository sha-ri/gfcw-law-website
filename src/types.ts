export interface Partner {
  id: string;
  initials: 'ZG' | 'SF' | 'AC' | 'JW';
  fullName: string;
  firstName?: string;
  photo: string;
  title: string;
  role: string;
  office: string;
  phone: string;
  email: string;
  education: string[];
  admissions: string[];
  bio: string;
  quote: string;
  experienceYears: number;
  practiceAreas: string[];
  representativeVictories: {
    matter: string;
    result: string;
    description: string;
  }[];
  honors: string[];
}

export interface PracticeArea {
  id: string;
  name: string;
  shortDescription: string;
  category: 'Litigation & Trials' | 'Corporate Governance' | 'Contracts & Commercial' | 'Restructuring & Equity';
  leadPartnerInitials: ('ZG' | 'SF' | 'AC' | 'JW')[];
  overview: string;
  keyServices: string[];
  typicalDisputes: string[];
  statutoryFocus: string;
  representativeCaseStudy: {
    title: string;
    outcome: string;
    summary: string;
  };
}

export interface OfficeLocation {
  city: string;
  role: string;
  address: string;
  suite: string;
  phone: string;
  fax: string;
}
