// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import backgroundImage from "./assets/planet-581239_1920.jpg";
import logoImage from "./assets/logo.png";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex justify-between items-center backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center gap-2">
          <img
            src={logoImage}
            alt="Logo"
            className="w-12 h-12"
          />
          <span className="text-lg font-bold text-white">
            三五宇宙
          </span>
        </div>
        {/* <Button variant="ghost" className="!rounded-button text-md font-medium cursor-pointer text-gray-300 hover:text-white transition-colors">
          关于我们
        </Button> */}
      </nav>
      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20 min-h-[calc(100vh-180px)]">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-7xl font-bold mb-8 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            愿你拥有整个宇宙
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            踏上一段穿越宇宙的非凡旅程。下载我们的应用程序，从您的设备探索无限的太空奇观。
          </p>
          
          {/* App Store Buttons */}
          <div className="flex justify-center gap-6">
            <Button
              className="!rounded-button group relative overflow-hidden bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300"
            >
              <i className="fab fa-apple text-2xl mr-2"></i>
              App Store
            </Button>
            <Button
              className="!rounded-button group relative overflow-hidden bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300"
            >
              <i className="fab fa-google-play text-2xl mr-2"></i>
              Play Store
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: "fa-rocket",
                title: "宇宙探索",
                description: "探索宇宙中的星球、星系和星系团"
              },
              {
                icon: "fa-satellite",
                title: "实时追踪",
                description: "实时追踪卫星、空间站和天体事件"
              },
              {
                icon: "fa-user-astronaut",
                title: "虚拟之旅",
                description: "体验沉浸式的虚拟之旅，探索空间站和行星表面"
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <i className={`fas ${feature.icon} text-4xl text-white mb-4`}></i>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © 2025 SANWUYAOBA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-discord text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;