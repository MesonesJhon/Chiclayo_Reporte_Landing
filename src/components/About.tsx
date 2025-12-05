import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="about section" ref={ref}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'animate-fade-in' : ''}`}>
          ¿Qué es Chiclayo Reporta?
        </h2>
        <div className={`about-content ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <p className="about-text">
            <strong>Chiclayo Reporta</strong> es una aplicación móvil que permite a los ciudadanos 
            informar incidencias urbanas de manera rápida, segura y georreferenciada. Conecta 
            directamente al vecino con la <strong>Municipalidad Provincial de Chiclayo</strong> para 
            acelerar la atención de problemas en la ciudad.
          </p>
          <p className="about-text">
            Con tecnología de punta y validación oficial de identidad, garantizamos que cada reporte 
            sea auténtico y llegue a las autoridades correspondientes en tiempo real.
          </p>
        </div>
      </div>
    </section>
  );
};
