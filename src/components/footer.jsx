

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800 backdrop-blur-sm">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-300">
          © 2025 SANWUYAOBA. All rights reserved. <span className="w-5"></span>
          <a href="https://beian.miit.gov.cn/">粤ICP备2024349423号-1</a> 
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
  )
}