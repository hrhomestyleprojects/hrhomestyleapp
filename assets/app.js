/**
 * HR Homestyle Projects — Shared App Utilities
 * =============================================
 * Include in every page: <script src="../assets/app.js"></script>
 * These utilities handle storage, navigation, toasts, and helpers.
 */

// ── STORAGE (localStorage wrapper) ───────────────────────────────
const Store = {
  get(key) {
    try { return JSON.parse(localStorage.getItem('hr_' + key)); }
    catch { return null; }
  },
  set(key, val) {
    try { localStorage.setItem('hr_' + key, JSON.stringify(val)); return true; }
    catch { return false; }
  },
  remove(key) { localStorage.removeItem('hr_' + key); },
  all(prefix) {
    const result = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('hr_' + prefix)) {
        try { result.push(JSON.parse(localStorage.getItem(k))); } catch {}
      }
    }
    return result;
  }
};

// ── QUOTE STORAGE ─────────────────────────────────────────────────
const QuoteStore = {
  getAll()          { return Store.get('quotes') || []; },
  save(quotes)      { Store.set('quotes', quotes); },
  add(q)            { const all = this.getAll(); all.unshift(q); this.save(all); },
  update(id, data)  {
    const all = this.getAll();
    const i = all.findIndex(q => q.id === id);
    if (i >= 0) { all[i] = { ...all[i], ...data }; this.save(all); }
  },
  delete(id)        { this.save(this.getAll().filter(q => q.id !== id)); },
  get(id)           { return this.getAll().find(q => q.id === id) || null; },
  nextNumber()      { const all = this.getAll(); return all.length ? Math.max(...all.map(q => q.number || 0)) + 1 : 1347; }
};

// ── CLIENT STORAGE ────────────────────────────────────────────────
const ClientStore = {
  getAll()          { return Store.get('clients') || []; },
  save(clients)     { Store.set('clients', clients); },
  add(c)            { const all = this.getAll(); all.unshift(c); this.save(all); },
  update(id, data)  {
    const all = this.getAll();
    const i = all.findIndex(c => c.id === id);
    if (i >= 0) { all[i] = { ...all[i], ...data }; this.save(all); }
  },
  delete(id)        { this.save(this.getAll().filter(c => c.id !== id)); },
  get(id)           { return this.getAll().find(c => c.id === id) || null; }
};

// ── JOB STORAGE ───────────────────────────────────────────────────
const JobStore = {
  getAll()          { return Store.get('jobs') || []; },
  save(jobs)        { Store.set('jobs', jobs); },
  add(j)            { const all = this.getAll(); all.unshift(j); this.save(all); },
  update(id, data)  {
    const all = this.getAll();
    const i = all.findIndex(j => j.id === id);
    if (i >= 0) { all[i] = { ...all[i], ...data }; this.save(all); }
  },
  delete(id)        { this.save(this.getAll().filter(j => j.id !== id)); },
  get(id)           { return this.getAll().find(j => j.id === id) || null; }
};

// ── INVOICE STORAGE ───────────────────────────────────────────────
const InvoiceStore = {
  getAll()          { return Store.get('invoices') || []; },
  save(invoices)    { Store.set('invoices', invoices); },
  add(inv)          { const all = this.getAll(); all.unshift(inv); this.save(all); },
  update(id, data)  {
    const all = this.getAll();
    const i = all.findIndex(inv => inv.id === id);
    if (i >= 0) { all[i] = { ...all[i], ...data }; this.save(all); }
  },
  delete(id)        { this.save(this.getAll().filter(inv => inv.id !== id)); },
  get(id)           { return this.getAll().find(inv => inv.id === id) || null; },
  nextNumber()      { const all = this.getAll(); return all.length ? Math.max(...all.map(inv => inv.number || 0)) + 1 : 1001; }
};

// ── SETTINGS STORAGE ──────────────────────────────────────────────
const SettingsStore = {
  get()    { return Store.get('settings') || {}; },
  set(obj) { Store.set('settings', { ...this.get(), ...obj }); }
};

// ── HELPERS ───────────────────────────────────────────────────────
const Utils = {
  id()             { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); },
  fmt(n)           { return (parseFloat(n) || 0).toFixed(2); },
  fmtCurrency(n)   { return '$' + (parseFloat(n) || 0).toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); },
  fmtDate(iso)     { if (!iso) return '—'; const [y,m,d] = iso.split('-'); return `${d}/${m}/${y}`; },
  isoToday()       { return new Date().toISOString().split('T')[0]; },
  addDays(iso, n)  { const d = new Date(iso); d.setDate(d.getDate() + n); return d.toISOString().split('T')[0]; },
  isExpired(iso)   { return iso && new Date(iso) < new Date(); },
  escHtml(s)       { return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); },
  calcGST(items)   {
    let sub = 0, gst = 0;
    (items||[]).forEach(item => {
      const amt = (parseFloat(item.qty)||0) * (parseFloat(item.rate)||0);
      sub += amt;
      if (item.gst !== false) gst += amt * 0.1;
    });
    return { subtotal: sub, gst, total: sub + gst };
  }
};

// ── TOAST NOTIFICATIONS ───────────────────────────────────────────
const Toast = {
  _container: null,
  init() {
    if (!this._container) {
      this._container = document.createElement('div');
      this._container.id = 'toast-container';
      document.body.appendChild(this._container);
    }
  },
  show(msg, type='info', duration=3000) {
    this.init();
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    this._container.appendChild(t);
    setTimeout(() => t.style.opacity = '0', duration - 300);
    setTimeout(() => t.remove(), duration);
  },
  success(msg) { this.show('✓  ' + msg, 'success'); },
  error(msg)   { this.show('✕  ' + msg, 'error'); },
  info(msg)    { this.show('ℹ  ' + msg, 'info'); }
};

// ── NAVIGATION ────────────────────────────────────────────────────
const Nav = {
  // Highlight active nav item based on current filename
  init() {
    const current = window.location.pathname.split('/').pop().replace('.html','');
    document.querySelectorAll('.nav-item').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href.includes(current)) a.classList.add('active');
    });
  }
};

// ── MODAL HELPERS ─────────────────────────────────────────────────
const Modal = {
  open(id)  {
    const el = document.getElementById(id);
    if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
  },
  close(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
  },
  closeAll() {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  }
};
// Close modal when clicking overlay background
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) Modal.closeAll();
});

// ── TOPBAR ────────────────────────────────────────────────────────
const Topbar = {
  init() {
    const dateEl = document.getElementById('topbar-date');
    if (dateEl) {
      dateEl.textContent = new Date().toLocaleDateString('en-AU', {
        weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
      });
    }
    const abnEl = document.getElementById('topbar-abn');
    if (abnEl) {
      const abn = SettingsStore.get().abn || '33 292 735 593';
      abnEl.textContent = 'ABN ' + abn;
    }
  }
};

// Auto-init nav and topbar on load
document.addEventListener('DOMContentLoaded', () => { Nav.init(); Topbar.init(); });
