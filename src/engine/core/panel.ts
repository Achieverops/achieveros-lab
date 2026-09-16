/**
 * AchieverOS Lab — Panel State Manager
 * Manages L0-L4 panel lifecycle: open, close, collapse, stack, maximize.
 * Canvas-first principle: dotted canvas is never replaced.
 */

import { create } from 'zustand';

export type PanelLevel = 'L0' | 'L1' | 'L2' | 'L3' | 'L4';
export type PanelPosition = 'left' | 'right' | 'center' | 'bottom' | 'fullspace' | 'modal';
export type PanelState = 'open' | 'collapsed' | 'minimized' | 'closed';

export interface PanelInstance {
  id: string;
  component: string;
  level: PanelLevel;
  position: PanelPosition;
  state: PanelState;
  width: number;
  height: number | 'auto';
  zIndex: number;
  data?: Record<string, unknown>;
}

interface PanelStore {
  panels: Map<string, PanelInstance>;
  activeFullspace: string | null;
  innovationEnvelopeOpen: boolean;
  canvasInteractive: boolean; // always true unless L4 modal

  openPanel: (panel: Omit<PanelInstance, 'state' | 'zIndex'>) => void;
  closePanel: (id: string) => void;
  collapsePanel: (id: string) => void;
  maximizePanel: (id: string) => void;
  toggleInnovationEnvelope: () => void;
}

/**
 * Panel stacking rules:
 * - Max 1 L1 (left vault) open at a time
 * - Max 2 L2 panels visible simultaneously
 * - L3 full-space replaces center content but vault remains
 * - L4 INNOVATION envelope overlays everything but canvas stays accessible
 */
export const usePanelStore = create<PanelStore>((set, get) => ({
  panels: new Map(),
  activeFullspace: null,
  innovationEnvelopeOpen: false,
  canvasInteractive: true,

  openPanel: (panel) => {
    const { panels } = get();
    const newPanel: PanelInstance = {
      ...panel,
      state: 'open',
      zIndex: panels.size + 1,
    };

    // Enforce stacking rules
    if (panel.level === 'L1') {
      // Close any existing L1
      for (const [id, p] of panels) {
        if (p.level === 'L1') panels.delete(id);
      }
    }

    if (panel.level === 'L3') {
      // Track fullspace
      set({ activeFullspace: panel.id });
    }

    panels.set(panel.id, newPanel);
    set({ panels: new Map(panels) });
  },

  closePanel: (id) => {
    const { panels, activeFullspace } = get();
    panels.delete(id);
    set({
      panels: new Map(panels),
      activeFullspace: activeFullspace === id ? null : activeFullspace,
    });
  },

  collapsePanel: (id) => {
    const { panels } = get();
    const panel = panels.get(id);
    if (panel) {
      panel.state = 'collapsed';
      set({ panels: new Map(panels) });
    }
  },

  maximizePanel: (id) => {
    const { panels } = get();
    const panel = panels.get(id);
    if (panel) {
      panel.state = 'open';
      panel.position = 'fullspace';
      panel.level = 'L3';
      set({ panels: new Map(panels), activeFullspace: id });
    }
  },

  toggleInnovationEnvelope: () => {
    const { innovationEnvelopeOpen } = get();
    set({
      innovationEnvelopeOpen: !innovationEnvelopeOpen,
      canvasInteractive: true, // canvas always interactive
    });
  },
}));
