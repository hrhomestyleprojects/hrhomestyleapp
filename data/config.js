/**
 * HR Homestyle Projects — App Configuration
 * ==========================================
 * Edit this file to update company details across the entire app.
 * When adding new features in Claude Code, import this config.
 */

const APP_CONFIG = {
  company: {
    name:        "HR Homestyle Projects",
    tagline:     "Built for Comfort. Designed for Living.",
    abn:         "33 292 735 593",
    phone:       "+61 410 429 982",
    email:       "info@homestyleprojects.com",
    address:     "2 Scenery Drive",
    suburb:      "Clyde North",
    state:       "VIC",
    postcode:    "3978",
    get fullAddress() {
      return `${this.address}, ${this.suburb} ${this.state} ${this.postcode}`;
    }
  },

  banking: {
    accountName: "HR Homestyle Projects",
    bank:        "NAB",
    bsb:         "083-004",
    account:     "15-814-0433",
    reference:   "Quote No. / Job Address"
  },

  quote: {
    validityDays:    30,
    depositPercent:  10,     // DBC Act 1995 (Vic) s.11 compliant
    gstRate:         0.10,
    defaultNotes:    "Work will resume after all parties agree and the required deposit is paid to the nominated bank account. Please read our Terms & Conditions before accepting this quote.",
    labourRatePerHr: 60,
    nextQuoteNumber: 1347    // Update this as quotes are issued
  },

  branding: {
    navy:      "#0d1f3c",
    gold:      "#c9a84c",
    goldLight: "#e8c97a",
    cream:     "#faf7f0",
    darkGreen: "#0e2516"
  },

  // ── APP PAGES ──────────────────────────────────────────────────
  // Add new pages here as you build them
  pages: [
    { id: "dashboard",  label: "Dashboard",    icon: "⊞", file: "pages/dashboard.html"  },
    { id: "quotes",     label: "Quotes",        icon: "📋", file: "pages/quotes.html"     },
    { id: "jobs",       label: "Jobs",          icon: "🔨", file: "pages/jobs.html"       },
    { id: "clients",    label: "Clients",       icon: "👤", file: "pages/clients.html"    },
    { id: "settings",   label: "Settings",      icon: "⚙",  file: "pages/settings.html"  },
  ],

  version: "1.0.0",
  lastUpdated: "April 2026"
};

// Make available globally
if (typeof module !== 'undefined') module.exports = APP_CONFIG;
