/**
 * AchieverOS Lab — Research Ethics & Humanitarian Compliance
 * Ensures all research activities comply with ethical standards:
 * - Declaration of Helsinki
 * - Belmont Report principles
 * - ICH-GCP E6(R2)
 * - Nuremberg Code
 * - CIOMS International Ethical Guidelines
 */

export interface EthicsCheck {
  id: string;
  category: EthicsCategory;
  requirement: string;
  status: 'compliant' | 'non-compliant' | 'pending-review' | 'waived';
  evidence?: string;
  reviewer?: string;
  reviewDate?: number;
}

export type EthicsCategory =
  | 'informed-consent'
  | 'vulnerable-populations'
  | 'data-privacy'
  | 'benefit-risk'
  | 'scientific-validity'
  | 'equitable-selection'
  | 'independent-review'
  | 'humanitarian-impact'
  | 'animal-welfare'
  | 'environmental-impact';

/**
 * Mandatory ethics checks that MUST pass before research actions proceed.
 * These cannot be overridden without dual-sign-off from ethics board.
 */
export const MANDATORY_CHECKS: EthicsCheck[] = [
  {
    id: 'consent-001',
    category: 'informed-consent',
    requirement: 'All participants have provided informed consent documented per ICH-GCP E6(R2)',
    status: 'pending-review',
  },
  {
    id: 'vulnerable-001',
    category: 'vulnerable-populations',
    requirement: 'Additional protections verified for children, pregnant women, prisoners, economically disadvantaged',
    status: 'pending-review',
  },
  {
    id: 'privacy-001',
    category: 'data-privacy',
    requirement: 'All data de-identified per HIPAA Safe Harbor or Expert Determination method',
    status: 'pending-review',
  },
  {
    id: 'benefit-001',
    category: 'benefit-risk',
    requirement: 'Favorable benefit-risk ratio documented and approved by IRB/IEC',
    status: 'pending-review',
  },
  {
    id: 'validity-001',
    category: 'scientific-validity',
    requirement: 'Study design scientifically sound with adequate statistical power',
    status: 'pending-review',
  },
  {
    id: 'equity-001',
    category: 'equitable-selection',
    requirement: 'Subject selection equitable — no exploitation of disadvantaged groups',
    status: 'pending-review',
  },
  {
    id: 'irb-001',
    category: 'independent-review',
    requirement: 'Protocol approved by independent IRB/IEC with ongoing oversight',
    status: 'pending-review',
  },
  {
    id: 'humanitarian-001',
    category: 'humanitarian-impact',
    requirement: 'Research outcomes accessible to affected communities — no gatekeeping of life-saving findings',
    status: 'pending-review',
  },
];

export class EthicsComplianceEngine {
  private checks: EthicsCheck[] = [...MANDATORY_CHECKS];

  /**
   * Validate whether a research action can proceed.
   * Blocks actions when mandatory ethics checks are non-compliant.
   */
  validateAction(action: string, context: Record<string, unknown>): {
    allowed: boolean;
    blockers: EthicsCheck[];
    warnings: EthicsCheck[];
  } {
    const blockers = this.checks.filter(
      c => c.status === 'non-compliant' && MANDATORY_CHECKS.find(m => m.id === c.id)
    );
    const warnings = this.checks.filter(c => c.status === 'pending-review');

    return {
      allowed: blockers.length === 0,
      blockers,
      warnings,
    };
  }

  /**
   * Humanitarian impact assessment for research outcomes.
   * Scores the potential benefit to global health equity.
   */
  assessHumanitarianImpact(research: {
    diseaseArea: string;
    targetPopulation: string;
    globalBurden: 'high' | 'medium' | 'low';
    accessPlan: string;
    pricingModel: 'equitable' | 'standard' | 'premium';
  }): {
    score: number; // 0-100
    recommendation: string;
    requirements: string[];
  } {
    let score = 50;
    const requirements: string[] = [];

    if (research.globalBurden === 'high') score += 20;
    if (research.pricingModel === 'equitable') score += 15;
    if (research.accessPlan.includes('compassionate use')) score += 10;
    if (research.accessPlan.includes('LMIC')) score += 5;

    if (score < 60) {
      requirements.push('Develop equitable access plan for low/middle-income countries');
      requirements.push('Consider compassionate use pathway for unmet medical needs');
    }

    return {
      score,
      recommendation: score >= 80 ? 'Strong humanitarian alignment' :
        score >= 60 ? 'Adequate — consider improvements' :
        'Requires humanitarian impact plan before proceeding',
      requirements,
    };
  }
}
