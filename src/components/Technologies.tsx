import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Technologies.css';

const techData = [
  {
    name: 'RENIEC',
    icon: '🪪',
    description: 'Consulta DNI',
    detail: 'Validación de identidad mediante Decolecta'
  },
  {
    name: 'Google Maps',
    icon: '🗺️',
    description: 'Mapas Interactivos',
    detail: 'Ubicación precisa, rutas y direcciones'
  },
  {
    name: 'Firebase FCM',
    icon: '🔔',
    description: 'Notificaciones Push',
    detail: 'Notificaciones automatizadas a smartphones'
  },
  {
    name: 'PythonAnywhere',
    icon: '🐍',
    description: 'Backend API',
    detail: 'Autenticación, reportes, usuarios, zonas y tokens'
  }
];

export const Technologies = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="technologies section" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : ''}`}>
          Integraciones Tecnológicas
        </h2>
        <div className="tech-grid grid grid-4">
          {techData.map((tech, index) => (
            <div
              key={index}
              className={`tech-card card ${isVisible ? 'animate-scale-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-description">{tech.description}</p>
              <p className="tech-detail">{tech.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
