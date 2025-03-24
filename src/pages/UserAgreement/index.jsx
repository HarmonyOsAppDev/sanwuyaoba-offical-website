// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import backgroundImage from "../../assets/planet-581239_1920.jpg";
import logoImage from "../../assets/logo.png";
import { Link } from 'react-router-dom';

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
         
          
          {/* App Store Buttons */}
    
 
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

const UserAgreement = () => {
  return (
    <div className="min-h-screen bg-black text-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">用户协议</h1>
          <p className="text-gray-300 mb-2">最后更新日期：2024年5月1日</p>
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            返回首页
          </Link>
        </div>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. 协议介绍</h2>
            <p>
              欢迎使用三五宇宙应用程序（以下简称"本应用"）。本用户协议（以下简称"协议"）是您与三五宇宙（以下简称"我们"）之间就本应用的使用等相关事宜所订立的契约。请您仔细阅读本协议的全部内容（特别是以粗体标注的内容），如果您不同意本协议的任意内容，请勿注册或使用本服务。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. 账号注册与安全</h2>
            <p>
              2.1 用户在使用本服务前需要注册一个"三五宇宙"账号。账号应当使用真实、准确、完整、合法有效的信息进行注册，并保持更新。
            </p>
            <p>
              2.2 用户应自行负责对账号和密码的保密，且须对账号项下的所有行为和事件承担责任。如发现任何未经授权使用用户账号或存在其他安全漏洞的情况，应立即通知我们。
            </p>
            <p>
              2.3 <strong>我们保留在任何时候收回用户账号的权利。</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. 服务内容与规范</h2>
            <p>
              3.1 本应用提供的服务内容主要包括但不限于：宇宙探索、实时追踪、虚拟之旅等功能。
            </p>
            <p>
              3.2 用户在使用本服务时不得违反国家法律法规、侵犯他人合法权益，不得利用本服务从事任何违法或不当的活动，包括但不限于：
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>发布、传播违法信息</li>
              <li>侵犯他人知识产权、商业秘密等合法权利</li>
              <li>干扰本应用的正常运行</li>
              <li>未经授权，尝试访问服务器数据或系统</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. 知识产权</h2>
            <p>
              4.1 本应用的所有内容，包括但不限于文本、图像、音频、视频、软件、程序、代码等均受版权、商标或其他财产所有权法律的保护。
            </p>
            <p>
              4.2 未经我们明确书面许可，用户不得以任何商业目的复制、修改、发布、传播或利用上述内容。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. 隐私保护</h2>
            <p>
              我们重视用户的隐私保护，关于用户个人信息的收集、使用、共享和保护等具体规则，请参见《隐私政策》。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. 免责声明</h2>
            <p>
              6.1 本应用提供的宇宙数据和信息仅供参考，我们尽力确保其准确性，但不保证其完全无误。
            </p>
            <p>
              6.2 <strong>我们不对因网络状况、通讯线路、第三方网站或机构等任何原因而导致的服务中断或不能满足用户要求的情况承担责任。</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. 协议修改</h2>
            <p>
              我们保留随时修改本协议的权利。对本协议的修改将通过在应用内发布通知的形式公布，修改后的协议一经公布即代替原协议。如用户继续使用本服务，则视为已接受修改后的协议。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. 终止服务</h2>
            <p>
              8.1 如用户违反本协议的规定，我们有权终止对该用户的服务。
            </p>
            <p>
              8.2 用户可以通过注销账号的方式终止与我们的服务关系。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. 适用法律与争议解决</h2>
            <p>
              本协议的订立、执行和解释及争议的解决均应适用中国法律。如发生本协议相关的任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向我们所在地有管辖权的人民法院提起诉讼。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. 联系我们</h2>
            <p>
              如您对本协议或本应用的使用有任何问题，请通过以下方式联系我们：
            </p>
            <p>电子邮件：support@sanwuyaoba.com</p>
          </section>
        </div>

     
      </div>
    </div>
  );
};

export default UserAgreement;