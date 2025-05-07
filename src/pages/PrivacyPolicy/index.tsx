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
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Sanwu Planet Privacy Policy</h1>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Introduction</h2>
          <p>Welcome to Sanwu Planet! We value your privacy and data protection. This Privacy Policy is intended to transparently explain how we handle information related to your use of the Sanwu Planet app in compliance with Chinese laws and regulations.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Information Collection</h2>
          <p>To provide our services, the app requires:</p>
          <ul>
            <li>Internet access for account verification and essential functions</li>
            <li>Camera permission for AR features (using EasyAR SDK)</li>
            <li>Verification code for user authentication</li>
            <li>Real-name information as required by Chinese regulations</li>
          </ul>
          <p>We do not intentionally collect personal information beyond what is necessary for these functions.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Third-party SDK</h2>
          <p>The app integrates EasyAR SDK to provide augmented reality features. While we do not collect personal information through our own services, we cannot guarantee the data collection practices of third-party SDKs. Please refer to EasyAR's privacy policy for details.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Data Usage and Storage</h2>
          <p>All collected information is used solely for:</p>
          <ul>
            <li>User authentication and account security</li>
            <li>Providing core app functionality</li>
            <li>Compliance with Chinese laws and regulations</li>
          </ul>
          <p>Data is stored securely on servers located in Mainland China.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect user information, including encryption and access controls. However, no internet transmission or storage system can be guaranteed to be 100% secure.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Children's Privacy</h2>
          <p>In compliance with China's Minor Protection Law, users under 14 must obtain parental consent before using our services. We do not knowingly collect personal information from children without proper authorization.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Changes to This Policy</h2>
          <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. Continued use of the app after such changes constitutes acceptance of the revised policy.</p>
        </section>
        <section style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or wish to exercise your rights under Chinese law, please contact ShenZhen SanWuYiFa Technology Co., Ltd. at hello@swyf.com</p>
        </section>
      </div>

      <div className="content" style={{ display: language === 'chinese' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>三五星球隐私政策</h1>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>引言</h2>
        <p style={{ marginBottom: '20px' }}>欢迎使用三五星球！我们重视用户的隐私和数据保护。本隐私政策旨在根据中国法律法规，透明地说明我们如何处理与您使用三五星球应用相关的信息。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>信息收集</h2>
        <p>为提供服务，本应用需要：</p>
        <ul>
          <li>网络连接用于账号验证和基本功能</li>
          <li>摄像头权限用于AR功能（使用EasyAR SDK）</li>
          <li>验证码用于用户认证</li>
          <li>根据中国法规要求的实名信息</li>
        </ul>
        <p style={{ marginBottom: '20px' }}>除上述必要功能外，我们不会主动收集其他个人信息。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>第三方SDK</h2>
        <p style={{ marginBottom: '20px' }}>本应用集成了EasyAR SDK以提供增强现实功能。虽然我们自身服务不收集个人信息，但无法保证第三方SDK的数据收集行为。请参考EasyAR的隐私政策了解详情。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>数据使用与存储</h2>
        <p>所有收集的信息仅用于：</p>
        <ul>
          <li>用户认证和账号安全</li>
          <li>提供核心应用功能</li>
          <li>遵守中国法律法规</li>
        </ul>
        <p style={{ marginBottom: '20px' }}>数据安全存储在中国大陆境内的服务器上。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>数据安全</h2>
        <p style={{ marginBottom: '20px' }}>我们采取适当的技术和管理措施保护用户信息，包括加密和访问控制。但请注意，任何互联网传输或存储系统都无法保证100%安全。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>未成年人保护</h2>
        <p style={{ marginBottom: '20px' }}>根据《未成年人保护法》，14岁以下用户使用我们的服务需获得监护人同意。未经适当授权，我们不会故意收集未成年人的个人信息。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>政策变更</h2>
        <p style={{ marginBottom: '20px' }}>我们可能根据业务实践或法律要求更新本隐私政策。变更后继续使用本应用即表示接受修订后的政策。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>联系我们</h2>
        <p style={{ marginBottom: '20px' }}>如对本隐私政策有任何疑问，或希望行使中国法律赋予的权利，请联系深圳市三五幺发科技有限公司：hello@swyf.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;