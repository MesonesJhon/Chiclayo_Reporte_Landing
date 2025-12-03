import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Distinguishes.css';

const distinguishesData = [
  { icon: '✅', text: 'Validación oficial de identidad (RENIEC)' },
  { icon: '📹', text: 'Reportes multimedia' },
  { icon: '🌐', text: 'Mapas en tiempo real' },
  { icon: '🔔', text: 'Notificaciones automáticas' },
  { icon: '🗺️', text: 'Zonas de recolección informativas' },
  { icon: '📊', text: 'Dashboard para la Municipalidad' },
  { icon: '🎯', text: 'Ubicación precisa por GPS' },
  { icon: '⚡', text: 'Experiencia moderna y simple' }
];

export const Distinguishes = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="distinguishes section" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : ''}`}>
          ¿Qué nos distingue?
        </h2>
        <div className="distinguishes-grid grid grid-4">
          {distinguishesData.map((item, index) => (
            <div
              key={index}
              className={`distinguish-card card ${isVisible ? 'animate-scale-in' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="distinguish-icon">{item.icon}</div>
              <p className="distinguish-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
