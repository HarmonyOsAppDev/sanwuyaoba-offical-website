// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import backgroundImage from "../../assets/planet-581239_1920.jpg";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Card } from "../../../components/ui/card";

export default function Introduction() {

  
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
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20 min-h-[calc(100vh-180px)]">
      <Card 
        className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
        <i className={`fas fa-info-circle text-3xl text-white`}> <span className="text-3xl font-bold text-white">应用介绍</span></i>
        <p className="text-gray-300">知微宇宙（astropearl）是由深圳市叁伍幺发科技有限公司开发的一款与实体星球ar交互的应用工具。用户通过授权的实体店或第三方电商平台（如淘宝、京东等）购买实体星球产品。每件实体星球均附带唯一的二维码激活凭证，该凭证与实体商品一一绑定，仅用于激活 APP 永久使用权限。
        用户下载 APP 并完成注册后，通过扫描二维码发起激活请求，APP 将此信息传输至我方服务器。服务器与销售系统数据库进行交叉验证，确认激活凭证的有效性、未使用状态及唯一性。验证通过后，务器为用户账号永久绑定 APP 使用权限，并向 APP 反馈授权成功信息，用户即可无限制使用 APP 全部功能。</p>
        <p className="text-gray-300">用户可以通过手机摄像头观察到宇宙中的星球、星系和星系团。</p>

        </Card>

        <div className="h-8"></div>
        
        <Card 
        className="p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
        <i className={`fas fa-info-circle text-3xl text-white`}> <span className="text-3xl font-bold text-white">注意事项</span></i>
        <p className="text-gray-300">在体验AR交互时，请确保产品放置在稳固的位置，以防滑落。
          为获得最佳体验效果，请在光线良好的环境下使用观看。
          如果产品与APP之间识别丢失，请重新匹配。
          如有更多问题请联系我们。</p>
        </Card>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
