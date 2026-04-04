export type FineType = 'council' | 'private';

export interface FineDetails {
  fineType: FineType;
  // Council fields
  councilName?: string;
  contraventionCode?: string;
  // Private fields
  operatorName?: string;
  // Common fields
  vehicleReg: string;
  fineDate: string; // ISO date string
  fineAmount: number;
  discountedAmount?: number;
  location: string;
  circumstances: string;
  // Evidence
  ticketPhotoUrl?: string;
  signagePhotoUrl?: string;
  // POFA specific (private only)
  ntkReceivedDate?: string; // When Notice to Keeper was received
  ntkHasCorrectWording?: boolean;
  driverIdentified?: boolean;
  // Assessment result
  appealStrength?: 'strong' | 'moderate' | 'weak';
  recommendedGrounds?: string[];
  successProbability?: number;
}

export interface AppealLetter {
  id: string;
  fineDetails: FineDetails;
  letterContent: string;
  letterType: 'informal' | 'formal' | 'popla' | 'ias' | 'tribunal';
  createdAt: string;
  status: 'draft' | 'sent' | 'won' | 'lost' | 'pending';
}

export interface Operator {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  type: 'private';
  appealBody: 'POPLA' | 'IAS';
  tradeBody: 'BPA' | 'IPC';
  commonIssues: string[];
  knownWeaknesses: string[];
  pursuesToCourt: boolean;
  usesANPR: boolean;
  averageSuccessRate: number;
  seoTitle: string;
  seoDescription: string;
}

export interface Council {
  slug: string;
  name: string;
  region: string;
  isLondon: boolean;
  annualPCNs?: number;
  appealSuccessRate?: number;
  parkingSurplus?: number;
  enforcementType: 'civil' | 'decriminalised';
  tribunalBody: 'TPT' | 'London Tribunals';
  contactUrl?: string;
  appealUrl?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: 'rights' | 'process' | 'legal' | 'operator' | 'situation';
  content: string; // Will be markdown/JSX
  faqs: { question: string; answer: string }[];
  relatedGuides: string[]; // slugs
  seoTitle: string;
  seoDescription: string;
}

export interface Product {
  id: string;
  name: string;
  price: number; // in pence
  description: string;
  features: string[];
}
