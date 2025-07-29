import React, { useEffect, useState } from 'react';
import './styles.css';

const AppDownload: React.FC = () => {
  const [userAgent, setUserAgent] = useState('');
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  // 多语言文本配置
  const texts = {
    zh: {
      title: '知微宇宙 AstroPearl',
      description: '通过增强现实（AR）技术，为您提供行星运转、星球分布等宇宙天体的三维动态展示服务',
      chooseDevice: '选择您的设备类型',
      iosVersion: 'iOS 版本',
      iosDesc: '前往 App Store 下载',
      androidVersion: 'Android 版本',
      androidDesc: '直接下载 APK 文件',
      recommended: '推荐',
      systemRequirements: '系统要求',
      iosRequirement: '需要 iOS 13 或更高版本',
      androidRequirement: '需要 Android 10 或更高版本',
      downloading: '下载中...',
      downloadFailed: '下载失败，请重试'
    },
    en: {
      title: 'AstroPearl Universe',
      description: 'Through Augmented Reality (AR) technology, we provide 3D dynamic display services for planetary motion, star distribution and other cosmic celestial bodies',
      chooseDevice: 'Choose Your Device Type',
      iosVersion: 'iOS Version',
      iosDesc: 'Go to App Store',
      androidVersion: 'Android Version',
      androidDesc: 'Direct APK Download',
      recommended: 'Recommended',
      systemRequirements: 'System Requirements',
      iosRequirement: 'Requires iOS 13 or later',
      androidRequirement: 'Requires Android 10 or later',
      downloading: 'Downloading...',
      downloadFailed: 'Download failed, please try again'
    }
  };

  const currentTexts = texts[language];

  useEffect(() => {
    const ua = navigator.userAgent;
    setUserAgent(ua);
    setIsIOS(/iPad|iPhone|iPod/.test(ua));
    setIsAndroid(/Android/.test(ua));

    // 检测浏览器语言偏好
    const browserLang = navigator.language;
    if (browserLang.startsWith('en')) {
      setLanguage('en');
    } else {
      setLanguage('zh');
    }
  }, []);

  const handleIOSDownload = () => {
    window.open('https://apps.apple.com/ph/app/%E7%9F%A5%E5%BE%AE%E5%AE%87%E5%AE%99-astropearl/id6746753340', '_blank');
  };

  const handleAndroidDownload = () => {
    // 创建一个隐藏的下载链接
    const link = document.createElement('a');
    link.href = 'https://cos.sanwuyaoba.com/app/app-release.apk'; // 您需要将APK文件放在public目录下
    link.download = 'AstroPearl.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="app-download-container">
      <div className="download-content">
        {/* 语言切换按钮 */}
        <div className="language-toggle">
          <button 
            className={`lang-btn ${language === 'zh' ? 'active' : ''}`}
            onClick={() => setLanguage('zh')}
          >
            中文
          </button>
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>

        {/* 应用图标和信息 */}
        <div className="app-info">
          <div className="app-icon">
            <img src="/appicon.webp" alt="知微宇宙 AstroPearl" />
          </div>
          <h1 className="app-title">{currentTexts.title}</h1>
          <p className="app-description">
            {currentTexts.description}
          </p>
        </div>

        {/* 下载按钮区域 */}
        <div className="download-buttons">
          <h2>{currentTexts.chooseDevice}</h2>
          
          <div className="download-options">
            <button 
              className={`download-btn ios-btn ${isIOS ? 'recommended' : ''}`}
              onClick={handleIOSDownload}
            >
              <div className="btn-content">
                <div className="platform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2.01.76-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div>
                  <div className="platform-name">{currentTexts.iosVersion}</div>
                  <div className="platform-desc">{currentTexts.iosDesc}</div>
                </div>
                {isIOS && <span className="recommended-badge">{currentTexts.recommended}</span>}
              </div>
            </button>

            <button 
              className={`download-btn android-btn ${isAndroid ? 'recommended' : ''}`}
              onClick={handleAndroidDownload}
            >
              <div className="btn-content">
                <div className="platform-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5665 0-1.0253-.4588-1.0253-1.0253s.4588-1.0253 1.0253-1.0253 1.0253.4588 1.0253 1.0253-.4588 1.0253-1.0253 1.0253zm-11.046 0c-.5665 0-1.0253-.4588-1.0253-1.0253s.4588-1.0253 1.0253-1.0253 1.0253.4588 1.0253 1.0253-.4588 1.0253-1.0253 1.0253zm11.405-6.34l1.989-3.443c.142-.246.058-.559-.188-.7-.246-.142-.559-.058-.7.188L16.932 8.2c-1.511-.765-3.219-1.2-5.018-1.2s-3.507.435-5.018 1.2L4.845 5.043c-.142-.246-.455-.33-.7-.188-.246.142-.33.455-.188.7L5.946 8.998C2.522 11.058 0 14.307 0 18.071h24c0-3.764-2.522-7.013-5.946-9.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="platform-name">{currentTexts.androidVersion}</div>
                  <div className="platform-desc">{currentTexts.androidDesc}</div>
                </div>
                {isAndroid && <span className="recommended-badge">{currentTexts.recommended}</span>}
              </div>
            </button>
          </div>

          {/* 系统要求 */}
          <div className="system-requirements">
            <h3>{currentTexts.systemRequirements}</h3>
            <div className="requirements-grid">
              <div className="requirement-item">
                <strong>iOS:</strong> {currentTexts.iosRequirement}
              </div>
              <div className="requirement-item">
                <strong>Android:</strong> {currentTexts.androidRequirement}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;