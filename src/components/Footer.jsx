import { useLocation } from 'react-router-dom';
import festLogo from "../assets/fest copy.png";

const Footer = () => {
  const location = useLocation();
  const isCompetitionPage = location.pathname === '/competition';

  return (
    <footer className={`py-6 ${isCompetitionPage ? 'bg-[rgb(95,188,215)]' : 'bg-[#FF7F50]'}`}>
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
