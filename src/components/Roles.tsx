import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Roles.css';

export const Roles = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="roles section" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : ''}`}>
          Roles del Sistema
        </h2>
        <div className="roles-grid grid grid-2">
          <div className={`role-card card ${isVisible ? 'animate-slide-in-left' : ''}`}>
            <div className="role-header">
              <div className="role-icon">👤</div>
              <h3 className="role-title">Ciudadano</h3>
            </div>
            <ul className="role-list">
              <li>✓ Registro con validación DNI RENIEC</li>
              <li>✓ Crear reportes con evidencia multimedia</li>
              <li>✓ Ver reportes propios y públicos</li>
              <li>✓ Seguimiento del estado en tiempo real</li>
              <li>✓ Recibir notificaciones push</li>
            </ul>
          </div>

          <div className={`role-card card ${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="role-header">
              <div className="role-icon">🏛️</div>
              <h3 className="role-title">Administrador Municipal</h3>
            </div>
            <ul className="role-list">
              <li>✓ Ver todos los reportes del sistema</li>
              <li>✓ Filtrar, atender y cambiar estado</li>
              <li>✓ Gestionar usuarios y bloquear cuentas</li>
              <li>✓ Dashboard de análisis y estadísticas</li>
              <li>✓ Mapa de incidentes críticos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
