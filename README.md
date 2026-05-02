# HR Homestyle Projects — Business App

**Version:** 1.0.0  
**Last Updated:** April 2026

---

## Quick Start

1. **Open the app** — double-click `index.html` in this folder, or drag it into any browser (Chrome, Safari, Edge, Firefox).
2. **No installation needed** — the app runs entirely in your browser. No server, no internet required (except for fonts on first load).
3. **Your data saves automatically** — all quotes, clients, and jobs are saved in your browser's local storage. They persist between sessions.

---

## Folder Structure

```
hr-homestyle-app/
│
├── index.html              ← Dashboard (start here)
│
├── pages/
│   ├── quote-builder.html  ← Create & print quotes
│   ├── quotes.html         ← View all quotes
│   ├── clients.html        ← Client database
│   ├── jobs.html           ← Job tracker
│   ├── rate-calculator.html← Labour rate calculator
│   └── settings.html       ← Company settings & data backup
│
├── assets/
│   ├── app.css             ← All styles & design tokens
│   ├── app.js              ← Shared utilities, storage, nav
│   └── logo.png            ← HR Homestyle Projects logo
│
└── data/
    └── config.js           ← Company config (edit this to update details)
```

---

## How to Back Up Your Data

1. Go to **Settings** → **Export All Data**
2. A `.json` file will download — save it somewhere safe (Google Drive, USB, etc.)
3. To restore: Settings → **Import Data** → select your backup file

---

## Adding New Features with Claude Code

This app is designed to be extended easily. To add a new feature:

1. Open **Claude Code** (`claude` in your terminal) in this folder:
   ```
   cd ~/Documents/hr-homestyle-app
   claude
   ```

2. Ask Claude Code to add the feature, for example:
   - *"Add an invoicing page that converts accepted quotes to invoices"*
   - *"Add a materials cost tracker to the Jobs page"*
   - *"Add a BAS report summary page for quarterly GST"*
   - *"Add email-ready quote summaries to the Quote Builder"*
   - *"Add a profit & loss dashboard with charts"*

3. Claude Code will read the existing files and follow the same patterns (CSS variables, storage utilities, nav sidebar) to keep everything consistent.

### Key things Claude Code needs to know when adding pages:
- **Styles**: All CSS variables are in `assets/app.css` — reuse them
- **Storage**: Use `QuoteStore`, `ClientStore`, `JobStore` from `assets/app.js`
- **Navigation**: Copy the `<nav class="app-sidebar">` block from any existing page
- **Config**: Company details live in `data/config.js`

---

## Current Features

| Feature | Location |
|---------|----------|
| Dashboard overview | `index.html` |
| Quote builder (live preview, GST, BAS, print to PDF) | `pages/quote-builder.html` |
| Quote list with search & CSV export | `pages/quotes.html` |
| Client database | `pages/clients.html` |
| Job tracker with status updates | `pages/jobs.html` |
| Labour charge-out rate calculator | `pages/rate-calculator.html` |
| Settings, data backup & restore | `pages/settings.html` |

---

## Planned / Suggested Next Features

- [ ] Invoice generator (from accepted quotes)
- [ ] BAS / GST summary report
- [ ] Profit & Loss dashboard
- [ ] Materials cost tracker per job
- [ ] Supplier contact list
- [ ] Photo attachments for jobs
- [ ] SMS/email quote sending
- [ ] Gantt-style job scheduler

---

## Technical Notes

- **No frameworks** — plain HTML, CSS, and JavaScript. Easy to read and modify.
- **No server needed** — open directly in browser as a local file.
- **Data storage** — browser localStorage. Data stays on your computer.
- **Print/PDF** — use the browser's Print function (Ctrl+P / Cmd+P) and select "Save as PDF".
- **Fonts** — loaded from Google Fonts (requires internet on first load; cached after).

---

## Legal Documents (separate files)

The Terms & Conditions Word document is a separate file:  
`HR-Homestyle-Terms-Conditions-Legal.docx`

It references Victorian legislation including:
- Domestic Building Contracts Act 1995 (Vic)
- Fences Act 1968 (Vic) as amended 2014
- Building Act 1993 (Vic)
- Australian Consumer Law

---

*Built for Comfort. Designed for Living.*  
HR Homestyle Projects · ABN 33 292 735 593 · info@homestyleprojects.com
