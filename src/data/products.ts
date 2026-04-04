import { Product } from '@/lib/types';

export const PRODUCTS: Record<string, Product> = {
  'standard-letter': {
    id: 'standard-letter',
    name: 'Standard Appeal Letter',
    price: 599,
    description: 'AI-generated personalised appeal letter using the correct legal grounds for your specific situation.',
    features: [
      'Personalised to your circumstances',
      'Correct legal references',
      'Formatted for submission',
      'Deadline reminder'
    ]
  },
  'premium-pack': {
    id: 'premium-pack',
    name: 'Premium Appeal Pack',
    price: 999,
    description: 'Everything in Standard plus escalation template, evidence checklist, and operator-specific strategy guide.',
    features: [
      'Everything in Standard',
      'Escalation letter if rejected',
      'Evidence collection checklist',
      'Operator-specific strategy',
      'Priority email support'
    ]
  },
  'court-defence': {
    id: 'court-defence',
    name: 'Court Defence Pack',
    price: 2999,
    description: 'Complete County Court defence pack with witness statement, legal arguments, and step-by-step court guide.',
    features: [
      'Witness statement template',
      'Legal defence arguments',
      'Step-by-step court guide',
      'Key case law references',
      'What to say on the day',
      'Priority email support'
    ]
  }
};

export const DISCOUNT_CODES: Record<string, { percentOff: number; maxUses?: number }> = {
  LAUNCH50: { percentOff: 50, maxUses: 100 },
  TESTFREE: { percentOff: 100 }
};
