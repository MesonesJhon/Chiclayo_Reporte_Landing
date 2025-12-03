import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Municipalidad Provincial de Chiclayo</h3>
            <p className="footer-subtitle">Proyecto: "Chiclayo Reporta"</p>
            <p className="footer-description">
              Aplicación móvil para reportar incidencias urbanas de manera rápida, 
              segura y georreferenciada.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Autores del Proyecto</h4>
            <ul className="footer-authors">
              <li>Mesones Manallaye Jhon Esnaider</li>
              <li>Mechan Parra Anthony Joel</li>
              <li>Martínez Salazar Carlos Daniel</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Municipalidad Provincial de Chiclayo. 
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
