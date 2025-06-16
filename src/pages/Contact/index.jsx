// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import backgroundImage from "../../assets/planet-581239_1920.jpg";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Card } from "../../../components/ui/card";

export default function Contact() {

  
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
        <i className={`fas fa-envelope text-3xl text-white`}> <span className="text-3xl font-bold text-white">联系我们</span></i>
        <p className="text-gray-300">邮箱：3518@sanwuyaoba.com</p>
        <p className="text-gray-300">电话：19129384264</p>
        <p className="text-gray-300">地址：广东省东莞市长安镇龙光江南大境一期7栋404室</p>
        <p className="text-gray-300">我们会在验证您的用户身份后的15个工作日内回复您的请求</p>
      </Card>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
