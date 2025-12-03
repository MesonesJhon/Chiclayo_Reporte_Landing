import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './CTA.css';

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="cta section" ref={ref}>
      <div className="cta-background"></div>
      <div className="container">
        <div className={`cta-content ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="cta-title">Descarga "Chiclayo Reporta"</h2>
          <p className="cta-subtitle">Tu reporte construye una ciudad mejor</p>
          <div className="cta-buttons">
            <a 
              href="/app-debug.apk" 
              download="ChiclayoReporta.apk"
              className="btn btn-primary cta-button"
            >
              <span className="button-icon">📱</span>
              Descargar para Android
            </a>
            <a 
              href="/app-debug.apk" 
              download="ChiclayoReporta.apk"
              className="btn btn-outline cta-button"
            >
              <span className="button-icon">🍎</span>
              Descargar para iOS
            </a>
          </div>
          <p className="cta-note">Próximamente disponible en tiendas oficiales</p>
        </div>
      </div>
    </section>
  );
};
