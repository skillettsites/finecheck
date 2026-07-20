import { Product } from '@/lib/types';

export const PRODUCTS: Record<string, Product> = {
  'standard-letter': {
    id: 'standard-letter',
    name: 'Standard Appeal Letter',
    price: 299,
    wasPrice: 599,
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
    price: 499,
    wasPrice: 999,
    description: 'Everything in Standard plus escalation template, evidence checklist, and operator-specific strategy guide.',
    features: [
      'Everything in Standard',
      'Escalation letter if rejected',
      'Evidence collection checklist',
      'Operator-specific strategy',
      'Second-stage appeal template'
    ]
  },
  'escalation-pack': {
    id: 'escalation-pack',
    name: 'Escalation Pack',
    price: 1999,
    description: 'For fines past the appeal stage: debt collector response letters, POPLA/IAS rejection next steps, Letter Before Claim reply, and a full court defence preparation pack.',
    features: [
      'Debt recovery response letter (DCBL, DRP, Trace, ZZPS)',
      'POPLA/IAS rejected: next steps letter and guide',
      'Letter Before Claim response + protocol checklist',
      'Court defence checklist + witness statement skeleton',
      'Stage-by-stage escalation decision guide',
    ]
  },
};

export const DISCOUNT_CODES: Record<string, { percentOff: number; maxUses?: number }> = {
  LAUNCH50: { percentOff: 50, maxUses: 100 },
  TESTFREE: { percentOff: 100 }
};
