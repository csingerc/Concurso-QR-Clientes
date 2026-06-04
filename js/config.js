// ============================================================
// CONFIGURACIÓN CENTRAL — South Wind Quiz v2.0
// ============================================================

const CONFIG = {

  supabase: {
    url: 'https://ocdrbbnecotziesnclvf.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jZHJiYm5lY290emllc25jbHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMDc5MjEsImV4cCI6MjA5NDc4MzkyMX0.KDeiI7sHhzb20Tm4ICXBNumiOVsI9gDEBlW5G3MNMSU',
  },

  // ── FECHA DE LANZAMIENTO ─────────────────────────────────
  // Cambiar esta fecha para ajustar el calendario de desbloqueo
  // Formato: 'YYYY-MM-DD' en hora de Chile (America/Santiago)
  fechaDia1: '2026-06-03',

  // ── MODO DEMO ────────────────────────────────────────────
  emailDemo: 'demo@southwind.cl',

  // ── NIVELES ──────────────────────────────────────────────
  niveles: ['facil', 'medio', 'experto'],

  nivelesLabels: {
    facil:   { label: 'Consumidor',     emoji: '🐟', color: '#00c896' },
    medio:   { label: 'Especialista',   emoji: '🔬', color: '#f59e0b' },
    experto: { label: 'Experto Técnico', emoji: '⚗️', color: '#8b5cf6' },
  },

  // Día 5 no tiene nivel fácil
  nivelesDisponibles: {
    1: ['facil', 'medio', 'experto'],
    2: ['facil', 'medio', 'experto'],
    3: ['facil', 'medio', 'experto'],
    4: ['medio', 'experto'],
  },

  // ── PUNTOS ───────────────────────────────────────────────
  puntos: { 1: 10, 2: 25, 3: 45 },
  bonusNivel: { facil: 0, medio: 10, experto: 25 }, // bonus por nivel de dificultad
  bonusCompletarDia: 15, // bonus por completar los 3 niveles de un día

  // ── TIEMPO ───────────────────────────────────────────────
  tiempoMaxSegundos: 120,
  tiempoMultiplicador: [
    { hasta: 30,       factor: 1.0  },
    { hasta: 60,       factor: 0.85 },
    { hasta: 120,      factor: 0.65 },
    { hasta: Infinity, factor: 0.4  },
  ],

  rankingRefreshMs: 15000,
  totalDias: 4,
};

// ── HELPERS ──────────────────────────────────────────────────

function getDiaActual() {
  const tz = 'America/Santiago';
  const ahora = new Date(new Date().toLocaleString('en-US', { timeZone: tz }));
  const inicio = new Date(new Date(CONFIG.fechaDia1 + 'T00:00:00').toLocaleString('en-US', { timeZone: tz }));
  const diffMs = ahora - inicio;
  const diffDias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return Math.min(Math.max(diffDias + 1, 0), CONFIG.totalDias + 1);
}

function isDiaDesbloqueado(dia) {
  return getDiaActual() >= dia;
}

function calcularMultiplicador(segundos) {
  for (const t of CONFIG.tiempoMultiplicador) {
    if (segundos <= t.hasta) return t.factor;
  }
  return 0.4;
}

function calcularPuntajeFinal(correctas, nivel, tiemposPorPregunta) {
  const base = CONFIG.puntos[correctas] || 0;
  const bonus = CONFIG.bonusNivel[nivel] || 0;
  const factorPromedio = tiemposPorPregunta.length > 0
    ? tiemposPorPregunta.reduce((s, t) => s + calcularMultiplicador(t), 0) / tiemposPorPregunta.length
    : 1;
  return Math.round((base + bonus) * factorPromedio);
}

function esDemo(email) {
  return email === CONFIG.emailDemo;
}
