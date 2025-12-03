import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Features.css';

const featuresData = [
  {
    icon: '🪪',
    title: 'Validación de Identidad con DNI',
    description: 'Registro seguro mediante consulta automática a RENIEC. Asegura que los reportes provengan de ciudadanos reales.'
  },
  {
    icon: '📸',
    title: 'Reportes con Evidencia',
    description: 'Fotos, videos y descripción del problema. Selección de categoría del incidente para mejor clasificación.'
  },
  {
    icon: '📍',
    title: 'Geolocalización Inteligente',
    description: 'Ubicación exacta del usuario o del incidente mediante Google Maps. Geocodificación y precisión ajustable.'
  },
  {
    icon: '🔄',
    title: 'Seguimiento en Tiempo Real',
    description: 'El usuario puede ver el estado del reporte (Pendiente, En Proceso, Resuelto). Notificaciones push cuando cambia el estado.'
  },
  {
    icon: '🗺️',
    title: 'Mapa Interactivo',
    description: 'Reportes públicos visibles en tiempo real en el mapa. Zonas de recolección con colores y delimitación.'
  },
  {
    icon: '📊',
    title: 'Dashboard Municipal Avanzado',
    description: 'Vista para administradores con análisis de zonas críticas y estadísticas en tiempo real.'
  },
  {
    icon: '🔔',
    title: 'Notificaciones Push Inteligentes',
    description: 'Integración con Firebase Cloud Messaging (FCM) para mantener informado al ciudadano.'
  }
];

export const Features = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="features section" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : ''}`}>
          Características Principales
        </h2>
        <div className="features-grid grid grid-3">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`feature-card card ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
