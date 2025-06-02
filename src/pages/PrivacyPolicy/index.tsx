import React, { useEffect, useState } from 'react';
import './styles.css';

interface ContentProps {
  display: string;
}

const PrivacyPolicy: React.FC = () => {
  const [language, setLanguage] = useState<'english' | 'chinese'>('chinese');

  useEffect(() => {
    // const userLang = navigator.language;
    // if (userLang.startsWith('zh-CN')) {
    //   setLanguage('chinese');
    // } else {
    //   setLanguage('english');
    // }
    setLanguage('chinese');
  }, []);

  const showContent = (lang: 'english' | 'chinese') => {
    setLanguage(lang);
  };

  return (
    <div className="container">
      <div className="language-toggle">
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
      </div>

      <div className="content" style={{ display: language === 'english' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '20px' }}>Last Updated: 20/05/2025</p>
        <p style={{ marginBottom: '20px' }}>Shenzhen Sanwu Yaofa Technology Co., Ltd. is the operator of the AstroPearl platform (hereinafter referred to as "AstroPearl" or "we"). This Privacy Policy explains how AstroPearl will handle your personal information and privacy information, and declares our commitment to privacy protection. AstroPearl may update or modify this policy from time to time based on information processing scenarios. Please read, understand and agree to this policy and any supplementary policies before submitting your personal information or privacy information to AstroPearl.</p>
        
        <p style={{ marginBottom: '20px' }}>This privacy policy will help you understand:</p>
        <ul style={{ marginBottom: '20px' }}>
          <li>We will follow the privacy policy to collect and use your information, but we will not collect personal information in a bundled manner just because you agree to this privacy policy.</li>
          <li>When you use or enable related functions or use services, we will collect and use relevant information as necessary to realize the functions and services. Unless it is necessary information required for basic business functions or according to laws and regulations, you can refuse to provide it without affecting other functions or services. We will explain which information is necessary in the privacy policy.</li>
          <li>If you are not logged in, we will use the device identifier information to ensure the basic function of information push. If you are logged in, we will implement information push based on your account information.</li>
          <li>Precise location, camera, and album permissions will not be enabled by default. They will only be used when you explicitly authorize them for specific functions or services, and you can also withdraw your authorization. It is particularly important to note that even after your authorization, we will not collect your information when these sensitive permissions are not needed for related functions or services.</li>
          <li>This privacy policy applies to your access and use of our products and services through the AstroPearl application and official website.</li>
        </ul>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>1. How We Collect and Use Personal Information</h2>
        <p>We collect information that you actively provide when using our services, as well as information generated through automated means during your use of features or services:</p>
        
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.1 Registration, Login, and Authentication</h3>
        <p>When you register or log in to AstroPearl and related services, you can create an account using your phone number. We collect this information to help you better use the core business functions of the AstroPearl APP.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.2 Playback and Browsing</h3>
        <p>Storage permission: When you use features such as sharing and saving images to albums, we will request this permission. If you disable storage authorization, you may not be able to use these features, but this will not affect your continued use of other services we provide.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.3 Camera and Album Permissions</h3>
        <p>Camera permission: The AR exploration feature in the Parallel Universe module requires the use of the camera to scan objects. If you disable camera authorization, you may not be able to use this feature, but this will not affect your continued use of other services we provide.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.4 Message Notifications</h3>
        <p>You acknowledge and agree that for the contact information you provide during the use of our products and/or services (e.g., phone number), we may send various types of notifications to one or more of these channels for user message notification, identity verification, security verification, and user experience research purposes.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.5 Search</h3>
        <p>When you use the search function, we will collect your search keyword information and device information to provide you with better search results and services.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.6 Operations and Security</h3>
        <p>We are committed to providing you with a safe and trustworthy product and usage environment. Providing quality and reliable services and information is our core goal.</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.6.1 Device Information and Log Information</h4>
        <p>To ensure the secure operation of software and services, as well as the quality and efficiency of operations, we collect your hardware model, operating system version, IMEI, unique device identifier, network device hardware address, IP address, WLAN access point, Bluetooth, base station, software version number, network access method, type, status, network quality data, operation, usage, and service logs.</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.6.2 Application Information</h4>
        <p>To prevent malicious programs and ensure operational quality and efficiency, we collect information about installed applications or running processes, overall application operation, usage frequency, application crashes, overall installation usage, performance data, and application sources.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.7 APP Self-start or Associated Start</h3>
        <p>To ensure that this application can normally receive broadcast information pushed by the client when it is closed or running in the background, this application must use (self-start) capability, which will exist at a certain frequency through the system to send broadcasts to wake up this application for self-start or associated start behavior, which is necessary for implementing functions and services.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.8 Changes in Collection and Use of Personal Information</h3>
        <p>Please understand that as our business develops, we may adjust and change the functions and services provided by AstroPearl. In principle, when new functions or services are related to our current functions or services, the collection and use of personal information will have a direct or reasonable connection with the original processing purpose. In scenarios where there is no direct or reasonable connection with the original processing purpose, we will inform you again and obtain your consent before collecting and using your personal information.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.9 Legally Exempted Collection and Use of Personal Information</h3>
        <p>Please understand that in the following circumstances, according to laws and regulations and relevant national standards, we may collect and use your personal information without your authorization and consent:</p>
        <ul>
          <li>Directly related to national security and national defense security;</li>
          <li>Directly related to public security, public health, and major public interests;</li>
          <li>Directly related to criminal investigation, prosecution, trial, and execution of judgments;</li>
          <li>For the protection of the life, property, and other major legitimate rights and interests of the personal information subject or other individuals, but it is difficult to obtain the consent of the individual;</li>
          <li>The personal information collected is voluntarily disclosed by you to the public;</li>
          <li>Collected from legally publicly disclosed information, such as legal news reports and government information disclosure channels;</li>
          <li>Necessary for signing or performing contracts at your request;</li>
          <li>Necessary for maintaining the safe and stable operation of software and related services, such as discovering and handling faults in software and related services;</li>
          <li>Necessary for legal news reporting;</li>
          <li>Academic research institutions based on public interest to carry out statistics or academic research, and when providing academic research or descriptive results to the outside world, the personal information contained in the results is de-identified;</li>
          <li>Other circumstances stipulated by laws and regulations.</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.10 Third-Party SDK Usage</h3>
        <p>Our application integrates third-party SDKs to provide specific functionalities. These SDKs may collect and process certain information. Below is a detailed list of the SDKs we use and their data collection practices:</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.10.1 AR SDK</h4>
        <p>We use EasyAR SDK and Unity SDK to provide augmented reality features. These SDKs may collect:</p>
        <ul>
          <li>Camera access for AR functionality</li>
          <li>Device motion and orientation data</li>
          <li>Basic device information for compatibility purposes</li>
          <li>Unity SDK may collect device information for performance optimization</li>
          <li>EasyAR SDK may collect usage statistics for service improvement</li>
        </ul>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.10.2 Analytics SDK</h4>
        <p>We use analytics SDKs to improve our services. These SDKs may collect:</p>
        <ul>
          <li>Usage statistics and crash reports</li>
          <li>Device information (model, OS version)</li>
          <li>Performance metrics</li>
        </ul>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.10.3 Storage SDK</h4>
        <p>We use storage SDKs for data management. These SDKs may collect:</p>
        <ul>
          <li>Storage access permissions</li>
          <li>File operation logs</li>
        </ul>

        <p>Please note that these SDKs are essential for providing our core services. We carefully select our SDK providers and ensure they comply with relevant privacy laws and regulations. You can control the permissions granted to these SDKs through your device settings.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>2. How We Use Cookies and Similar Technologies</h2>
        <p>Cookies and device information identifiers are commonly used technologies on the internet. When you use AstroPearl and related services, we may use related technologies to send one or more cookies or anonymous identifiers to your device to collect and identify information about your access and use of our products. We promise not to use cookies for any purpose other than those described in this privacy policy.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>2.1 Ensuring Product and Service Security and Efficient Operation</h3>
        <p>We may set cookies or anonymous identifiers for authentication and security purposes to confirm whether you are securely logged into the service or whether you are encountering theft, fraud, or other illegal activities. These technologies will also help us improve service efficiency and enhance login and response speeds.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>2.2 Helping You Get a More Convenient Access Experience</h3>
        <p>Using these technologies can help you avoid repeating steps and processes such as filling in personal information and entering search content (examples: recording searches, form filling).</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>2.3 Cookie Clearing</h3>
        <p>Most browsers provide users with the function to clear browser cache data. You can perform corresponding data clearing operations in the browser settings. If you clear the data, you may not be able to use the services or corresponding functions provided by us that rely on cookies.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>3. How We Share, Transfer, and Disclose Personal Information</h2>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.1 Sharing</h3>
        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>3.1.1 Sharing Principles</h4>
        <p>a. Authorization and Consent Principle:</p>
        <p>Without your consent, we will not share your personal information unless the shared personal information has been de-identified and the third party cannot re-identify the natural person subject of such information. If a third party's use of the information exceeds the original authorization and consent scope, they need to obtain your consent again.</p>

        <p>b. Legitimate and Minimum Necessary Principle:</p>
        <p>The shared data must have a legitimate purpose, and the shared data must be limited to what is necessary to achieve the purpose.</p>

        <p>c. Security and Prudent Principle:</p>
        <p>We will carefully evaluate the purpose of third parties' use of shared information, comprehensively assess their security capabilities, and require them to follow cooperation legal agreements. We will strictly monitor the software development kits (SDKs) and application programming interfaces (APIs) used by partners to obtain information to protect data security.</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>3.1.2 Sharing Information for Security and Analysis Statistics</h4>
        <p>a. Ensuring Usage Security: We attach great importance to account, service, and content security. To protect your and other users' accounts and property safety, and to protect your and our legitimate rights and interests from illegal infringement, we and our affiliates or service providers may share necessary device, account, and log information.</p>

        <p>b. Analyzing Product Usage: To analyze the usage of our services and improve the user experience, we may share statistical data about product usage (crashes, flashbacks) with affiliates or third parties. This data is difficult to combine with other information to identify your personal identity.</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>3.1.3 Helping You Participate in Marketing Activities</h4>
        <p>When you choose to participate in marketing activities held by us and our affiliates or third parties, you may need to provide your name, mailing address, contact information, bank account, and other information. Some of this information is sensitive personal information. Refusing to provide it may affect your participation in related activities, but it will not affect other functions. Only with your consent will we share this information with affiliates or third parties to ensure you receive consistent service in joint activities or to entrust third parties to promptly deliver rewards to you.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.2 Transfer</h3>
        <p>a. We will not transfer your personal information to any other third party without your explicit consent.</p>
        <p>b. As our business continues to develop, we may engage in mergers, acquisitions, and asset transfers, and your personal information may be transferred as a result. In the event of such changes, we will require the successor to protect your personal information in accordance with laws and regulations and security standards no lower than those set forth in this privacy policy, otherwise we will require the successor to obtain your authorization and consent again.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.3 Public Display</h3>
        <p>a. We will not publicly disclose your information unless required by national laws and regulations or with your consent. We will use security protection measures that meet industry standards when publicly disclosing your personal information.</p>
        <p>b. When announcing penalties for违规帐号、欺诈行为进行处罚公告时，我们会披露相关帐号的信息。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.4 Legally Exempted Sharing, Transfer, and Public Disclosure of Personal Information</h3>
        <p>Please understand that in the following circumstances, according to laws and regulations and national standards, we may share, transfer, or publicly disclose your personal information without your authorization and consent:</p>
        <ul>
          <li>Directly related to national security and national defense security;</li>
          <li>Directly related to public security, public health, and major public interests;</li>
          <li>Directly related to criminal investigation, prosecution, trial, and execution of judgments;</li>
          <li>For the protection of your or other individuals' life, property, and other major legitimate rights and interests, but it is difficult to obtain the consent of the individual;</li>
          <li>Personal information that you voluntarily disclose to the public;</li>
          <li>Personal information collected from legally publicly disclosed information, such as legal news reports and government information disclosure channels.</li>
        </ul>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>4. How We Store Personal Information</h2>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>4.1 Storage Location</h3>
        <p>We store your personal information collected and generated during our operations in mainland China in accordance with laws and regulations. Currently, we will not transmit the above information overseas. If we need to transmit information overseas, we will follow relevant national regulations or seek your consent.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>4.2 Storage Period</h3>
        <p>We only retain your personal information for the period necessary to provide AstroPearl and its services: Your relevant information will be retained during the period when your account is not cancelled. After the necessary period, we will delete or anonymize your personal information, unless otherwise required by laws and regulations.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5. How We Protect Personal Information Security</h2>
        <p>a. We attach great importance to the security of your personal information and will make reasonable security measures (including technical and management aspects) to protect your personal information from improper use or unauthorized access, public disclosure, use, modification, damage, loss, or leakage.</p>
        <p>b. We use encryption technology, anonymization processing, and related reasonable and feasible means to protect your personal information, and use security protection mechanisms to prevent your personal information from being maliciously attacked.</p>
        <p>c. We establish a dedicated security department and data security process to protect your personal information security. We ensure that only authorized personnel can access your personal information, and we conduct security audits on data and technology from time to time.</p>
        <p>d. Although we have taken the above reasonable and effective measures and have complied with the standards required by relevant laws and regulations, please understand that due to technical limitations and possible various malicious means, in the internet industry, even if we do our best to strengthen security measures, we cannot always guarantee 100% security of information. We will do our best to ensure the security of the personal information you provide to us.</p>
        <p>e. You understand that the systems and communication networks you use to access our services may have problems due to factors beyond our control.</p>
        <p>f. We will develop emergency response plans and immediately activate them when user information security incidents occur, striving to prevent the impact and consequences of these security incidents from expanding. Once a user information security incident (leakage, loss) occurs, we will inform you in accordance with the requirements of laws and regulations: the basic situation of the security incident and possible impacts, measures we have taken or will take, suggestions for you to prevent and reduce risks, and remedial measures for you. We will promptly inform you of the relevant situation of the incident through push notifications, emails, letters, text messages, and related forms. When it is difficult to inform each person individually, we will take reasonable and effective ways to publish announcements. At the same time, we will report the handling of user information security incidents to relevant regulatory departments as required.</p>
        <p>g. Once you leave AstroPearl and related services to browse or use other websites, services, and content resources, we will not have the ability or direct obligation to protect any personal information you submit in software and websites outside of AstroPearl and related services, regardless of whether your login, browsing, or use of the above software and websites is based on links or guidance from AstroPearl.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>6. Managing Your Personal Information</h2>
        <p>We highly value your management of personal information and will do our best to protect your rights to query, access, modify, delete, withdraw consent authorization, cancel accounts, complain and report, and set privacy functions, so that you can protect your privacy and information security.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.1 Changing or Withdrawing Authorization Scope</h3>
        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.1.1 Changing or Withdrawing Sensitive Permission Settings</h4>
        <p>You can close precise location information, camera, and album permissions in your device's operating system to change the scope of consent or withdraw your authorization. After withdrawing authorization, we will no longer collect information related to these permissions.</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.1.2 Changing or Withdrawing Authorized Information Processing</h4>
        <p>Specific business functions and services will require your information to be completed. When you withdraw consent or authorization, we will not be able to continue to provide you with the functions and services corresponding to the withdrawn consent or authorization, and we will no longer process your corresponding personal information. However, your decision to withdraw consent or authorization will not affect our previous personal information processing based on your authorization.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.2 Accessing, Deleting, and Correcting Your Personal Information</h3>
        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.2.1 Accessing Personal Account Information</h4>
        <p>You can query and access your username. To protect your privacy, the edit profile function is not yet open, and real-name authentication is not required. The AstroPearl APP platform is only for a more convenient AR experience.</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.2.2 Querying, Accessing, Correcting, and Deleting Information</h4>
        <p>For security and identity recognition considerations, you may not be able to independently modify certain initial registration information submitted during registration (such as information after real-name authentication). If you do need to modify such information, please contact us, and we will review the issues involved as soon as possible and reply promptly after verifying your user identity.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.3 Cancelling Account</h3>
        <p>You can cancel your account in [Me] - [Settings] - [Account and Security]. Before you cancel your account, we will verify your personal identity, security status, device information, etc. You understand that account cancellation is an irreversible action. After you cancel your account, we will delete your relevant information or anonymize it, unless otherwise required by laws and regulations.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.4 Complaints and Reports</h3>
        <p>You can make complaints or reports according to our published contact methods. If you believe that your personal information rights may be infringed, or if you discover clues about infringement of personal information rights, you can contact us in [My] - [Settings] - [Feedback and Help] to enter the user feedback interface. We will review and respond to your complaints and reports within 30 days.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.5 Accessing Privacy Policy</h3>
        <p>a. You can view the full content of this privacy policy on the registration page, or in [My] - [Settings] - [Privacy Policy] after logging into your personal account.</p>
        <p>b. Please understand that the AstroPearl and related services described in this privacy policy may vary depending on your phone model, system version, software application version, mobile client, and other factors. The final products and services are subject to the AstroPearl software and related services you use.</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.6 Informing You of Service Termination</h3>
        <p>If we stop operations, we will promptly stop collecting your personal information, notify you of the service termination through individual delivery or announcement, and delete or anonymize your personal information that we hold.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>7. Minor Protection</h2>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>7.1 General Terms for Minors</h3>
        <p>a. If you are a minor under the age of 18, you should read and agree to this privacy policy under the guidance of your parents or other guardians before using AstroPearl and related services.</p>
        <p>b. We protect minors' personal information in accordance with relevant national laws and regulations. We will only collect, use, share, or disclose minors' personal information when permitted by law, with clear consent from parents or other guardians, or when necessary to protect minors. If we find that we have collected minors' personal information without prior verifiable consent from parents or other guardians, we will try to delete the relevant information as soon as possible. At the same time, we have established strict rules for collecting and using minors' information to protect the security of children's and adolescents' personal information.</p>
        <p>c. If you are a minor's guardian and have any questions about the minor's personal information under your guardianship, please contact us through the contact methods published in this privacy policy.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>8. Privacy Policy Revision and Notification</h2>
        <p>a. To provide you with better services, AstroPearl and related services will be updated and changed from time to time. We will revise this privacy policy accordingly. These revisions constitute part of this privacy policy and have the same effect as this privacy policy. Without your explicit consent, we will not reduce your rights under the currently effective privacy policy.</p>
        <p>b. After this privacy policy is updated, we will issue an updated version in AstroPearl and remind you of the updated content through the official website (http://sanwuyaoba.com) or other appropriate methods before the updated terms take effect, so that you can understand the latest version of this privacy policy in a timely manner.</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>9. Contact Us</h2>
        <p>If you have any complaints, suggestions, or questions about personal information protection, you can send your questions to (3518@sanwuyaoba.com) or mail to the following address:</p>
        <p>Room 404, Building 7, Phase 1, Longguang Jiangnan Dajing, Chang'an Town, Dongguan City, Guangdong Province</p>
        <p>We will review the issues involved as soon as possible and reply within fifteen working days after verifying your user identity.</p>
      </div>

      <div className="content" style={{ display: language === 'chinese' ? 'block' : 'none' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>隐私政策</h1>
        <p style={{ marginBottom: '20px' }}>更新日期：2025年05月20日</p>
        <p style={{ marginBottom: '20px' }}>深圳市叁伍幺发科技有限公司是知微宇宙平台（以下简称「知微宇宙」或「我们」）的运营者，本《隐私政策》阐述了知微宇宙将如何处理您的个人信息和隐私信息，并申明了知微宇宙对保护隐私的承诺，知微宇宙未来有可能根据信息处理情境不时更新或修改本政策。请您在向知微宇宙提交个人信息或隐私信息之前，阅读、了解并同意本政策和任何补充政策。</p>

        <p style={{ marginBottom: '20px' }}>本隐私政策将帮助您了解：</p>
        <ul style={{ marginBottom: '20px' }}>
          <li>我们会遵循隐私政策收集、使用您的信息，但不会仅因您同意本隐私政策而采用强制捆绑的方式一揽子收集个人信息。</li>
          <li>当您使用或开启相关功能或使用服务时，为实现功能、服务所必需，我们会收集、使用相关信息。除非是为实现基本业务功能或根据法律法规要求所必需的必要信息，您均可以拒绝提供且不影响其他功能或服务。我们将在隐私政策中逐项说明哪些是必要信息。</li>
          <li>如果您未登录帐号，我们会通过设备对应的标识符信息来保障信息推送的基本功能。如果您登录了帐号，我们会根据帐号信息实现信息推送。</li>
          <li>精确地理位置、摄像头、相册权限，均不会默认开启，只有经过您的明示授权才会在为实现特定功能或服务时使用，您也可以撤回授权。特别需要指出的是，即使经过您的授权，我们获得了这些敏感权限，也不会在相关功能或服务不需要时而收集您的信息。</li>
          <li>本隐私政策适用于您通过知微宇宙应用程序、知微宇宙官方网站来访问和使用我们的产品和服务。</li>
        </ul>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>1.我们如何收集和使用个人信息</h2>
        <p>我们会按照如下方式收集您在使用服务时主动提供的，以及通过自动化手段收集您在使用功能或接受服务过程中产生的信息：</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.1 注册、登录、认证</h3>
        <p>当您注册、登录知微宇宙及相关服务时，您可以通过手机号创建帐号，收集这些信息是为了帮助您更好的使用知微宇宙APP的核心业务功能。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.2 播放浏览</h3>
        <p>存储权限：当您使用分享、保存图片到相册等功能时，我们会向您申请获取此权限，如您关闭存储授权，您将可能无法使用对应功能，但不影响您继续使用我们提供的其他服务。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.3 相机和相册权限</h3>
        <p>相机权限：平行宇宙模块AR探索功能需要使用相机扫描物体，如您关闭相机授权，您将可能无法使用对应功能，但不影响您继续使用我们提供的其他服务。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.4 消息通知</h3>
        <p>您知悉并同意，对于您在使用产品及/或服务的过程中提供的您的联系方式（例如：手机号），我们在运营中可能会向其中的一种或多种发送多类通知，用于用户消息告知、身份验证、安全验证、用户使用体验调研等用途。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.5 搜索</h3>
        <p>当您使用搜索功能时，我们会收集您的搜索关键词信息和设备信息，以便为您提供更好的搜索结果和服务。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.6 运营与安全运行</h3>
        <p>我们致力于为您提供安全、可信的产品与使用环境，提供优质而可靠的服务与信息是我们的核心目标。</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.6.1 设备信息与日志信息</h4>
        <p>为了保障软件与服务的安全运行、运营的质量及效率，我们会收集您的硬件型号、操作系统版本号、国际移动设备识别码、唯一设备标识符、网络设备硬件地址、IP 地址、WLAN接入点、蓝牙、基站、软件版本号、网络接入方式、类型、状态、网络质量数据、操作、使用、服务日志。</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.6.2 应用信息</h4>
        <p>为了预防恶意程序、保障运营质量及效率，我们会收集安装的应用信息或正在运行的进程信息、应用程序的总体运行、使用情况与频率、应用崩溃情况、总体安装使用情况、性能数据、应用来源。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.7 APP自启动或关联启动</h3>
        <p>为确保本应用处于关闭或后台运行状态下可正常接收到客户端推送的广播信息，本应用须使用（自启动）能力，将存在一定频率通过系统发送广播唤醒本应用自启动或关联启动行为，是因实现功能及服务所必要的。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.8 收集、使用个人信息目的变更</h3>
        <p>请您了解，随着我们业务的发展，可能会对知微宇宙的功能和提供的服务有所调整变化。原则上，当新功能或服务与我们当前提供的功能或服务相关时，收集与使用的个人信息将与原处理目的具有直接或合理关联。在与原处理目的无直接或合理关联的场景下，我们收集、使用您的个人信息，会再次进行告知，并征得您的同意。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.9 依法豁免征得同意收集和使用的个人信息</h3>
        <p>请您理解，在下列情形中，根据法律法规及相关国家标准，我们收集和使用您的个人信息无需征得您的授权同意：</p>
        <ul>
          <li>与国家安全、国防安全直接相关的；</li>
          <li>与公共安全、公共卫生、重大公共利益直接相关的；</li>
          <li>与犯罪侦查、起诉、审判和判决执行等直接相关的；</li>
          <li>出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</li>
          <li>所收集的您的个人信息是您自行向社会公众公开的；</li>
          <li>从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；</li>
          <li>根据您的要求签订或履行合同所必需的；</li>
          <li>用于维护软件及相关服务的安全稳定运行所必需的，例如发现、处置软件及相关服务的故障；</li>
          <li>为合法的新闻报道所必需的；</li>
          <li>学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</li>
          <li>法律法规规定的其他情形。</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>1.10 第三方SDK使用说明</h3>
        <p>我们的应用集成了第三方SDK以提供特定功能。这些SDK可能会收集和处理某些信息。以下是我们使用的SDK及其数据收集实践的详细说明：</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.10.1 AR SDK</h4>
        <p>我们使用 EasyAR SDK 和 Unity SDK 来提供增强现实功能。这些SDK可能会收集：</p>
        <ul>
          <li>用于AR功能的相机访问权限</li>
          <li>设备运动和方向数据</li>
          <li>用于兼容性目的的基本设备信息</li>
          <li>Unity SDK 可能会收集设备信息用于性能优化</li>
          <li>EasyAR SDK 可能会收集使用统计数据用于服务改进</li>
        </ul>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.10.2 Analytics SDK</h4>
        <p>我们使用分析SDK来改进我们的服务。这些SDK可能会收集：</p>
        <ul>
          <li>使用统计数据和崩溃报告</li>
          <li>设备信息（型号、操作系统版本）</li>
          <li>性能指标</li>
        </ul>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>1.10.3 Storage SDK</h4>
        <p>我们使用存储SDK进行数据管理。这些SDK可能会收集：</p>
        <ul>
          <li>存储访问权限</li>
          <li>文件操作日志</li>
        </ul>

        <p>请注意，这些SDK对于提供我们的核心服务是必不可少的。我们谨慎选择SDK提供商，并确保他们遵守相关的隐私法律法规。您可以通过设备设置控制授予这些SDK的权限。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>2. 我们如何使用Cookie和类似技术</h2>
        <p>Cookies和设备信息标识符是互联网中的通用技术。当您使用知微宇宙及相关服务时，我们可能会使用相关技术向您的设备发送一个或多个Cookie或匿名标识符，以收集和标识您访问、使用本产品的信息。我们承诺，不会将Cookie用于本隐私政策所述目的之外的任何其他用途。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>2.1 保障产品与服务的安全、高效运转</h3>
        <p>我们可能会设置认证与保障安全性的Cookie或匿名标识符，使我们确认您是否安全登录服务，或者是否遇到盗用、欺诈及其他不法行为。这些技术还会帮助我们改进服务效率，提升登录和响应速度。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>2.2 帮助您获得更轻松的访问体验</h3>
        <p>使用此类技术可以帮助您省去重复您填写个人信息、输入搜索内容的步骤和流程（例如：记录搜索、表单填写）。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>2.3 Cookie清除</h3>
        <p>大多数浏览器均为用户提供了清除浏览器缓存数据的功能，您可以在浏览器设置功能中进行相应的数据清除操作。如您清除数据，您可能无法使用由我们提供的、依赖于Cookie的服务或相应功能。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>3. 我们如何共享、转移、公开披露个人信息</h2>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.1 共享</h3>
        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>3.1.1 共享原则</h4>
        <p>a. 授权同意原则：</p>
        <p>未经您的同意，我们不会共享您的个人信息，除非共享的个人信息是去标识化处理后的信息，且共享第三方无法重新识别此类信息的自然人主体。如果第三方的使用超出原授权同意范围，他们需要重新征得您的同意。</p>

        <p>b. 合法正当与最小必要原则：</p>
        <p>共享的数据必须具有合法的目的，且共享的数据以达成目的必要为限。</p>

        <p>c. 安全审慎原则：</p>
        <p>我们将审慎评估第三方使用共享信息的目的，对这些合作方的安全保障能力进行综合评估，并要求其遵循合作法律协议。我们会对合作方获取信息的软件工具开发包（SDK）、应用程序接口（API）进行严格的安全监测，以保护数据安全。</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>3.1.2 实现安全与分析统计的共享信息</h4>
        <p>a. 保障使用安全：我们非常重视账号、服务及内容安全，为保障您和其他用户的账号与财产安全，使您和我们的正当合法权益免受不法侵害，我们和关联公司或服务提供商可能会共享必要的设备、账号及日志信息。</p>

        <p>b. 分析产品使用情况：为分析我们服务的使用情况，提升用户使用的体验，可能会与关联方或第三方共享产品使用情况（崩溃、闪退）的统计性数据，这些数据难以与其他信息结合识别您的个人身份。</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>3.1.3 帮助您参加营销推广活动</h4>
        <p>当您选择参加我们及我们的关联方或第三方举办的有关营销活动时，可能需要您提供姓名、通信地址、联系方式、银行账号。这些信息是敏感个人信息，拒绝提供可能会影响您参加相关活动，但不会影响其他功能。只有经过您的同意，我们才会将这些信息与关联方或第三方共享，以保障您在联合活动中获得体验一致的服务，或委托第三方及时向您兑现奖励。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.2 Transfer</h3>
        <p>a. 我们不会将您的个人信息转移给任何公司、组织和个人，但以下情况除外：</p>
        <p>b. 随着我们业务的持续发展，我们有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移。如发生变更，我们会要求新的持有您个人信息的公司、组织继续受本隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.3 Public Display</h3>
        <p>a. 我们不会公开披露您的信息，除非获得您的明确同意。</p>
        <p>b. 基于法律的披露：在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露您的个人信息。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>3.4 依法豁免征得同意共享、转移、公开披露的个人信息</h3>
        <p>请您理解，在下列情形中，根据法律法规及相关国家标准，我们共享、转移、公开披露您的个人信息无需征得您的授权同意：</p>
        <ul>
          <li>与国家安全、国防安全直接相关的；</li>
          <li>与公共安全、公共卫生、重大公共利益直接相关的；</li>
          <li>与犯罪侦查、起诉、审判和判决执行等直接相关的；</li>
          <li>出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</li>
          <li>您自行向社会公众公开的个人信息；</li>
          <li>从合法公开披露的信息中收集的您的个人信息，如合法的新闻报道、政府信息公开等渠道。</li>
        </ul>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>4. 我们如何存储个人信息</h2>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>4.1 存储地点</h3>
        <p>我们依照法律法规的规定，将在境内运营过程中收集和产生的您的个人信息存储于中华人民共和国境内。目前，我们不会将上述信息传输至境外，如果我们向境外传输，我们将会遵循相关国家规定或者征求您的同意。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>4.2 存储期限</h3>
        <p>我们仅在为提供知微宇宙及服务之目的所必需的期间内保留您的个人信息：您的信息将存储至您账号注销之日后的必要时间，在超出必要期限后，我们将对您的个人信息进行删除或匿名化处理，但法律法规另有规定的除外。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>5. 我们如何保护个人信息安全</h2>
        <p>a. 我们非常重视您个人信息的安全，将努力采取合理的安全措施（包括技术方面和管理方面）来保护您的个人信息，防止您提供的个人信息被不当使用或未经授权的情况下被访问、公开披露、使用、修改、损坏、丢失或泄漏。</p>
        <p>b. 我们会使用加密技术、匿名化处理等合理可行的手段保护您的个人信息，并使用安全保护机制防止您的个人信息遭到恶意攻击。</p>
        <p>c. 我们会建立专门的安全部门、安全管理制度、数据安全流程保障您的个人信息安全。我们采取严格的数据使用和访问制度，确保只有授权人员才可访问您的个人信息，并适时对数据和技术进行安全审计。</p>
        <p>d. 尽管已经采取了上述合理有效措施，并已经遵守了相关法律规定要求的标准，但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网环境下，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全，我们将尽力确保您提供给我们的个人信息的安全性。</p>
        <p>e. 您知悉并理解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。</p>
        <p>f. 我们会制定应急处理预案，并在发生用户信息安全事件时立即启动应急预案，努力阻止这些安全事件的影响和后果扩大。一旦发生用户信息安全事件（泄露、丢失）后，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施。我们将及时将事件相关情况以推送通知、邮件、信函、短信及相关形式告知您，难以逐一告知时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，上报用户信息安全事件的处置情况。</p>
        <p>g. 您一旦离开知微宇宙及相关服务，浏览或使用其他网站、服务及内容资源，我们将没有能力和直接义务保护您在知微宇宙及相关服务之外的软件、网站提交的任何个人信息，无论您登录、浏览或使用上述软件、网站是否基于知微宇宙的链接或引导。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>6. 管理您的个人信息</h2>
        <p>我们非常重视您对个人信息的关注，并尽全力保护您对于您个人信息访问、更正、删除以及撤回同意的权利，以使您拥有充分的能力保障您的隐私和安全。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.1 改变或撤回授权范围</h3>
        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.1.1 改变或撤回敏感权限设置</h4>
        <p>您可以在设备本身操作系统中关闭精确地理位置信息、摄像头、相册权限，改变同意范围或撤回您的授权。撤回授权后我们将不再收集与这些权限相关信息。</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.1.2 改变或撤回授权的信息处理</h4>
        <p>特定的业务功能和服务将需要您的信息才能得以完成，当您撤回同意或授权后，我们无法继续为您提供撤回同意或授权所对应的功能和服务，也不再处理您相应的个人信息。但您撤回同意或授权的决定，不会影响我们此前基于您的同意而开展的个人信息处理。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.2 访问、删除和更正您的个人信息</h3>
        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.2.1 访问个人账户信息</h4>
        <p>您可以查询和访问您的用户名。为了保护您的隐私，编辑个人资料功能尚未开放，且不需要实名认证。知微宇宙APP平台仅用于提供更便捷的AR体验。</p>

        <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>6.2.2 查询、访问、更正和删除信息</h4>
        <p>出于安全和身份识别的考虑，您可能无法独立修改注册时提交的某些初始注册信息（如实名认证后的信息）。如果您确实需要修改此类信息，请联系我们，我们将在验证您的用户身份后尽快审核相关问题并及时回复。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.3 注销账户</h3>
        <p>您可以在[我的]-[设置]-[账户与安全]中注销您的账户。在您注销账户之前，我们将验证您的个人身份、安全状态、设备信息等。您理解注销账户是不可逆的操作。在您注销账户后，我们将删除您的相关信息或进行匿名化处理，除非法律法规另有规定。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.4 投诉与举报</h3>
        <p>您可以通过我们公布的投诉渠道进行投诉或举报。如果您认为您的个人信息权利可能受到侵害，或者发现侵害个人信息权利的线索，您可以在[我的]-[设置]-[反馈与帮助]中与我们联系，进入用户反馈界面。我们将在30天内审核并回复您的投诉和举报。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.5 访问隐私政策</h3>
        <p>a. 您可以在注册页面查看本隐私政策的全部内容，或在登录个人账户后通过[我的]-[设置]-[隐私政策]查看。</p>
        <p>b. 请您理解，本隐私政策中所述的知微宇宙及相关服务可能会根据您使用的手机型号、系统版本、软件应用程序版本、移动客户端等因素而有所不同。最终的产品和服务以您使用的知微宇宙软件及相关服务为准。</p>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>6.6 服务终止通知</h3>
        <p>如果我们停止运营，我们将及时停止收集您的个人信息，通过单独通知或公告的方式告知您服务终止，并删除或匿名化处理我们持有的您的个人信息。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>7. 未成年人保护</h2>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>7.1 未成年人通用条款</h3>
        <p>a. 若您是未满18周岁的未成年人，在使用知微宇宙及相关服务前，应在您的父母或其他监护人监护、指导下共同阅读并同意本隐私政策。</p>
        <p>b. 我们根据国家相关法律法规的规定保护未成年人的个人信息，只会在法律允许、父母或其他监护人明确同意或保护未成年人所必要的情况下收集、使用、共享或披露未成年人的个人信息。如果我们发现在未事先获得可证实的父母同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关数据。同时，我们制定了严格的未成年人信息收集使用规则，以保护儿童和青少年个人信息安全。</p>
        <p>c. 若您是未成年人的监护人，当您对您所监护的未成年人的个人信息有相关疑问时，请通过本隐私政策公示的联系方式与我们联系。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>8. 隐私政策的修订和通知</h2>
        <p>a. 为了给您提供更好的服务，知微宇宙及相关服务将不时更新与变化，我们会适时对本隐私政策进行修订，这些修订构成本隐私政策的一部分并具有等同于本隐私政策的效力。本隐私政策更新后，我们会在知微宇宙发出更新版本并在更新后的条款生效前通过官方网站（http://sanwuyaoba.com）或其他适当方式提醒您相关内容的更新，以便您及时了解本隐私政策的最新版本。</p>
        <p>b. 对于重大变更，我们还会提供更为显著的通知（我们会通过包括但不限于邮件、短信、私信、在浏览页面做特别提示等方式，说明隐私政策的具体变更内容）。</p>

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>9. 联系我们</h2>
        <p>如果您对本隐私政策或您个人信息的相关事宜有任何问题、意见或建议，请通过以下方式与我们联系：</p>
        <p>邮箱：3518@sanwuyaoba.com</p>
        <p>地址：广东省东莞市长安镇长光江南大境一期7栋404室</p>
        <p>我们会在验证您的用户身份后的十五个工作日内回复您的请求。</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;