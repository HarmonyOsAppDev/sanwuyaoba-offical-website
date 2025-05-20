import React, { useEffect, useState } from 'react';
import './styles.css';

interface ContentProps {
  display: string;
}

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<'english' | 'chinese'>('chinese');

  useEffect(() => {
    const userLang = navigator.language;
    if (userLang.startsWith('zh-CN')) {
      setLanguage('chinese');
    } else {
      setLanguage('english');
    }
  }, []);

  const showContent = (lang: 'english' | 'chinese') => {
    setLanguage(lang);
  };

  return (
    <div className="container">
      <div className="language-toggle">
        <button 
          className="language-button"
          onClick={() => showContent('english')}
          style={{
            background: language === 'english' ? 'black' : 'white',
            color: language === 'english' ? 'white' : 'black'
          }}
        >
          English
        </button>
        <button 
          className="language-button"
          onClick={() => showContent('chinese')}
          style={{
            background: language === 'chinese' ? 'black' : 'white',
            color: language === 'chinese' ? 'white' : 'black'
          }}
        >
          中文
        </button>
      </div>

      <div className="content" style={{ display: language === 'english' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Zhiwei Universe User Agreement</h1>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Overview</h2>
          <p>Welcome to the "Zhiwei Universe" software and related services! The "Zhiwei Universe" software and related services refer to the client application program legally owned and operated by Shenzhen Sanwu Yifa Technology Co., Ltd. (hereinafter referred to as "the Company") and the related website (http://sanwuyaoba.com/) that provides you with products and services, including but not limited to personalized audio and video recommendations, information publishing, interactive communication, search queries and other core functions.</p>
          <p>The "Zhiwei Universe User Service Agreement" (hereinafter referred to as "this Agreement") is an agreement between you and the Company regarding your download, installation, registration, login, and use (hereinafter collectively referred to as "use") of the "Zhiwei Universe" software and the related services provided by the "Zhiwei Universe" software.</p>
          <p>In order to better serve you, please carefully read and fully understand this Agreement before starting to use the "Zhiwei Universe" software and related services, especially the terms involving exemption or limitation of liability, license and information use, agreement to open and use special individual services, applicable law and dispute resolution, etc.</p>
          <p>If you are under 18 years old, please read this Agreement carefully and fully understand it with your legal guardian, and use the "Zhiwei Universe" software and related services after obtaining the consent of your legal guardian.</p>
          <p>If you do not agree to this Agreement, this will prevent the Company from providing you with complete products and services, and you can also choose to stop using them.</p>
          <p>If you independently choose to agree or use the "Zhiwei Universe" software and related services, it will be deemed that you have fully understood this Agreement and agree to be bound by this Agreement and other agreements and rules related to the "Zhiwei Universe" software and related services (including but not limited to the "Zhiwei Universe Privacy Policy") as a party to this Agreement.</p>
          <p>The Company has the right to unilaterally decide, arrange or designate its affiliates, controlling companies, successor companies or third-party companies approved by the Company to continue operating the "Zhiwei Universe" software according to the needs of the "Zhiwei Universe" software and related services or operations.</p>
          <p>If you have any questions, comments or suggestions about the content of this Agreement, you can contact the Company through the "Feedback and Help" page in the "Zhiwei Universe" client or by sending an email to 3518@sanwuyaoba.com.</p>
        </section>
      </div>

      <div className="content" style={{ display: language === 'chinese' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>知微宇宙用户服务协议</h1>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>概述</h2>
          <p style={{ marginBottom: '20px' }}>欢迎您使用"知微宇宙"软件及相关服务！"知微宇宙"软件及相关服务，系指深圳市叁伍幺发科技有限公司（以下简称"公司"）合法拥有并运营的、标注名称为"知微宇宙"的客户端应用程序以及相关网站（http://sanwuyaoba.com/）向您提供的产品与服务，包括但不限于个性化音视频推荐、发布信息、互动交流、搜索查询等核心功能及其他功能。</p>
          <p>《"知微宇宙"用户服务协议》（以下称"本协议"）是您与公司就您下载、安装、注册、登录、使用（以下统称"使用"）"知微宇宙"软件，并获得"知微宇宙"软件提供的相关服务所订立的协议。</p>
          <p>为了更好地为您提供服务，请您在开始使用"知微宇宙"软件及相关服务之前，认真阅读并充分理解本协议，特别是涉及免除或者限制责任的条款、权利许可和信息使用的条款、同意开通和使用特殊单项服务的条款、法律适用和争议解决条款等。</p>
          <p>如您未满18周岁，请您在法定监护人陪同下仔细阅读并充分理解本协议，并征得法定监护人的同意后使用"知微宇宙"软件及相关服务。</p>
          <p>如您不同意本协议，这将导致公司无法为您提供完整的产品和服务，您也可以选择停止使用。</p>
          <p>如您自主选择同意或使用"知微宇宙"软件及相关服务，则视为您已充分理解本协议，并同意作为本协议的一方当事人接受本协议以及其他与"知微宇宙"软件及相关服务相关的协议和规则（包括但不限于《"知微宇宙"隐私政策》）的约束。</p>
          <p>公司有权依"知微宇宙"软件及相关服务或运营的需要单方决定，安排或指定其关联方、控制公司、继承公司或公司认可的第三方公司继续运营"知微宇宙"软件。</p>
          <p>如对本协议内容有任何疑问、意见或建议，您可通过登录"知微宇宙"客户端内的"反馈与帮助"页面或发送邮件至3518@sanwuyaoba.com与公司联系。</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;