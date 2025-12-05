import React from "react";

const trailerVideo = {
  src: "/elvia/videos/trailer-elvia.mp4",
  title: "Trailer oficial EL-VÍA",
  description:
    "Un recorrido de 40 segundos por la experiencia completa: módulos, IA y certificación final.",
};

const promoVideos = [
  {
    src: "/elvia/videos/pago-acceso.mp4",
    title: "Pago y acceso inmediato",
    description: "Compra en segundos y entra directo al entrenamiento EL-VÍA.",
  },
  {
    src: "/elvia/videos/frases-dot.mp4",
    title: "Frases reales del DOT",
    description:
      "Escucha y practica las frases más comunes que usa el inspector durante una inspección real.",
  },
  {
    src: "/elvia/videos/roleplays.mp4",
    title: "Roleplays en tiempo real",
    description: "Simulaciones completas para que entrenes antes de la próxima inspección.",
  },
  {
    src: "/elvia/videos/pronunciation.mp4",
    title: "Pronunciación asistida",
    description: "Mejora tu pronunciación con ejemplos prácticos y repetición guiada.",
  },
  {
    src: "/elvia/videos/examen-inteligente.mp4",
    title: "Examen inteligente",
    description: "Evalúa tu nivel real con preguntas adaptadas a tu desempeño.",
  },
  {
    src: "/elvia/videos/vista-general.mp4",
    title: "Vista general del curso",
    description: "Recorre todo EL-VÍA en segundos y entiende cómo avanzar.",
  },
  {
    src: "/elvia/videos/retro-ia-1.mp4",
    title: "Retroalimentación IA – Caso 1",
    description: "Ejemplo real de cómo el agente cognitivo corrige y guía tus respuestas.",
  },
  {
    src: "/elvia/videos/retro-ia-2.mp4",
    title: "Retroalimentación IA – Caso 2",
    description: "Más ejemplos de cómo la IA te acompaña en contexto dentro del curso.",
  },
];

const whoIsFor = [
  "Camioneros latinos que enfrentan inspecciones DOT en Estados Unidos.",
  "Dueños de camión (owner operators) que quieren proteger mejor su unidad y su licencia.",
  "Fleets pequeñas y medianas que necesitan que su equipo entienda el idioma del inspector.",
];

const keyBenefits = [
  "Disminuir el miedo y el estrés frente a una parada DOT.",
  "Evitar multas por errores básicos de comunicación o documentación.",
  "Mejorar tu empleabilidad y acceso a mejores cargas y mejores compañías.",
  "Demostrar profesionalismo frente a aseguradoras, brokers y clientes.",
];

const faqs = [
  {
    question: "¿Cuánto dura EL-VÍA y cuánto tiempo debo estudiar?",
    answer:
      "EL-VÍA está diseñado para completarse en 7 días, con sesiones de 20 a 30 minutos. Puedes ir a tu ritmo y repetir los módulos cuantas veces quieras durante 12 meses.",
  },
  {
    question: "¿Necesito hablar inglés perfecto para aprovechar el curso?",
    answer:
      "No. El entrenamiento es bilingüe: español e inglés operativo de carretera. Aprendes exactamente las frases que necesitas para pasar la inspección, sin gramática innecesaria.",
  },
  {
    question: "¿Qué pasa si nunca he tenido una inspección DOT?",
    answer:
      "Mejor. Llegas preparado a la primera. EL-VÍA te muestra el paso a paso de la inspección, el tipo de preguntas que hacen y cómo responder de forma segura.",
  },
  {
    question: "¿Puedo usar EL-VÍA para entrenar a mis choferes?",
    answer:
      "Sí. Muchas pequeñas flotas pueden usar una sola compra como guía base de entrenamiento interno. Si necesitas licencias múltiples, podemos hablar de un plan especial para empresas.",
  },
];

export default function ElviaLanding() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/elvia/logo-elvia.png" className="w-10" alt="Logo" />
            <span className="text-[#E7B8A8] font-semibold tracking-wide text-sm uppercase">
              EL‑VÍA
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs md:text-sm">
            <a href="tel:+16085576282" className="hidden sm:inline text-gray-200 hover:text-[#E7B8A8] transition">
              📞 (608) 557-6282
            </a>
            <a
              href="https://elvia.solyontechnologies.com"
              className="text-xs md:text-sm font-semibold text-black bg-[#E7B8A8] px-4 py-2 rounded-xl shadow hover:opacity-90 transition"
            >
              Comprar acceso
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
          <div className="flex justify-center mb-10">
            <img
              src="/elvia/logo-elvia.png" // logo en /public/elvia/
              alt="EL-VÍA Logo"
              className="w-40 md:w-52 drop-shadow-[0_0_40px_rgba(231,184,168,0.45)]"
            />
          </div>

          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#E7B8A8] mb-4">
            Curso DOT en español · EL-VÍA · By Elizabeth Tamayo
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#E7B8A8] mb-6 leading-tight">
            Aprende el idioma del DOT y protege tu trabajo.
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Entrenamiento cognitivo diseñado para camioneros latinos en Estados Unidos. Aprendes las frases reales del
            inspector DOT, practicas respuestas y dominas el proceso completo de inspección, paso a paso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://elvia.solyontechnologies.com"
              className="inline-flex items-center justify-center rounded-2xl bg-[#E7B8A8] text-black font-semibold px-10 py-4 text-lg shadow-[0_0_40px_rgba(231,184,168,0.45)] hover:opacity-90 transition"
            >
              Comenzar ahora – $199
            </a>
            <a
              href="#videos"
              className="inline-flex items-center justify-center rounded-2xl border border-[#E7B8A8]/60 px-8 py-4 text-sm md:text-base text-gray-100 hover:bg-[#111] transition"
            >
              Ver cómo funciona EL-VÍA
            </a>
          </div>

          <p className="text-xs text-gray-500 mt-4 uppercase tracking-[0.25em]">
            Lanzamiento especial · Acceso por 12 meses · Cupos limitados
          </p>

          {/* VIDEO INTRO 8s – ENTRADA PRINCIPAL */}
          <div className="mt-10 max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden border border-[#E7B8A8]/60 shadow-[0_0_50px_rgba(231,184,168,0.45)]">
              <div className="relative w-full aspect-video bg-black">
                <video
                  src="/elvia/videos/intro-elvia.mp4" // 8s: "EL-VÍA te enseña inglés operativo y evoluciona contigo"
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300 text-xs md:text-sm mt-3">
              En solo 8 segundos ves el corazón de EL-VÍA: inglés operativo, inteligencia artificial y un entrenamiento
              que evoluciona contigo en cada inspección DOT.
            </p>
          </div>
        </div>
      </section>

      {/* QUE ES EL-VIA + ECOSISTEMA */}
      <section className="py-16 md:py-20 border-t border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.3fr,1.1fr] gap-12 items-start">
          {/* Columna izquierda: explicación del curso */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#E7B8A8] mb-6">¿Qué es EL-VÍA?</h2>
            <p className="text-gray-300 mb-4">
              EL-VÍA es un entrenamiento práctico, bilingüe y guiado por IA soberana, que te prepara para enfrentar
              inspecciones DOT reales. No es solo un curso de inglés: es el idioma operativo del DOT, explicado paso a
              paso, con simulaciones reales y retroalimentación inmediata.
            </p>
            <p className="text-gray-400 text-sm mb-4">
              En 7 días y con 20 minutos al día puedes dominar lo que realmente ven en carretera: preguntas del
              inspector, documentos, señalización, respuestas correctas y errores que nunca deberías cometer.
            </p>
            <p className="text-gray-400 text-sm">
              Todo esto vive dentro del ecosistema SOLYON: una arquitectura DeepTech que conecta tu progreso con
              agentes cognitivos dedicados, diseñados exclusivamente para camioneros latinos.
            </p>
          </div>

          {/* Columna derecha: ecosistema y agentes cognitivos */}
          <div className="space-y-5">
            <div className="bg-[#080808] border border-[#E7B8A8]/40 rounded-3xl p-5 shadow-[0_0_40px_rgba(231,184,168,0.18)]">
              <h3 className="text-lg font-semibold text-[#E7B8A8] mb-3">Ecosistema SOLYON para EL-VÍA</h3>
              <p className="text-gray-300 text-sm mb-3">
                EL-VÍA no es un curso suelto: es el primer producto comercial del ecosistema SOLYON Technologies.
                Detrás de cada pantalla hay una orquesta tecnológica completa:
              </p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  • <span className="text-[#E7B8A8] font-semibold">Arcanum</span>: cerebro cognitivo soberano donde viven los modelos de IA.
                </li>
                <li>
                  • <span className="text-[#E7B8A8] font-semibold">Nexus</span>: sistema nervioso que coordina tu progreso, intentos y
                  retroalimentación.
                </li>
                <li>
                  • Infraestructura desplegada en la nube de Google (Vertex AI), pensada para escalar a miles de estudiantes.
                </li>
              </ul>
            </div>

            <div className="bg-[#080808] border border-[#E7B8A8]/40 rounded-3xl p-5 shadow-[0_0_40px_rgba(231,184,168,0.18)]">
              <h3 className="text-lg font-semibold text-[#E7B8A8] mb-3">2 agentes cognitivos dedicados a EL-VÍA</h3>
              <p className="text-gray-300 text-sm mb-3">
                Dentro de EL-VÍA trabajan dos agentes cognitivos exclusivos, entrenados para hablar el mismo idioma
                que el DOT y el camionero latino:
              </p>
              <ul className="text-gray-300 text-sm space-y-2 mb-3">
                <li>
                  • <span className="text-[#E7B8A8] font-semibold">Agente Coach DOT</span>: te guía en la lógica de las inspecciones, te explica qué
                  mira el inspector y cómo responder de forma clara y profesional.
                </li>
                <li>
                  • <span className="text-[#E7B8A8] font-semibold">Agente Lingüista</span>: te ayuda con pronunciación, frases clave y comprensión
                  real del inglés operativo que se usa en carretera.
                </li>
              </ul>
              <p className="text-gray-400 text-xs">
                Estos agentes no reemplazan al instructor: amplifican tu aprendizaje, te corrigen en contexto y
                convierten cada sesión en una experiencia personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES & BENEFICIOS CLAVE */}
      <section className="py-16 md:py-20 border-t border-[#2A2A2A] bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E7B8A8] mb-5">¿Para quién es EL-VÍA?</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              {whoIsFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#E7B8A8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E7B8A8] mb-5">Beneficios directos para ti.</h2>
            <ul className="space-y-3 text-gray-300 text-sm">
              {keyBenefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 rounded-full bg-[#E7B8A8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MODULOS */}
      <section className="py-16 md:py-20 border-t border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E7B8A8] text-center mb-10">
            Todo lo que necesitas para aprobar.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Frases reales del inspector DOT",
              "Roleplays y simulaciones guiadas",
              "Pronunciación asistida por IA",
              "Señalización y vocabulario crítico",
              "Examen inteligente final",
              "Certificado oficial EL-VÍA",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#080808] border border-[#E7B8A8]/40 rounded-3xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.6)]"
              >
                <p className="text-gray-100 font-semibold mb-2">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIZABETH */}
      <section className="py-16 md:py-20 border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr,1.4fr] gap-10 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative mb-4">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#E7B8A8] to-transparent opacity-60 blur-md" />
              <img
                src="/elvia/elizabeth.jpg" // foto de Elizabeth en /public/elvia/
                alt="Elizabeth Tamayo"
                className="relative w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border border-[#E7B8A8]"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#E7B8A8] mb-1">By Elizabeth Tamayo</p>
            <p className="text-gray-300 text-sm">Co-fundadora de SOLYON Technologies · Creadora de EL-VÍA</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E7B8A8] mb-4">
              Creado por una latina que entiende la realidad del camionero.
            </h2>
            <p className="text-gray-300 mb-3">
              Mi misión siempre ha sido empoderar a los camioneros latinos. Durante años vi el miedo que genera el DOT
              en conductores que son excelentes en su trabajo, pero que no dominan el idioma ni los códigos del
              sistema.
            </p>
            <p className="text-gray-300 mb-3">
              EL-VÍA nació para cambiar eso. Para devolver confianza, precisión y oportunidades. Para que, sin importar
              tu acento o tu historia, puedas mirar al inspector a los ojos y saber exactamente qué decir y qué hacer.
            </p>
            <p className="text-[#E7B8A8] text-sm">— Elizabeth Tamayo</p>
          </div>
        </div>
      </section>

      {/* VIDEOS – TRAILER + CLIPS VERTICALES */}
      <section id="videos" className="py-16 md:py-20 border-t border-[#2A2A2A] bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E7B8A8] text-center mb-10">
            Mira cómo se siente entrenar con EL-VÍA.
          </h2>

          {/* Trailer ancho */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#E7B8A8]/60 shadow-[0_0_40px_rgba(231,184,168,0.25)]">
              <div className="relative w-full aspect-video bg-black">
                <video src={trailerVideo.src} controls className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center mt-4">
              <h3 className="text-lg font-semibold text-[#E7B8A8] mb-1">{trailerVideo.title}</h3>
              <p className="text-gray-300 text-sm">{trailerVideo.description}</p>
            </div>
          </div>

          {/* Clips verticales principales: escenas dentro del entrenamiento */}
          <div className="mb-14">
            <h3 className="text-xl font-semibold text-[#E7B8A8] mb-6 text-center">
              Escenas reales dentro del entrenamiento.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {promoVideos.slice(0, 6).map((v) => (
                <div
                  key={v.src}
                  className="bg-black border border-[#E7B8A8]/35 rounded-3xl p-4 shadow-[0_0_30px_rgba(231,184,168,0.18)] flex flex-col"
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative w-[220px] md:w-[240px] aspect-[9/16] rounded-[32px] border border-[#E7B8A8]/60 overflow-hidden bg-black shadow-[0_0_40px_rgba(231,184,168,0.35)]">
                      <video src={v.src} controls className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#E7B8A8] mb-1 text-center">{v.title}</h4>
                  <p className="text-gray-300 text-xs text-center">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Clips de IA en acción */}
          <div>
            <h3 className="text-xl font-semibold text-[#E7B8A8] mb-6 text-center">
              IA en acción corrigiendo y guiando.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {promoVideos.slice(6).map((v) => (
                <div
                  key={v.src}
                  className="bg-black border border-[#E7B8A8]/35 rounded-3xl p-4 shadow-[0_0_30px_rgba(231,184,168,0.18)] flex flex-col"
                >
                  <div className="flex justify-center mb-4">
                    <div className="relative w-[220px] md:w-[240px] aspect-[9/16] rounded-[32px] border border-[#E7B8A8]/60 overflow-hidden bg-black shadow-[0_0_40px_rgba(231,184,168,0.35)]">
                      <video src={v.src} controls className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-[#E7B8A8] mb-1 text-center">{v.title}</h4>
                  <p className="text-gray-300 text-xs text-center">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICADO */}
      <section className="py-16 md:py-20 border-t border-[#2A2A2A]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E7B8A8] mb-6">
            Certificado oficial EL-VÍA.
          </h2>

          {/* Mockup real del certificado */}
          <div className="mx-auto max-w-3xl rounded-3xl overflow-hidden border border-[#E7B8A8]/60 shadow-[0_0_40px_rgba(231,184,168,0.25)]">
            <img
              src="/elvia/certificado-elvia.png" // GUARDA AQUÍ LA IMAGEN
              alt="Certificado oficial EL-VÍA"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mt-6">
            Al completar el entrenamiento y aprobar el examen inteligente, recibes tu certificado oficial
            con tu nombre, fecha, sello EL‑VÍA y firma de Elizabeth Tamayo. Un documento que demuestra
            dominio real del proceso DOT y del vocabulario crítico utilizado por inspectores.
          </p>
        </div>
      </section>

      {/* FAQ */} + GARANTÍA */{"}"}
      <section className="py-16 md:py-20 border-t border-[#2A2A2A] bg-[#050505]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr,1fr] gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#E7B8A8] mb-6">Preguntas frecuentes.</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="border border-[#2A2A2A] rounded-2xl p-4 bg-[#050505]"
                >
                  <p className="text-sm font-semibold text-[#E7B8A8] mb-1">{item.question}</p>
                  <p className="text-gray-300 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#080808] border border-[#E7B8A8]/40 rounded-3xl p-6 shadow-[0_0_30px_rgba(231,184,168,0.3)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#E7B8A8] mb-3">Garantía y seguridad.</h3>
              <p className="text-gray-300 text-sm mb-3">
                Si aplicas el contenido de EL-VÍA y sientes que no te ayudó a entender mejor el proceso DOT, contáctanos
                durante los primeros 7 días. Revisaremos tu caso y buscaremos la mejor forma de apoyarte.
              </p>
              <p className="text-gray-400 text-xs">
                Tu inversión en conocimiento es menor que una sola multa DOT. La decisión inteligente es prepararte.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-[0.25em]">
                Especial para fleets y empresas
              </p>
              <p className="text-gray-300 text-sm mb-3">
                ¿Tienes varios conductores? Escríbenos para planes corporativos y entrenamiento recurrente.
              </p>
              <a
                href="mailto:info@solyontechnologies.com?subject=EL-VIA%20para%20mi%20flota"
                className="inline-flex items-center justify-center rounded-2xl border border-[#E7B8A8]/70 px-6 py-3 text-xs font-semibold text-[#E7B8A8] hover:bg-[#111] transition"
              >
                Hablar sobre entrenamiento para mi flota
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 border-t border-[#2A2A2A] bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E7B8A8] mb-4">
            Transforma tu carrera desde hoy.
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            EL-VÍA es el primer paso para dejar de tenerle miedo al DOT y empezar a usarlo a tu favor. Una sola
            inspección bien manejada puede ahorrarte mucho más que el valor del entrenamiento.
          </p>
          <a
            href="https://elvia.solyontechnologies.com"
            className="inline-flex items-center justify-center rounded-2xl bg-[#E7B8A8] text-black font-semibold px-12 py-4 text-lg shadow-[0_0_50px_rgba(231,184,168,0.55)] hover:opacity-90 transition"
          >
            Comenzar ahora – $199
          </a>
          <p className="text-xs text-gray-500 mt-4">
            Acceso inmediato · Contenido bilingüe · Actualizaciones incluidas durante 12 meses
          </p>
        </div>
      </section>
    </div>
  );
}
