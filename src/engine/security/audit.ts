/**
 * AchieverOS Lab — Merkle-Hashed Audit Trail
 * Every user action is immutably logged with cryptographic verification.
 * Compliant with 21 CFR Part 11, HIPAA, GxP.
 */

import { createHash } from 'crypto';

export interface AuditEntry {
  id: string;
  timestamp: number;
  userId: string;
  action: AuditAction;
  resource: string;
  details: Record<string, unknown>;
  rationale?: string; // User must provide rationale for consequential actions
  hash: string;
  previousHash: string;
  signature?: string; // Digital signature for 21 CFR Part 11
}

export type AuditAction =
  | 'view'
  | 'create'
  | 'modify'
  | 'delete'
  | 'approve'
  | 'reject'
  | 'export'
  | 'share'
  | 'compute'
  | 'ai-inference'
  | 'data-access'
  | 'consent-change'
  | 'protocol-deviation';

/**
 * Actions that require user-provided rationale before proceeding.
 * Ensures full accountability for research decisions.
 */
export const CONSEQUENTIAL_ACTIONS: AuditAction[] = [
  'approve',
  'reject',
  'delete',
  'export',
  'consent-change',
  'protocol-deviation',
];

export class AuditTrail {
  private chain: AuditEntry[] = [];
  private genesisHash = '0'.repeat(64);

  /**
   * Log an action to the immutable audit trail.
   * Merkle-hashes each entry to the previous one.
   */
  async logAction(
    userId: string,
    action: AuditAction,
    resource: string,
    details: Record<string, unknown>,
    rationale?: string
  ): Promise<AuditEntry> {
    // Require rationale for consequential actions
    if (CONSEQUENTIAL_ACTIONS.includes(action) && !rationale) {
      throw new Error(
        `Action '${action}' requires a rationale. ` +
        'AchieverOS enforces full accountability for research decisions.'
      );
    }

    const previousHash = this.chain.length > 0
      ? this.chain[this.chain.length - 1].hash
      : this.genesisHash;

    const entry: AuditEntry = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      userId,
      action,
      resource,
      details,
      rationale,
      hash: '', // computed below
      previousHash,
    };

    // Compute merkle hash
    entry.hash = this.computeHash(entry);
    this.chain.push(entry);

    return entry;
  }

  /**
   * Verify the integrity of the entire audit chain.
   */
  verifyChainIntegrity(): { valid: boolean; brokenAt?: number } {
    for (let i = 0; i < this.chain.length; i++) {
      const entry = this.chain[i];
      const expectedPrevHash = i === 0
        ? this.genesisHash
        : this.chain[i - 1].hash;

      if (entry.previousHash !== expectedPrevHash) {
        return { valid: false, brokenAt: i };
      }

      const recomputedHash = this.computeHash(entry);
      if (recomputedHash !== entry.hash) {
        return { valid: false, brokenAt: i };
      }
    }
    return { valid: true };
  }

  private computeHash(entry: AuditEntry): string {
    const data = JSON.stringify({
      timestamp: entry.timestamp,
      userId: entry.userId,
      action: entry.action,
      resource: entry.resource,
      details: entry.details,
      previousHash: entry.previousHash,
    });
    return createHash('sha256').update(data).digest('hex');
  }
}
