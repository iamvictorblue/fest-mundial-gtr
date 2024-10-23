import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold mb-2">Festival Mundial de La Guitarra</h3>
        <p className="text-sm text-gray-600 mb-4">Celebrando la excelencia de la guitarra desde [Año]</p>
        <div className="mb-4">
          <p className="text-sm text-gray-600">Email: info@festivalmundialdelaguitarra.com</p>
          <p className="text-sm text-gray-600">Teléfono: +[Número de Teléfono]</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Síguenos</h3>
          {/* Add social media links here */}
        </div>
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Festival Mundial de La Guitarra. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
