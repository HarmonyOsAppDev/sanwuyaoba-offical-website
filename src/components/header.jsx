import logoImage from "../assets/logo.png";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };


  return (
    <nav className="md:z-1 relative z-20 px-8 py-6 flex justify-between items-center backdrop-blur-sm border-b border-gray-800">
    <div className="flex items-center gap-2">
      <img
        src={logoImage}
        alt="Logo"
        className="w-12 h-12"
        onClick={() => handleNavigation('/')}
      />
      {/* <span className="text-lg font-bold text-white">
        三五宇宙
      </span> */}
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex gap-4">
      <Button 
        variant="ghost" 
        className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
        onClick={() => handleNavigation('/introduction')}
      >
        应用介绍
      </Button>

      <Button 
        variant="ghost" 
        className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
        onClick={() => handleNavigation('/company')}
      >
        公司介绍
      </Button>
      <Button 
        variant="ghost" 
        className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
        onClick={() => handleNavigation('/contact')}
      >
        联系我们
      </Button>
    </div>

    {/* Mobile Menu Button */}
    <button 
      className="md:hidden text-gray-300 hover:text-white transition-colors"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
    </button>

    {/* Mobile Menu */}
    <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
      <div className="flex flex-col p-4">
        <Button 
          variant="ghost" 
          className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors w-full justify-start"
          onClick={() => handleNavigation('/introduction')}
        >
          应用介绍
        </Button>

        <Button 
          variant="ghost" 
          className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors w-full justify-start"
          onClick={() => handleNavigation('/company')}
        >
          公司介绍
        </Button>

        <Button 
          variant="ghost" 
          className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors w-full justify-start"
          onClick={() => handleNavigation('/contact')}
        >
          联系我们
        </Button>
      </div>
    </div>
  </nav>
  )
}