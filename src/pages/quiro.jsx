import React from "react";
import "./quiro.css";
import {
  MapPin,
  MessageCircle,
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Star,
  Phone,
  Clock3,
} from "lucide-react";
import doctorImg from "../assets/img/daniel_quiro.png";

const services = [
  {
    title: "Ajuste quiropráctico",
    desc: "Sesiones enfocadas en aliviar molestias, mejorar movilidad y recuperar bienestar físico.",
  },
  {
    title: "Rehabilitación",
    desc: "Acompañamiento terapéutico para fortalecer, corregir postura y prevenir recaídas.",
  },
  {
    title: "Presoterapia",
    desc: "Tratamiento complementario para favorecer circulación, recuperación y sensación de ligereza.",
  },
  {
    title: "Valoración personalizada",
    desc: "Cada paciente recibe atención individual para definir el tratamiento ideal según su caso.",
  },
];

const pains = [
  "Dolor de espalda constante",
  "Tensión y rigidez en cuello",
  "Estrés muscular por trabajo o postura",
  "Molestias lumbares y mala movilidad",
];

const testimonials = [
  {
    name: "Paciente satisfecho",
    text: "Desde las primeras sesiones sentí alivio. La atención fue profesional y muy clara.",
  },
  {
    name: "Paciente frecuente",
    text: "Me ayudó bastante con dolor de cuello y postura. El trato se siente muy profesional.",
  },
  {
    name: "Nuevo paciente",
    text: "Todo muy limpio, ordenado y confiable. Me gustó mucho la experiencia y el seguimiento.",
  },
];

const highlights = [
  "Atención profesional y personalizada",
  "Ubicación en Monterrey",
  "Contacto directo por WhatsApp",
  "Imagen moderna y confiable",
];

export default function quiro() {
  return (
    <div className="quiro-page">
      <section className="quiro-hero">
        <div className="quiro-hero-bg"></div>
        <div className="quiro-glow"></div>

        <div className="quiro-container quiro-hero-grid">
          <div className="quiro-hero-text">
            <div className="quiro-badge">
              <Sparkles size={16} />
              <span>Quiropráctico en Monterrey</span>
            </div>

            <h1>
              Recupera tu <span>bienestar</span>
              <br />
              sin dolor
            </h1>

            <p className="quiro-hero-description">
              Tratamientos quiroprácticos profesionales para aliviar molestias
              de espalda, cuello y postura, con atención personalizada y
              contacto directo para agendar fácilmente.
            </p>

            <div className="quiro-hero-actions">
              <a
                href="https://wa.me/528181692604?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
                className="quiro-btn quiro-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                Agendar por WhatsApp
              </a>

              <a href="#servicios" className="quiro-btn quiro-btn-secondary">
                Ver servicios
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="quiro-highlights">
              {highlights.map((item) => (
                <div key={item} className="quiro-highlight-item">
                  <ShieldCheck size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="quiro-hero-card-wrap">
            <div className="quiro-hero-card-glow"></div>
            <div className="quiro-hero-card">
              <div className="quiro-hero-image-box">
                {/*
                  Cambia esta ruta por tu imagen real
                  Ejemplo:
                  import doctorImg from "./assets/daniel.png";
                  y luego src={doctorImg}
                */}
                <img
                  src={doctorImg}
                  alt="Daniel Cabrera Quiropráctico"
                  className="quiro-hero-image"
                />

                <div className="quiro-hero-image-overlay"></div>

                <div className="quiro-hero-info">
                  <p>Daniel Cabrera</p>
                  <h2>Quiropráctico</h2>
                  <span>
                    Atención profesional con imagen moderna, enfoque clínico y
                    trato cercano para cada paciente.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quiro-section quiro-section-light">
        <div className="quiro-container">
          <div className="quiro-section-head">
            <p className="quiro-mini-title">Problemas comunes</p>
            <h2>¿Te identificas con alguna de estas molestias?</h2>
            <p className="quiro-section-text">
              La página está pensada para conectar rápido con pacientes reales
              que buscan alivio, confianza y una forma fácil de agendar.
            </p>
          </div>

          <div className="quiro-grid quiro-grid-4">
            {pains.map((item) => (
              <div key={item} className="quiro-card quiro-pain-card">
                <div className="quiro-icon-box">
                  <HeartPulse size={24} />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="quiro-section quiro-section-soft">
        <div className="quiro-container">
          <div className="quiro-services-top">
            <div className="quiro-section-head">
              <p className="quiro-mini-title">Servicios</p>
              <h2>Una propuesta pensada para verse profesional y convertir</h2>
            </div>

            <p className="quiro-section-text quiro-services-text">
              Cada bloque ayuda a comunicar confianza, explicar tratamientos y
              llevar al visitante a una cita por WhatsApp.
            </p>
          </div>

          <div className="quiro-grid quiro-grid-4">
            {services.map((service) => (
              <div key={service.title} className="quiro-card quiro-service-card">
                <div className="quiro-icon-box">
                  <Sparkles size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quiro-section quiro-section-dark">
        <div className="quiro-dark-bg"></div>
        <div className="quiro-container">
          <div className="quiro-section-head quiro-section-head-dark">
            <p className="quiro-mini-title">Testimonios</p>
            <h2>Confianza que ayuda a cerrar más citas</h2>
            <p className="quiro-section-text">
              Aquí puedes colocar reseñas reales de Google, comentarios de
              pacientes y resultados visibles del consultorio.
            </p>
          </div>

          <div className="quiro-grid quiro-grid-3">
            {testimonials.map((item) => (
              <div key={item.name} className="quiro-card quiro-testimonial-card">
                <div className="quiro-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="quiro-testimonial-text">“{item.text}”</p>
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quiro-section quiro-section-light">
        <div className="quiro-container quiro-location-grid">
          <div>
            <div className="quiro-section-head">
              <p className="quiro-mini-title">Ubicación</p>
              <h2>Encuéntranos en Monterrey</h2>
              <p className="quiro-section-text">
                Esta sección refuerza confianza, da claridad a la ubicación y
                permite que el visitante llegue rápido al consultorio.
              </p>
            </div>

            <div className="quiro-grid quiro-grid-2">
              <div className="quiro-card quiro-info-card">
                <MapPin size={24} />
                <h3>Dirección</h3>
                <p>
                  P.º de las Estrellas 123, Cumbres 5o Sector, Monterrey, Nuevo
                  León.
                </p>
              </div>

              <div className="quiro-card quiro-info-card">
                <Clock3 size={24} />
                <h3>Atención</h3>
                <p>
                  Horarios visibles, botón directo a WhatsApp y acceso rápido
                  para nuevos pacientes.
                </p>
              </div>
            </div>
          </div>

          <div className="quiro-map-wrap">
            <div className="quiro-map-card">
              <div className="quiro-map-placeholder"></div>
              <h3>Mapa interactivo</h3>
              <p>
                Aquí puedes integrar Google Maps para mostrar la ubicación
                exacta y facilitar cómo llegar al consultorio.
              </p>

              <a
                href="https://wa.me/528181692604?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                className="quiro-btn quiro-btn-map"
                target="_blank"
                rel="noreferrer"
              >
                <Phone size={20} />
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="quiro-section quiro-cta-section">
        <div className="quiro-cta-bg"></div>
        <div className="quiro-cta-glow"></div>

        <div className="quiro-container">
          <div className="quiro-cta-card">
            <p className="quiro-mini-title">Llamado a la acción</p>
            <h2>Agenda tu consulta hoy mismo</h2>
            <p>
              Una landing así no solo se ve profesional: está pensada para
              convertir visitas en pacientes potenciales desde celular.
            </p>

            <div className="quiro-hero-actions quiro-cta-actions">
              <a
                href="https://wa.me/528181692604?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20consulta"
                className="quiro-btn quiro-btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                Enviar WhatsApp
              </a>

              <a href="#servicios" className="quiro-btn quiro-btn-secondary">
                Ver propuesta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}