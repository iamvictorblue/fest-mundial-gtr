import { useLocation } from 'react-router-dom';
import festLogo from "../assets/fest copy.png";

const Footer = () => {
  const location = useLocation();
  const isFestivalPage = location.pathname.includes('festival');

  return (
    <footer className={`py-6 ${isFestivalPage ? 'bg-[#FF7F50]' : 'bg-[rgb(95,188,215)]'}`}>
      <div className="container mx-auto px-4 flex justify-center">
        <img 
          src={festLogo} 
          alt="Festival Logo" 
          className="h-16 object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </footer>
  );
};

export default Footer;
