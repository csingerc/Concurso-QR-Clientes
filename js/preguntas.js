// ============================================================
// BANCO DE PREGUNTAS — South Wind Quiz v2.0
// 5 días × 3 niveles × 3 preguntas = 45 preguntas
// ============================================================

const PREGUNTAS_V2 = {

  // ════════════════════════════════════════════════════════
  // DÍA 1 — ¿Sabes lo que comes?
  // Tema: Reconocer salmón de calidad
  // ════════════════════════════════════════════════════════
  1: {
    titulo: '¿Sabes lo que comes?',
    subtitulo: 'Reconocer salmón de calidad',

    facil: [
      {
        pregunta: "El salmón fresco de buena calidad, ¿a qué debería oler?",
        opciones: [
          { texto: "A mar intenso — señal de frescura", correcta: false },
          { texto: "Suave, casi neutro — sin olor fuerte", correcta: true },
          { texto: "Levemente amoniacal — es normal en pescado fresco", correcta: false },
        ],
        feedbackCorrecto: "✅ El salmón fresco de calidad huele suave y limpio. Un olor fuerte a mar o amoniacal es señal de deterioro o manejo deficiente.",
        feedbackIncorrecto: "❌ El olor fuerte en pescado no es señal de frescura — es lo contrario. Salmón fresco de calidad huele casi a nada.",
      },
      {
        pregunta: "¿Qué indica una carne de salmón con color naranja intenso y uniforme?",
        opciones: [
          { texto: "Buena alimentación y condiciones de crianza controladas", correcta: true },
          { texto: "Que fue teñido artificialmente — siempre es aditivo", correcta: false },
          { texto: "Que es salmón salvaje, más nutritivo que el de cultivo", correcta: false },
        ],
        feedbackCorrecto: "✅ El color naranja proviene de astaxantina, pigmento presente en la dieta del salmón. Intensidad uniforme = buena gestión productiva.",
        feedbackIncorrecto: "❌ El color no indica origen salvaje ni implica tinción artificial. Proviene de astaxantina en la dieta, usada en cultivo bajo regulación.",
      },
      {
        pregunta: "Compras salmón envasado al vacío y la bolsa está inflada. ¿Qué haces?",
        opciones: [
          { texto: "Lo abres para ver si huele bien antes de decidir", correcta: false },
          { texto: "Lo devuelves — probablemente el vacío falló pero igual puede estar bueno", correcta: false },
          { texto: "No lo compras — bolsa inflada indica actividad bacteriana o falla del envase", correcta: true },
        ],
        feedbackCorrecto: "✅ Una bolsa inflada en producto al vacío es señal de actividad microbiana o pérdida de vacío. En salmón listo para comer esto es una alerta de inocuidad.",
        feedbackIncorrecto: "❌ Abrir para oler no es suficiente — C. botulinum puede estar presente sin cambio de olor. Bolsa inflada = no consumir.",
      },
    ],

    medio: [
      {
        pregunta: "¿Cuál es la diferencia principal entre salmón ahumado en frío y en caliente?",
        opciones: [
          { texto: "El ahumado en caliente tiene más sabor a humo, el en frío es más suave — solo es cuestión de gusto", correcta: false },
          { texto: "El ahumado en caliente aplica un paso de eliminación térmica de bacterias; el en frío no alcanza temperaturas letales para patógenos", correcta: true },
          { texto: "El ahumado en frío dura más tiempo porque el humo actúa como conservante total", correcta: false },
        ],
        feedbackCorrecto: "✅ La diferencia es de inocuidad, no solo de sabor. El ahumado en caliente (~70°C+ interno) elimina patógenos. El en frío (<30°C) no — por eso tiene controles de cadena de frío más estrictos.",
        feedbackIncorrecto: "❌ La distinción va más allá del sabor. El paso de eliminación térmica del ahumado en caliente cambia completamente el perfil de riesgo microbiológico del producto.",
      },
      {
        pregunta: "Un salmón etiquetado como 'Atlántico' en el supermercado, ¿de dónde probablemente viene?",
        opciones: [
          { texto: "Del Atlántico Norte — Noruega, Islandia o Canadá exclusivamente", correcta: false },
          { texto: "Probablemente de cultivo — 'Atlántico' es el nombre de la especie, no del origen geográfico", correcta: true },
          { texto: "Es salmón salvaje por definición — el de cultivo se llama diferente", correcta: false },
        ],
        feedbackCorrecto: "✅ Salmo salar (salmón del Atlántico) es una especie que se cultiva globalmente, incluyendo en Chile. El nombre no indica que vino del Atlántico.",
        feedbackIncorrecto: "❌ 'Atlántico' es nombre de especie (Salmo salar), no de origen. La mayoría del salmón del Atlántico que se consume viene de cultivo en Chile, Noruega o Escocia.",
      },
      {
        pregunta: "¿Por qué el salmón ahumado en frío debe mantenerse refrigerado aunque esté al vacío?",
        opciones: [
          { texto: "Por regulación — técnicamente podría estar a temperatura ambiente si el vacío es perfecto", correcta: false },
          { texto: "El vacío elimina todo riesgo biológico — la refrigeración es solo para mantener textura", correcta: false },
          { texto: "Listeria monocytogenes puede crecer en vacío y bajo refrigeración — el frío la ralentiza pero no la elimina", correcta: true },
        ],
        feedbackCorrecto: "✅ L. monocytogenes es aerotolerante — crece en condiciones de bajo oxígeno. El vacío elimina flora competidora aeróbica, dejando el campo libre para ella. La cadena de frío continua es el control principal.",
        feedbackIncorrecto: "❌ El vacío no elimina el riesgo biológico — puede amplificarlo para patógenos aerotolerantes como L. monocytogenes al suprimir la flora competidora. La refrigeración es crítica, no cosmética.",
      },
    ],

    experto: [
      {
        pregunta: "¿Qué parámetro determina principalmente la vida útil microbiológica del salmón ahumado en frío envasado al vacío?",
        opciones: [
          { texto: "El pH del músculo post-proceso", correcta: false },
          { texto: "La concentración de fenoles del humo", correcta: false },
          { texto: "El water phase salt (WPS) y la temperatura de almacenamiento en combinación", correcta: true },
        ],
        feedbackCorrecto: "✅ WPS ≥3.5% inhibe C. botulinum tipo E. Combinado con temperatura ≤4°C controla L. monocytogenes. Ninguno es suficiente solo — es el efecto combinado lo que define la vida útil segura. (FDA Fish and Fishery Products Hazards and Controls Guidance, 4ª ed.)",
        feedbackIncorrecto: "❌ Los fenoles del humo tienen efecto antimicrobiano menor y variable. El pH post-proceso es relevante pero secundario. WPS + temperatura es el binomio crítico para salmón ahumado listo para consumo.",
      },
      {
        pregunta: "La escala SalmoFan se usa para evaluar color en salmón de cultivo. ¿Cuál de estas afirmaciones es correcta?",
        opciones: [
          { texto: "Un valor SalmoFan alto correlaciona directamente con mayor concentración de EPA y DHA en músculo", correcta: false },
          { texto: "El valor preferido varía por mercado — Europa prefiere 33-34, Japón tiende a valores más altos — y no refleja composición nutricional", correcta: true },
          { texto: "La astaxantina medida por SalmoFan proviene exclusivamente de fuentes naturales en salmón de cultivo", correcta: false },
        ],
        feedbackCorrecto: "✅ SalmoFan (DSM) es escala colorimétrica de 20 a 34. Las preferencias de mercado varían significativamente. La pigmentación no correlaciona con omega-3 — esos se miden por análisis proximal. En cultivo la astaxantina puede ser de síntesis o de fuentes naturales como Haematococcus pluvialis.",
        feedbackIncorrecto: "❌ Color ≠ omega-3. La astaxantina en cultivo puede ser sintética o natural. La correlación con EPA/DHA es inexistente — son metabolismos independientes.",
      },
      {
        pregunta: "En salmón ahumado en frío listo para consumo (RTE), ¿cuál es el efecto del vacío sobre el perfil de riesgo microbiológico del producto?",
        opciones: [
          { texto: "Reduce el riesgo global — elimina flora aerobia deteriorante y ralentiza patógenos por restricción de oxígeno disponible", correcta: false },
          { texto: "Reduce flora aerobia competidora pero favorece patógenos aerotolerantes como L. monocytogenes y anaerobios estrictos como C. botulinum tipo E", correcta: true },
          { texto: "El efecto depende del porcentaje de vacío alcanzado — sobre 99% de extracción el riesgo por C. botulinum se elimina", correcta: false },
        ],
        feedbackCorrecto: "✅ El vacío suprime flora deteriorante aerobia — lo que extiende vida útil organoléptica — pero elimina la competencia microbiana que frena a L. monocytogenes y C. botulinum tipo E. El producto puede volverse peligroso sin señales organolépticas de deterioro. (FDA Fish and Fishery Products Hazards and Controls Guidance, 4ª ed.)",
        feedbackIncorrecto: "❌ La opción A confunde efecto sobre deterioro con efecto sobre patógenos. La opción C es plausible técnicamente pero incorrecta: C. botulinum tipo E no requiere oxígeno para crecer, el porcentaje de vacío no es el factor limitante.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  // DÍA 2 — Lo que haces en tu cocina importa
  // Tema: Inocuidad en el hogar con salmón
  // ════════════════════════════════════════════════════════
  2: {
    titulo: 'Lo que haces en tu cocina importa',
    subtitulo: 'Inocuidad en el hogar con salmón',

    facil: [
      {
        pregunta: "¿Cuánto tiempo puede estar el salmón ahumado fuera del refrigerador sin riesgo?",
        opciones: [
          { texto: "Hasta 4 horas — es el estándar internacional para alimentos perecederos", correcta: false },
          { texto: "Máximo 1 a 2 horas — después la cadena de frío está comprometida y el riesgo aumenta", correcta: true },
          { texto: "Depende de la temperatura ambiente — si hace frío en la cocina, puede ser más", correcta: false },
        ],
        feedbackCorrecto: "✅ Las bacterias de mayor riesgo en salmón listo para comer se multiplican rápidamente sobre 4°C sin cambiar olor ni apariencia. 1-2 horas es el margen razonable.",
        feedbackIncorrecto: "❌ Las 4 horas aplican a alimentos cocidos en condiciones controladas — no a listo para comer refrigerado. La temperatura ambiente doméstica rara vez es lo suficientemente fría para compensar.",
      },
      {
        pregunta: "¿Dónde guardas el salmón ahumado en el refrigerador?",
        opciones: [
          { texto: "En la parte más baja — el frío se acumula abajo y conserva mejor", correcta: false },
          { texto: "En cualquier repisa, pero separado y tapado — lejos de carnes y pescados crudos", correcta: true },
          { texto: "Junto a las verduras — son alimentos que no se cocinan, mismo nivel de riesgo", correcta: false },
        ],
        feedbackCorrecto: "✅ El salmón ahumado ya está listo para comer — no pasa por cocción. Debe protegerse de contaminación cruzada con crudos. La parte más baja del refrigerador es donde van los crudos.",
        feedbackIncorrecto: "❌ La parte más baja del refrigerador es para crudos — no para listo para comer. Las verduras crudas también pueden ser fuente de contaminación cruzada.",
      },
      {
        pregunta: "La fecha de vencimiento dice 'consumir antes del 10 de junio'. Lo abres el 7 de junio y no lo terminas. ¿Cuánto tiempo más lo puedes guardar?",
        opciones: [
          { texto: "Hasta el 10 de junio — quedan 3 días y la fecha sigue vigente", correcta: false },
          { texto: "1 a 2 días máximo — una vez abierto el vacío se pierde y las condiciones que garantizaban esa fecha ya no existen", correcta: true },
          { texto: "3 a 5 días si lo guardas bien tapado — el ahumado conserva el producto", correcta: false },
        ],
        feedbackCorrecto: "✅ La fecha de vencimiento aplica al envase cerrado e intacto. Una vez abierto, el vacío se rompe y las condiciones que definieron esa fecha ya no existen. 1-2 días refrigerado es el límite razonable.",
        feedbackIncorrecto: "❌ El ahumado no es conservante suficiente una vez abierto el envase. La fecha de etiqueta asume producto en envase original intacto.",
      },
    ],

    medio: [
      {
        pregunta: "Descongelaste salmón en el microondas para apurar el proceso. ¿Qué problema puede generar esto?",
        opciones: [
          { texto: "Ninguno si lo consumes inmediatamente después", correcta: false },
          { texto: "El microondas altera las proteínas del salmón y pierde valor nutricional significativo", correcta: false },
          { texto: "El descongelado en microondas crea zonas calientes donde las bacterias pueden multiplicarse antes de que el centro se descongele", correcta: true },
        ],
        feedbackCorrecto: "✅ El microondas descongela de forma desigual — algunas zonas alcanzan temperaturas de riesgo (>4°C) mientras otras siguen congeladas. Esas zonas calientes son ventanas de crecimiento bacteriano.",
        feedbackIncorrecto: "❌ El impacto nutricional del microondas es mínimo. El riesgo real es microbiológico — la heterogeneidad térmica crea condiciones de crecimiento antes de que el producto esté listo.",
      },
      {
        pregunta: "El salmón ahumado 'huele bien' pero lleva 5 días abierto en el refrigerador. ¿Es seguro comerlo?",
        opciones: [
          { texto: "No necesariamente — Listeria monocytogenes no produce cambios organolépticos detectables", correcta: true },
          { texto: "Sí — el olfato es el mejor indicador de seguridad en pescado ahumado", correcta: false },
          { texto: "Depende de la temperatura exacta del refrigerador — bajo 2°C podría estar bien", correcta: false },
        ],
        feedbackCorrecto: "✅ L. monocytogenes no produce olores ni cambios de color o textura detectables. 'Huele bien' no garantiza seguridad — el tiempo desde apertura es el indicador más confiable.",
        feedbackIncorrecto: "❌ El olfato detecta deterioro organoléptico, no patógenos de crecimiento lento como L. monocytogenes. A 2°C crece más lento, pero 5 días abierto supera cualquier margen razonable.",
      },
      {
        pregunta: "Preparas una tabla con salmón ahumado. Antes usaste la misma tabla para cortar pollo crudo y la lavaste con agua y jabón. ¿Es suficiente?",
        opciones: [
          { texto: "Para una tabla de madera probablemente no — la madera retiene bacterias en sus poros aunque se lave", correcta: true },
          { texto: "Sí — el jabón elimina los patógenos relevantes en este contexto", correcta: false },
          { texto: "Depende del tiempo transcurrido entre ambos usos", correcta: false },
        ],
        feedbackCorrecto: "✅ Las tablas de madera retienen microorganismos en poros y grietas que el lavado manual no alcanza. Para salmón listo para comer lo ideal es tabla exclusiva o desinfección adicional con solución de cloro.",
        feedbackIncorrecto: "❌ El jabón remueve suciedad visible pero no garantiza eliminación de patógenos en superficies porosas. El tiempo no es el factor — la porosidad de la madera es el problema estructural.",
      },
    ],

    experto: [
      {
        pregunta: "Un consumidor almacena salmón ahumado en frío a 6°C en vez de 4°C. ¿Cómo afecta esto al perfil de riesgo?",
        opciones: [
          { texto: "El impacto es marginal — 2°C de diferencia no cambia significativamente la cinética de crecimiento de L. monocytogenes a esas temperaturas", correcta: false },
          { texto: "A 6°C la tasa de crecimiento de L. monocytogenes puede ser 2 a 4 veces mayor que a 4°C, acortando significativamente el margen de seguridad de la vida útil declarada", correcta: true },
          { texto: "El riesgo aumenta solo si el producto ya tiene carga inicial elevada de L. monocytogenes — con carga baja, 6°C es manejable dentro de la vida útil declarada", correcta: false },
        ],
        feedbackCorrecto: "✅ La cinética de crecimiento de L. monocytogenes es altamente sensible a temperatura en el rango 0-10°C. Modelos predictivos (Baranyi-Roberts) muestran diferencias significativas entre 4°C y 6°C. La vida útil declarada asume almacenamiento a la temperatura especificada.",
        feedbackIncorrecto: "❌ La opción A subestima la sensibilidad de L. monocytogenes a temperatura en el rango psicrótrofo. La opción C confunde carga inicial con cinética de crecimiento — a 6°C incluso cargas bajas pueden alcanzar niveles de riesgo antes del vencimiento declarado.",
      },
      {
        pregunta: "El consumidor agrega jugo de limón al salmón ahumado antes de servirlo. ¿Qué efecto tiene sobre L. monocytogenes?",
        opciones: [
          { texto: "Efecto bacteriostático leve y temporal — baja el pH superficialmente pero no es un control suficiente solo ni penetra el músculo", correcta: true },
          { texto: "El ácido cítrico del limón es bactericida para L. monocytogenes a las concentraciones típicas de uso doméstico", correcta: false },
          { texto: "Ningún efecto — L. monocytogenes es resistente a pH ácido en el rango del jugo de limón", correcta: false },
        ],
        feedbackCorrecto: "✅ L. monocytogenes tiene rango de crecimiento de pH 4.4 a 9.4 — el jugo de limón baja el pH superficial transitoriamente pero no alcanza niveles inhibitorios sostenidos en el músculo. La tecnología de barreras requiere combinación de factores.",
        feedbackIncorrecto: "❌ La opción B sobreestima el efecto del ácido cítrico a concentraciones domésticas. La opción C subestima — hay efecto, pero insuficiente como control aislado.",
      },
      {
        pregunta: "Un producto de salmón ahumado listo para consumo (RTE) declara vida útil de 21 días a ≤4°C. ¿Qué sustenta ese claim?",
        opciones: [
          { texto: "WPS + temperatura de almacenamiento validados por modelos predictivos — sin necesidad de challenge test si los parámetros están dentro de rangos documentados", correcta: false },
          { texto: "Concentración de fenoles del humo + sal de curado + envasado al vacío — combinación que históricamente ha sustentado claims similares", correcta: false },
          { texto: "Combinación de barreras — WPS, actividad de agua, pH, temperatura y ausencia de recontaminación — validada por challenge test con L. monocytogenes inoculada intencionalmente", correcta: true },
        ],
        feedbackCorrecto: "✅ El estándar para claims de vida útil es el challenge test con L. monocytogenes inoculada intencionalmente. Los modelos predictivos son herramientas de diseño, no de validación regulatoria. (FDA, EFSA guidance on shelf life)",
        feedbackIncorrecto: "❌ La opción A es tentadora — los modelos predictivos son válidos — pero no reemplazan el challenge test para claims regulatorios. La opción B describe factores reales pero 'históricamente sustentado' no es validación — cada formulación requiere su propia evidencia.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  // DÍA 3 — Detrás del ahumado
  // Tema: El proceso de ahumado y lo que implica
  // ════════════════════════════════════════════════════════
  3: {
    titulo: 'Lo que no se ve',
    subtitulo: 'Listeria y por qué la controlamos',

    facil: [
      {
        pregunta: "¿A quiénes afecta principalmente la listeriosis?",
        opciones: [
          { texto: "A cualquier persona que consuma el alimento contaminado — afecta a todos por igual", correcta: false },
          { texto: "Solo a personas con alergias alimentarias previas — el sistema inmune ya está sensibilizado", correcta: false },
          { texto: "Principalmente a embarazadas, adultos mayores, personas inmunocomprometidas y recién nacidos", correcta: true },
        ],
        feedbackCorrecto: "✅ L. monocytogenes es especialmente peligrosa para grupos vulnerables. En embarazadas puede causar aborto espontáneo o parto prematuro. La mayoría de personas sanas puede manejar exposiciones bajas sin síntomas graves.",
        feedbackIncorrecto: "❌ L. monocytogenes no afecta a todos por igual. No tiene relación con alergias — es una infección bacteriana, no una reacción alérgica.",
      },
      {
        pregunta: "¿Qué hace a Listeria monocytogenes especialmente difícil de controlar en una planta de alimentos?",
        opciones: [
          { texto: "Produce toxinas que permanecen en el alimento aunque se elimine la bacteria", correcta: false },
          { texto: "Puede crecer en frío, sobrevive en ambientes húmedos por años y forma nichos difíciles de eliminar con limpieza convencional", correcta: true },
          { texto: "Es resistente a todos los desinfectantes usados en la industria alimentaria", correcta: false },
        ],
        feedbackCorrecto: "✅ L. monocytogenes es psicrotrófica — crece en refrigeración. Puede formar biopelículas en superficies de difícil acceso que la protegen de desinfectantes. Una vez establecida en un nicho, puede persistir por meses o años.",
        feedbackIncorrecto: "❌ L. monocytogenes no produce toxinas — la enfermedad es por infección directa. No es resistente a todos los desinfectantes — el problema es llegar a los nichos donde se refugia.",
      },
      {
        pregunta: "¿Puede el salmón ahumado contaminado con Listeria verse, oler o saber diferente al normal?",
        opciones: [
          { texto: "Sí — la presencia de bacterias siempre genera cambios organolépticos detectables", correcta: false },
          { texto: "Solo en concentraciones muy altas — a niveles bajos no hay cambios perceptibles", correcta: false },
          { texto: "No — L. monocytogenes no produce cambios de color, olor ni textura detectables en el producto", correcta: true },
        ],
        feedbackCorrecto: "✅ Esta es la característica más peligrosa de L. monocytogenes en salmón listo para comer — el producto puede estar en perfecto estado aparente y representar un riesgo real. El control requiere monitoreo ambiental y análisis microbiológico.",
        feedbackIncorrecto: "❌ Los cambios organolépticos son producidos por bacterias deteriorantes — distintas de los patógenos. L. monocytogenes crece sin alterar apariencia, olor ni sabor.",
      },
    ],

    medio: [
      {
        pregunta: "Una planta de salmón ahumado detecta L. monocytogenes en el ambiente pero no en el producto. ¿Qué significa eso?",
        opciones: [
          { texto: "Que el sistema de control funciona correctamente — si no está en el producto, no hay riesgo", correcta: false },
          { texto: "Que existe un riesgo latente de recontaminación post-proceso que debe investigarse y controlarse antes de que llegue al producto", correcta: true },
          { texto: "Que el resultado es un falso positivo — L. monocytogenes ambiental no es la misma cepa que contamina productos", correcta: false },
        ],
        feedbackCorrecto: "✅ Un positivo ambiental es una señal de alerta temprana — indica que la bacteria está presente en el entorno y puede llegar al producto. El objetivo del monitoreo ambiental es exactamente este: encontrar el problema antes de que llegue al consumidor.",
        feedbackIncorrecto: "❌ Un positivo ambiental sin positivo en producto no significa ausencia de riesgo — significa que el control aún funciona pero la amenaza es real. L. monocytogenes ambiental puede ser la misma cepa que eventualmente contamine el producto.",
      },
      {
        pregunta: "¿Por qué no es suficiente mantener el salmón ahumado en frío a 4°C para controlar completamente a L. monocytogenes?",
        opciones: [
          { texto: "Porque 4°C es la temperatura mínima de crecimiento de L. monocytogenes — bajo esa temperatura sí se controla completamente", correcta: false },
          { texto: "Porque L. monocytogenes puede crecer desde -1.5°C — el frío la ralentiza significativamente pero no la detiene", correcta: true },
          { texto: "Porque los refrigeradores domésticos nunca alcanzan 4°C real — siempre están entre 6°C y 8°C", correcta: false },
        ],
        feedbackCorrecto: "✅ L. monocytogenes tiene temperatura mínima de crecimiento documentada de -1.5°C. A 4°C crece muy lento, pero en productos con vida útil de 3 semanas ese crecimiento lento puede acumularse hasta niveles de riesgo.",
        feedbackIncorrecto: "❌ 4°C es un límite regulatorio de almacenamiento, no biológico. La opción C tiene algo de verdad sobre refrigeradores domésticos, pero no es la razón principal por la que el frío solo es insuficiente.",
      },
      {
        pregunta: "Una planta de salmón ahumado hace muestreos de superficies buscando Listeria. Esta semana encontraron la bacteria en el piso cerca de una línea de proceso. ¿Qué debería pasar ahora?",
        opciones: [
          { texto: "Nada urgente — el piso no es superficie de contacto con el producto, el riesgo es bajo", correcta: false },
          { texto: "Detener toda la producción hasta confirmar que no hay Listeria en ningún otro punto de la planta", correcta: false },
          { texto: "Investigar el origen del foco, intensificar el muestreo en zonas cercanas y aplicar limpieza reforzada antes de que la bacteria llegue al producto", correcta: true },
        ],
        feedbackCorrecto: "✅ Un positivo en piso es una señal de alerta temprana. La respuesta es proporcional: investigar, intensificar muestreo y actuar sobre el foco. El objetivo del monitoreo es encontrar el problema antes de que llegue al consumidor.",
        feedbackIncorrecto: "❌ El piso sí es relevante — equipos y calzado pueden transferir la bacteria al producto. Pero tampoco justifica detener toda la planta — el protocolo es proporcional al hallazgo y su ubicación.",
      },
    ],

    experto: [
      {
        pregunta: "Dos muestras de L. monocytogenes — una de ambiente de planta y una de un caso clínico — dan el mismo resultado con tipificación molecular clásica. ¿Qué agrega la secuenciación genómica completa (WGS) a esa investigación?",
        opciones: [
          { texto: "Confirma definitivamente si son la misma cepa — la tipificación clásica solo da una aproximación que WGS siempre contradice", correcta: false },
          { texto: "Permite saber si la cepa produce toxinas — dato que la tipificación clásica no puede entregar", correcta: false },
          { texto: "Puede diferenciar cepas que la tipificación clásica ve como iguales — o confirmar que sí son la misma con mucha mayor precisión, lo que es crítico para vincular un caso clínico a una fuente", correcta: true },
        ],
        feedbackCorrecto: "✅ La tipificación clásica agrupa cepas en categorías amplias. La secuenciación genómica completa (WGS) analiza diferencias de nucleótido a nucleótido, permitiendo distinguir si el caso clínico y la muestra ambiental comparten realmente el mismo origen. Es el estándar actual en investigaciones epidemiológicas de listeriosis.",
        feedbackIncorrecto: "❌ WGS no siempre contradice la tipificación clásica — la complementa con mayor resolución. L. monocytogenes no produce toxinas preformadas — la enfermedad es por invasión celular directa, no toxígena.",
      },
      {
        pregunta: "Al tipificar por secuenciación genómica completa (WGS) una cepa de L. monocytogenes del ambiente de una planta listo para consumo (RTE) y resultar ST6 Linaje I, ¿qué cambia en la gestión del riesgo?",
        opciones: [
          { texto: "Nada relevante en la práctica — el protocolo de respuesta es el mismo independiente del sequence type", correcta: false },
          { texto: "ST6 Linaje I está entre los más frecuentes en casos clínicos graves en humanos — eso sube la urgencia de encontrar y eliminar el nicho, aunque el producto no haya dado positivo", correcta: true },
          { texto: "Obliga a notificación inmediata a la autoridad sanitaria y retiro preventivo del producto en mercado", correcta: false },
        ],
        feedbackCorrecto: "✅ No todos los sequence types tienen el mismo historial clínico. ST6 aparece repetidamente en brotes documentados y casos invasivos en Europa y Norteamérica. Encontrarlo en ambiente justifica respuesta más agresiva en la investigación del nicho. Es información que importa — no es solo un dato de laboratorio. (Wiedmann et al., 1997; EFSA reports)",
        feedbackIncorrecto: "❌ El sequence type sí importa para calibrar la urgencia — no es solo académico. La notificación obligatoria y el retiro preventivo aplican ante positivos en producto o casos clínicos vinculados, no ante hallazgos ambientales por sí solos.",
      },
      {
        pregunta: "La secuenciación genómica completa (WGS) confirma que la L. monocytogenes del ambiente de una planta viene de materia prima de un proveedor — es ST321 Linaje II. ¿Cuál es el paso más importante?",
        opciones: [
          { texto: "Relajar el nivel de alerta — Linaje II tiene menor historial de casos graves que Linaje I", correcta: false },
          { texto: "Notificar a la autoridad sanitaria porque cualquier hallazgo de WGS en planta listo para consumo (RTE) es de reporte obligatorio", correcta: false },
          { texto: "Actuar sobre la fuente — revisar las especificaciones con el proveedor y reforzar los controles de ingreso de materia prima, porque mientras la presión de entrada continúe, los controles internos están en desventaja", correcta: true },
        ],
        feedbackCorrecto: "✅ Identificar el origen es la mitad del trabajo — la otra mitad es cortar la entrada. Una cepa que llega continuamente con la materia prima es una presión constante sobre el sistema de control. Linaje II no es inocuo — sigue siendo L. monocytogenes en un producto listo para consumo (RTE). La acción correcta es sobre el proveedor.",
        feedbackIncorrecto: "❌ Menor virulencia relativa no es carta libre — especialmente en un producto listo para comer consumido por grupos vulnerables. La notificación obligatoria no aplica a hallazgos ambientales de WGS por sí solos — depende del país y el contexto regulatorio.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════
  // DÍA 5 — Nivel Final (7 de junio, Día Mundial de la Inocuidad)
  // Tema: Sostenibilidad e inocuidad
  // Solo niveles: medio y experto
  // ════════════════════════════════════════════════════════
  4: {
    titulo: 'Nivel Final',
    subtitulo: 'Sostenibilidad e inocuidad · 7 de junio, Día Mundial de la Inocuidad',

    facil: [], // Día 5 no tiene nivel fácil

    medio: [
      {
        pregunta: "Una certificación BAP (Best Aquaculture Practices) en un producto de salmón, ¿qué garantiza al consumidor?",
        opciones: [
          { texto: "Que el productor cumple estándares de inocuidad y medioambiente verificados — los pilares sociales y de bienestar animal son opcionales según el mercado destino", correcta: false },
          { texto: "Que toda la cadena — desde el alimento del pez hasta la planta de proceso — está certificada bajo los mismos criterios", correcta: false },
          { texto: "Que el productor cumple estándares verificados de inocuidad, medioambiente, responsabilidad social y bienestar animal — aunque no todos los eslabones necesariamente están certificados al mismo tiempo", correcta: true },
        ],
        feedbackCorrecto: "✅ BAP evalúa cuatro pilares simultáneamente. Sin embargo, cada eslabón de la cadena se certifica independientemente. El número de estrellas en el sello indica cuántos eslabones están certificados — de 1 a 4 estrellas.",
        feedbackIncorrecto: "❌ Los cuatro pilares no son opcionales — todos son evaluados. La certificación de cadena completa (4 estrellas) es el ideal pero no el único escenario posible.",
      },
      {
        pregunta: "¿Por qué un productor de salmón sostenible tiende a tener también mejor control de inocuidad?",
        opciones: [
          { texto: "Porque las certificaciones de sostenibilidad incluyen requisitos de inocuidad como condición de aprobación", correcta: false },
          { texto: "Porque las mismas prácticas que reducen el impacto ambiental — control de densidad, monitoreo de agua, uso responsable de insumos — también generan un producto más sano y trazable", correcta: true },
          { texto: "No hay relación directa — sostenibilidad e inocuidad son dimensiones independientes que se certifican por separado", correcta: false },
        ],
        feedbackCorrecto: "✅ Sostenibilidad e inocuidad comparten raíces comunes: control del proceso, trazabilidad, monitoreo sistemático y responsabilidad en el uso de insumos. Un productor que gestiona bien su impacto ambiental generalmente tiene también mejor control sobre lo que entra y sale de su sistema productivo.",
        feedbackIncorrecto: "❌ Aunque se certifican por marcos distintos, sostenibilidad e inocuidad no son dimensiones independientes en la práctica. Las certificaciones como BAP integran ambas porque reconocen que un sistema productivo responsable no puede separar una de la otra.",
      },
      {
        pregunta: "El bienestar animal en acuicultura de salmón, ¿tiene alguna relación con la calidad del producto final?",
        opciones: [
          { texto: "No — el bienestar animal es una consideración ética sin impacto en la calidad del producto", correcta: false },
          { texto: "Sí — el estrés crónico en los peces afecta la textura del músculo, el perfil de grasa y puede comprometer la respuesta inmune, aumentando el riesgo de enfermedad y uso de antibióticos", correcta: true },
          { texto: "Solo en términos de sabor — un pez estresado tiene sabor más amargo, pero no afecta inocuidad ni valor nutricional", correcta: false },
        ],
        feedbackCorrecto: "✅ El bienestar animal no es solo ética — es tecnología productiva. El estrés crónico activa el eje cortisol que degrada músculo, altera el perfil lipídico y suprime la respuesta inmune. Peces con mejor bienestar requieren menos antibióticos y producen músculo de mejor calidad.",
        feedbackIncorrecto: "❌ El impacto del bienestar animal va mucho más allá del sabor. Afecta la composición del músculo, la respuesta inmune y directamente el uso de antibióticos — que sí tiene implicancias de inocuidad y salud pública.",
      },
    ],

    experto: [
      {
        pregunta: "La resistencia antimicrobiana (RAM) en acuicultura, ¿cómo puede afectar a un consumidor que nunca ha tomado antibióticos?",
        opciones: [
          { texto: "No puede — la RAM solo afecta a quienes han estado expuestos a antibióticos directamente", correcta: false },
          { texto: "El uso de antibióticos en acuicultura selecciona bacterias resistentes que pueden transferirse al consumidor vía alimento o ambiente acuático, comprometiendo tratamientos médicos futuros", correcta: true },
          { texto: "Solo si consume el producto crudo — la cocción elimina las bacterias resistentes y neutraliza el riesgo", correcta: false },
        ],
        feedbackCorrecto: "✅ La resistencia antimicrobiana es un problema colectivo — las decisiones de uso de antibióticos en producción animal afectan el pool global de resistencia. Genes de resistencia pueden transferirse horizontalmente entre bacterias, incluyendo patógenos humanos. La OMS clasifica la RAM como una de las diez principales amenazas globales de salud pública.",
        feedbackIncorrecto: "❌ La RAM no requiere exposición directa a antibióticos. La cocción elimina bacterias vivas pero no los genes de resistencia que ya se transfirieron. La exposición puede ser vía consumo, agua o simplemente el ecosistema microbiano afectado.",
      },
      {
        pregunta: "¿Qué ventaja concreta ofrece un sistema de trazabilidad completa en caso de un retiro de mercado por L. monocytogenes?",
        opciones: [
          { texto: "Permite retirar todo el producto de esa especie del mercado de forma preventiva — es la única respuesta proporcional ante un positivo", correcta: false },
          { texto: "Elimina la necesidad de análisis microbiológico — si la trazabilidad es completa, se sabe exactamente qué lotes están afectados sin muestreo adicional", correcta: false },
          { texto: "Permite acotar el retiro a los lotes específicamente vinculados al problema, reduciendo el impacto económico y evitando retirar producto seguro innecesariamente", correcta: true },
        ],
        feedbackCorrecto: "✅ La trazabilidad no evita los problemas — los hace manejables. Un sistema robusto identifica exactamente qué lotes, en qué fechas y en qué líneas se produjo el producto afectado. FSMA 204 exige precisamente este nivel de trazabilidad para productos de alto riesgo como el salmón listo para consumo (RTE).",
        feedbackIncorrecto: "❌ Retirar todo el producto de una especie es desproporcionado — la trazabilidad existe para evitar eso. Y no reemplaza el análisis microbiológico — son herramientas complementarias. La secuenciación genómica completa (WGS) junto con la trazabilidad es lo que permite vincular un caso clínico a un lote específico.",
      },
      {
        pregunta: "ASC (Aquaculture Stewardship Council) y BAP (Best Aquaculture Practices) son las dos principales certificaciones de sostenibilidad en acuicultura de salmón. ¿Cuál es la diferencia más relevante para un profesional de inocuidad?",
        opciones: [
          { texto: "ASC es más exigente en inocuidad alimentaria — BAP se enfoca exclusivamente en sostenibilidad ambiental", correcta: false },
          { texto: "Son equivalentes en contenido — la diferencia es solo geográfica, ASC predomina en Europa y BAP en América", correcta: false },
          { texto: "BAP integra explícitamente inocuidad alimentaria como uno de sus cuatro pilares evaluados, mientras ASC se enfoca en sostenibilidad ambiental y social — ambas son complementarias, no equivalentes", correcta: true },
        ],
        feedbackCorrecto: "✅ Para un profesional de inocuidad, la distinción importa: BAP incluye requisitos de HACCP, control de patógenos, trazabilidad y manejo de químicos. ASC prioriza impacto ambiental, derechos laborales y relación con comunidades. Muchos productores buscan ambas porque se complementan. South Wind trabaja con el estándar BAP precisamente porque integra inocuidad y sostenibilidad en un solo marco.",
        feedbackIncorrecto: "❌ ASC sí incluye requisitos de inocuidad pero no con la misma profundidad que BAP. No son equivalentes ni intercambiables — tienen focos distintos y metodologías de auditoría diferentes.",
      },
    ],
  },
};

// ── Selector de preguntas ─────────────────────────────────
function getPreguntasDia(dia, nivel) {
  const diaData = PREGUNTAS_V2[dia];
  if (!diaData) return [];
  return diaData[nivel] || [];
}
