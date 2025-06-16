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
    <nav className="md:z-1 relative z-20 px-4 md:px-8 py-4 md:py-6 flex justify-between items-center backdrop-blur-sm border-b border-gray-800">
    <div className="flex items-center gap-2">
      <img
        src={logoImage}
        alt="Logo"
        className="w-10 h-10 md:w-12 md:h-12"
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
      <Button 
        variant="ghost" 
        className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
        onClick={() => handleNavigation('/privacy-policy')}
      >
        隐私政策
      </Button>
      <Button 
        variant="ghost" 
        className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
        onClick={() => handleNavigation('/user-policy')}
      >
        用户协议
      </Button>
    </div>

    {/* Mobile Menu Button */}
    <button 
      className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>
    </button>

    {/* Mobile Menu */}
    <div 
      className={`md:hidden fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ top: '4rem' }}
    >
      <div className="flex flex-col p-6 space-y-4 bg-white">
        <Button 
          variant="ghost" 
          className="!rounded-button text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors w-full justify-start py-4"
          onClick={() => handleNavigation('/introduction')}
        >
          应用介绍
        </Button>

        <Button 
          variant="ghost" 
          className="!rounded-button text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors w-full justify-start py-4"
          onClick={() => handleNavigation('/company')}
        >
          公司介绍
        </Button>

        <Button 
          variant="ghost" 
          className="!rounded-button text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors w-full justify-start py-4"
          onClick={() => handleNavigation('/contact')}
        >
          联系我们
        </Button>

        <Button 
          variant="ghost" 
          className="!rounded-button text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors w-full justify-start py-4"
          onClick={() => handleNavigation('/privacy-policy')}
        >
          隐私政策
        </Button>

        <Button 
          variant="ghost" 
          className="!rounded-button text-lg font-medium cursor-pointer text-gray-700 hover:text-gray-900 transition-colors w-full justify-start py-4"
          onClick={() => handleNavigation('/user-policy')}
        >
          用户协议
        </Button>
      </div>
    </div>
  </nav>
  )
}