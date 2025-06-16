// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import backgroundImage from "../../assets/planet-581239_1920.jpg";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Card } from "../../../components/ui/card";

export default function Company() {

  
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
        <span className="text-3xl font-bold text-white">公司介绍</span>
        <p className="text-gray-300">深圳市叁伍幺发科技有限公司成立于 2024 年 11 月 18 日，注册地址位于深圳市罗湖区

公司业务多元，涵盖多个领域。在零售批发方面，涉及玩具、日用品、五金产品、珠宝首饰、服装服饰、食用农产品等多种品类的销售；在制造生产领域，布局了玩具制造、金属制日用品制造、家用电器制造等业务；在技术服务层面，提供信息技术咨询、物联网技术服务、网络技术服务，以及人工智能相关的软件开发、系统集成、公共服务平台技术咨询等服务；同时，还涉足广告制作、设计、代理与发布及品牌管理等业务。公司秉持依法自主经营理念，在营业执照许可范围内积极开展各类经营活动，致力于为市场提供丰富的产品与专业的服务。</p>
        </Card>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
