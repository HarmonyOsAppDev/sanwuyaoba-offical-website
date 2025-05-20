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
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '20px' }}>Last Updated: 2025/05/21</p>
        <p style={{ marginBottom: '20px' }}>Shenzhen Sanwu Yifa Technology Co., Ltd. is the operator of the Zhiwei Universe platform (hereinafter referred to as "Zhiwei Universe" or "we"). This Privacy Policy explains how Zhiwei Universe will handle your personal information and privacy information, and declares our commitment to privacy protection. Zhiwei Universe may update or modify this policy from time to time based on information processing scenarios. Please read, understand and agree to this policy and any supplementary policies before submitting your personal information or privacy information to Zhiwei Universe.</p>
        
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>1. How We Collect and Use Personal Information</h2>
        <p>We collect information that you actively provide when using our services, as well as information generated through automated means during your use of features or services:</p>
        
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.1 Registration, Login, and Authentication</h3>
        <p>When you register or log in to Zhiwei Universe and related services, you can create an account using your phone number. We collect this information to help you better use the core business functions of the Zhiwei Universe APP.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.2 Playback and Browsing</h3>
        <p>Storage permission: When you use features such as sharing and saving images to albums, we will request this permission. If you disable storage authorization, you may not be able to use these features, but this will not affect your continued use of other services we provide.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.3 Camera and Album Permissions</h3>
        <p>Camera permission: The AR exploration feature in the Parallel Universe module requires the use of the camera to scan objects. If you disable camera authorization, you may not be able to use this feature, but this will not affect your continued use of other services we provide.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>2. How We Use Cookies and Similar Technologies</h2>
        <p>Cookies and device information identifiers are commonly used technologies on the internet. When you use Zhiwei Universe and related services, we may use related technologies to send one or more cookies or anonymous identifiers to your device to collect and identify information about your access and use of our products.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>3. How We Share, Transfer, and Disclose Personal Information</h2>
        <p>We will not share your personal information with any other third party without your explicit consent, unless the shared personal information has been de-identified and the third party cannot re-identify the natural person subject of such information.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>4. How We Store Personal Information</h2>
        <p>We store your personal information collected and generated during our operations in mainland China in accordance with laws and regulations. Currently, we will not transmit the above information overseas. If we need to transmit information overseas, we will follow relevant national regulations or seek your consent.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5. How We Protect Personal Information Security</h2>
        <p>We attach great importance to the security of your personal information and will make reasonable security measures (including technical and management aspects) to protect your personal information from improper use or unauthorized access, public disclosure, use, modification, damage, loss, or leakage.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>6. Managing Your Personal Information</h2>
        <p>We highly value your management of personal information and will do our best to protect your rights to query, access, modify, delete, withdraw consent authorization, cancel accounts, complain and report, and set privacy functions, so that you can protect your privacy and information security.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>7. Minor Protection</h2>
        <p>If you are a minor under the age of 18, you should read and agree to this Privacy Policy under the guidance of your parents or other guardians before using Zhiwei Universe and related services.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>8. Privacy Policy Revision and Notification</h2>
        <p>To provide you with better services, Zhiwei Universe and related services will be updated and changed from time to time. We will revise this Privacy Policy accordingly. These revisions constitute part of this Privacy Policy and have the same effect as this Privacy Policy. Without your explicit consent, we will not reduce your rights under the currently effective Privacy Policy.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>9. Contact Us</h2>
        <p>If you have any complaints, suggestions, or questions about personal information protection, you can send your questions to (3518@sanwuyaoba.com) or mail to the following address:</p>
        <p>Room 404, Building 7, Phase 1, Longguang Jiangnan Dajing, Chang'an Town, Dongguan City, Guangdong Province</p>
        <p>We will review the issues involved as soon as possible and reply within fifteen working days after verifying your user identity.</p>
      </div>

      <div className="content" style={{ display: language === 'chinese' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>隐私政策</h1>
        <p style={{ marginBottom: '20px' }}>更新日期：2025年05月21日</p>
        <p style={{ marginBottom: '20px' }}>深圳市叁伍幺发科技有限公司是知微宇宙平台（以下简称「知微宇宙」或「我们」）的运营者，本《隐私政策》阐述了知微宇宙将如何处理您的个人信息和隐私信息，并申明了知微宇宙对保护隐私的承诺，知微宇宙未来有可能根据信息处理情境不时更新或修改本政策。请您在向知微宇宙提交个人信息或隐私信息之前，阅读、了解并同意本政策和任何补充政策。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>1.我们如何收集和使用个人信息</h2>
        <p>我们会按照如下方式收集您在使用服务时主动提供的，以及通过自动化手段收集您在使用功能或接受服务过程中产生的信息：</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.1 注册、登录、认证</h3>
        <p>当您注册、登录知微宇宙及相关服务时，您可以通过手机号创建帐号，收集这些信息是为了帮助您更好的使用知微宇宙APP的核心业务功能。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.2 播放浏览</h3>
        <p>存储权限：当您使用分享、保存图片到相册等功能时，我们会向您申请获取此权限，如您关闭存储授权，您将可能无法使用对应功能，但不影响您继续使用我们提供的其他服务。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.3 相机和相册权限</h3>
        <p>相机权限：平行宇宙模块AR探索功能需要使用相机扫描物体，如您关闭相机授权，您将可能无法使用对应功能，但不影响您继续使用我们提供的其他服务。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>2.我们如何使用Cookie等同类技术</h2>
        <p>Cookie 和设备信息标识等同类技术是互联网中普遍使用的技术。当您使用知微宇宙及相关服务时，我们可能会使用相关技术向您的设备发送一个或多个Cookie 或匿名标识符，以收集、标识您访问、使用本产品时的信息。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>3.我们如何共享、转让、公开披露个人信息</h2>
        <p>未经您的同意，我们不会共享您的个人信息，除非共享的个人信息是去标识化处理后的信息，且共享第三方无法重新识别此类信息的自然人主体。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>4.我们如何存储个人信息</h2>
        <p>我们依照法律法规的规定，将在境内运营过程中收集和产生的您的个人信息存储于中华人民共和国境内。目前，我们不会将上述信息传输至境外，如果我们向境外传输，我们将会遵循相关国家规定或者征求您的同意。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5.我们如何保护个人信息的安全</h2>
        <p>我们非常重视您个人信息的安全，将努力采取合理的安全措施（包括技术方面和管理方面）来保护您的个人信息，防止您提供的个人信息被不当使用或在未经授权的情况下被访问、公开披露、使用、修改、损坏、丢失或泄漏。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>6.管理您的个人信息</h2>
        <p>我们非常重视您对个人信息的管理，并尽全力保护您对于您个人信息的查询、访问、修改、删除、撤回同意授权、注销帐号、投诉举报以及设置隐私功能的相关权利，以使您有能力保障您的隐私和信息安全。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>7.未成年人条款</h2>
        <p>若您是未满18周岁的未成年人，在使用知微宇宙及相关服务前，应在您的父母或其他监护人监护、指导下共同阅读并同意本隐私政策。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>8.隐私政策的修订和通知</h2>
        <p>为了给您提供更好的服务，知微宇宙及相关服务将不时更新与变化，我们会适时对本隐私政策进行修订，这些修订构成本隐私政策的一部分并具有等同于本隐私政策的效力，未经您明确同意，我们不会削减您依据当前生效的本隐私政策所应享受的权利。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>9.联系我们</h2>
        <p>如果您对个人信息保护问题有投诉、建议、疑问，您可以将问题发送至（3518@sanwuyaoba.com）或邮寄至下列地址：</p>
        <p>广东省东莞市东莞市长安镇龙光江南大境一期7栋404</p>
        <p>我们将尽快审核所涉问题，并在验证您的用户身份后的十五个工作日内回复。</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;