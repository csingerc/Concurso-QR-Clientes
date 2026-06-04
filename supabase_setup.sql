-- ============================================================
-- SUPABASE SETUP — South Wind Quiz v2.0
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- ============================================================

-- Tabla de participantes v2 (identificados por email)
CREATE TABLE IF NOT EXISTS qrhunt2_participantes (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email         TEXT NOT NULL UNIQUE,
  nombre        TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_qrhunt2_email
  ON qrhunt2_participantes (email);

-- Tabla de progreso por día y nivel
CREATE TABLE IF NOT EXISTS qrhunt2_progreso (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email         TEXT NOT NULL REFERENCES qrhunt2_participantes(email) ON DELETE CASCADE,
  dia           INTEGER NOT NULL CHECK (dia BETWEEN 1 AND 5),
  nivel         TEXT NOT NULL CHECK (nivel IN ('facil', 'medio', 'experto')),
  correctas     INTEGER NOT NULL CHECK (correctas BETWEEN 0 AND 3),
  puntaje       INTEGER NOT NULL DEFAULT 0,
  tiempo_promedio INTEGER,  -- segundos promedio por pregunta
  completado_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (email, dia, nivel)
);

CREATE INDEX IF NOT EXISTS idx_qrhunt2_progreso_email
  ON qrhunt2_progreso (email);

CREATE INDEX IF NOT EXISTS idx_qrhunt2_progreso_nivel
  ON qrhunt2_progreso (nivel, puntaje DESC);

-- Vista de ranking por nivel
CREATE OR REPLACE VIEW qrhunt2_ranking AS
SELECT
  p.nombre,
  p.email,
  pr.nivel,
  SUM(pr.puntaje) AS puntaje_total,
  COUNT(DISTINCT pr.dia) AS dias_completados,
  COUNT(*) AS niveles_completados
FROM qrhunt2_participantes p
JOIN qrhunt2_progreso pr ON pr.email = p.email
GROUP BY p.nombre, p.email, pr.nivel
ORDER BY puntaje_total DESC;

-- RLS
ALTER TABLE qrhunt2_participantes ENABLE ROW LEVEL SECURITY;
ALTER TABLE qrhunt2_progreso ENABLE ROW LEVEL SECURITY;

CREATE POLICY "qrhunt2_p_select" ON qrhunt2_participantes FOR SELECT USING (true);
CREATE POLICY "qrhunt2_p_insert" ON qrhunt2_participantes FOR INSERT WITH CHECK (true);
CREATE POLICY "qrhunt2_p_update" ON qrhunt2_participantes FOR UPDATE USING (true);

CREATE POLICY "qrhunt2_pr_select" ON qrhunt2_progreso FOR SELECT USING (true);
CREATE POLICY "qrhunt2_pr_insert" ON qrhunt2_progreso FOR INSERT WITH CHECK (true);

-- ── RPC: buscar email existente ───────────────────────────
-- Retorna {nombre} si existe, null si es nuevo
CREATE OR REPLACE FUNCTION qrhunt2_buscar_email(p_email TEXT)
RETURNS JSON
LANGUAGE plpgsql SECURITY DEFINER
AS $$
DECLARE
  v_nombre TEXT;
BEGIN
  SELECT nombre INTO v_nombre
  FROM qrhunt2_participantes
  WHERE email = lower(trim(p_email));

  IF v_nombre IS NULL THEN
    RETURN NULL;
  ELSE
    RETURN json_build_object('nombre', v_nombre);
  END IF;
END;
$$;
