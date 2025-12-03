import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Hero.css';

export const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="hero" ref={ref}>
      <div className="hero-background"></div>
      <div className="container hero-content">
        <div className={`hero-text ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="hero-title">CHICLAYO REPORTE</h1>
          <p className="hero-subtitle">La app que conecta al ciudadano con la Municipalidad</p>
          <p className="hero-description">
            Reporta incidencias urbanas en segundos con geolocalización y evidencia.
            Tu voz construye una ciudad mejor.
          </p>
          <button className="btn btn-primary hero-cta" onClick={() => window.location.href = '/app-debug.apk'}>
            Descargar App
          </button>
        </div>
        
        <div className={`hero-mockup ${isVisible ? 'animate-scale-in' : ''}`}>
          <div className="phone-frame">
            <div className="phone-screen">
              <img 
                src="/login-app.jpg" 
                alt="Chiclayo Reporta - Pantalla de inicio de sesión" 
                className="app-screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
