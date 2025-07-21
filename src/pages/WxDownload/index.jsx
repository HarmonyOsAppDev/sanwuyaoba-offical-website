import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import backgroundImage from "../../assets/planet-581239_1920.jpg";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Card } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export default function WxDownload() {
  const [searchParams] = useSearchParams();
  const [deviceInfo, setDeviceInfo] = useState({
    platform: "unknown",
  });
  const [showModal, setShowModal] = useState(false);
  const [downloadAttempted, setDownloadAttempted] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // 检测设备信息
  const detectDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
      return { platform: "ios" };
    }

    if (/android/.test(userAgent)) {
      let androidBrand = "unknown";

      // 检测Android设备品牌
      if (/huawei|honor/.test(userAgent)) {
        androidBrand = "huawei";
      } else if (/xiaomi|mi/.test(userAgent)) {
        androidBrand = "xiaomi";
      } else if (/oppo/.test(userAgent)) {
        androidBrand = "oppo";
      } else if (/vivo/.test(userAgent)) {
        androidBrand = "vivo";
      } else if (/samsung/.test(userAgent)) {
        androidBrand = "samsung";
      } else if (/oneplus/.test(userAgent)) {
        androidBrand = "oneplus";
      }

      return { platform: "android", androidBrand };
    }

    return { platform: "unknown" };
  };

  // iOS App Store跳转
  const redirectToIOSAppStore = () => {
    setIsRedirecting(true);
    const iosStoreUrl = "https://apps.apple.com/cn/app/微信/id414478124";

    // 尝试直接跳转到App Store
    window.location.href = iosStoreUrl;

    // 2秒后显示确认弹窗
    setTimeout(() => {
      setIsRedirecting(false);
      setShowModal(true);
    }, 2000);
  };

  // Android应用市场跳转
  const redirectToAndroidStore = (brand) => {
    setIsRedirecting(true);
    let storeUrl = "";

    switch (brand) {
      case "huawei":
        storeUrl = "appmarket://details?id=com.tencent.mm";
        break;
      case "xiaomi":
        storeUrl = "mimarket://details?id=com.tencent.mm";
        break;
      case "oppo":
        storeUrl = "oppomarket://details?packagename=com.tencent.mm";
        break;
      case "vivo":
        storeUrl = "vivomarket://details?id=com.tencent.mm";
        break;
      case "samsung":
        storeUrl = "samsungapps://ProductDetail/com.tencent.mm";
        break;
      case "oneplus":
        storeUrl = "oneplus://details?id=com.tencent.mm";
        break;
      case "meizu":
        storeUrl = "mstore://details?package_name=com.tencent.mm";
        break;
      default:
        // 默认尝试Google Play Store
        storeUrl =
          "https://play.google.com/store/apps/details?id=com.tencent.mm";
    }

    try {
      window.location.href = storeUrl;

      // 3秒后检查是否跳转成功，如果没有则显示备用选项
      setTimeout(() => {
        setIsRedirecting(false);
        setDownloadAttempted(true);
        setShowModal(true);
      }, 3000);
    } catch (error) {
      console.log("Store redirect failed:", error);
      setIsRedirecting(false);
      setDownloadAttempted(true);
      setShowModal(true);
    }
  };

  // 手动下载选项
  const handleManualDownload = () => {
    window.open("https://weixin.qq.com/", "_blank");
  };

  useEffect(() => {
    const device = detectDevice();
    setDeviceInfo(device);

    // 检查URL参数是否包含 fr=download
    const frParam = searchParams.get("fr");
    if (frParam === "download") {
      // 延迟1秒后自动触发下载
      setTimeout(() => {
        if (device.platform === "ios") {
          redirectToIOSAppStore();
        } else if (device.platform === "android") {
          redirectToAndroidStore(device.androidBrand);
        } else {
          // 未知设备直接显示手动下载选项
          setShowModal(true);
        }
      }, 1000);
    }
  }, [searchParams]);

  const getDeviceDisplayName = () => {
    if (deviceInfo.platform === "ios") return "iOS设备";
    if (deviceInfo.platform === "android") {
      const brandNames = {
        huawei: "华为",
        xiaomi: "小米",
        oppo: "OPPO",
        vivo: "vivo",
        samsung: "三星",
        oneplus: "一加",
        meizu: "魅族",
      };
      return `Android设备 (${
        brandNames[deviceInfo.androidBrand || ""] || "未知品牌"
      })`;
    }
    return "未知设备";
  };

  const getStoreDisplayName = () => {
    if (deviceInfo.platform === "ios") return "App Store";
    if (deviceInfo.platform === "android") {
      const storeNames = {
        huawei: "华为应用市场",
        xiaomi: "小米应用商店",
        oppo: "OPPO软件商店",
        vivo: "vivo应用商店",
        samsung: "三星应用商店",
        oneplus: "一加应用商店",
      };
      return storeNames[deviceInfo.androidBrand || ""] || "Google Play Store";
    }
    return "应用商店";
  };

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
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-lg">
            {/* 微信图标和标题 */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.298c-.115.382.217.674.619.542l1.624-.535a.587.587 0 0 1 .381.025c1.281.451 2.666.701 4.242.701 4.8 0 8.691-3.288 8.691-7.342 0-4.054-3.891-7.342-8.691-7.342zm-2.705 9.613a.656.656 0 0 1-.658-.655c0-.362.295-.656.658-.656s.658.294.658.656c0 .361-.295.655-.658.655zm5.411 0a.656.656 0 0 1-.658-.655c0-.362.295-.656.658-.656s.658.294.658.656c0 .361-.295.655-.658.655z" />
                  <path d="M15.996 9.668C20.796 9.668 24 12.514 24 16.111c0 1.962-1.037 3.724-2.663 4.924a.523.523 0 0 1-.189.59l.346 1.151c.102.339-.192.597-.548.481l-1.44-.475a.52.52 0 0 0-.338-.022c-1.135.4-2.361.621-3.758.621-4.8 0-8.004-2.847-8.004-6.443 0-3.596 3.204-6.443 8.004-6.443zm-2.398 8.517a.582.582 0 0 1-.583-.581c0-.321.261-.582.583-.582s.583.261.583.582c0 .32-.261.581-.583.581zm4.796 0a.582.582 0 0 1-.583-.581c0-.321.261-.582.583-.582s.583.261.583.582c0 .32-.261.581-.583.581z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">微信下载</h1>
              <p className="text-gray-300">
                检测到您正在使用:{" "}
                <span className="text-green-400 font-semibold">
                  {getDeviceDisplayName()}
                </span>
              </p>
            </div>

            {/* 下载状态提示 */}
            {isRedirecting && (
              <div className="mb-6 p-4 bg-blue-900/50 rounded-lg border border-blue-800">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400 mr-3"></div>
                  <span className="text-blue-300">
                    正在跳转到{getStoreDisplayName()}...
                  </span>
                </div>
              </div>
            )}

            {/* 下载按钮 */}
            <div className="space-y-4 mb-8">
              {deviceInfo.platform === "ios" && (
                <Button
                  onClick={redirectToIOSAppStore}
                  disabled={isRedirecting}
                  className="w-full !rounded-button bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  前往 App Store 下载
                </Button>
              )}

              {deviceInfo.platform === "android" && (
                <Button
                  onClick={() =>
                    redirectToAndroidStore(deviceInfo.androidBrand)
                  }
                  disabled={isRedirecting}
                  className="w-full !rounded-button bg-green-600 hover:bg-green-700 text-white py-4 text-lg font-semibold"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5703.416.416 0 00-.5703.1518l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5703-.1518.416.416 0 00-.1518.5703l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                  </svg>
                  前往 {getStoreDisplayName()} 下载
                </Button>
              )}

              <Button
                onClick={handleManualDownload}
                variant="outline"
                className="w-full !rounded-button border-gray-600 text-gray-300 hover:bg-gray-800 py-4 text-lg"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                前往微信官网下载
              </Button>
            </div>

            {/* 提示信息 */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">
                如果应用商店跳转失败，请使用手机自带的应用市场搜索"微信"进行下载
              </p>
              <p className="text-sm text-gray-400">
                或直接访问{" "}
                <a
                  href="https://weixin.qq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  weixin.qq.com
                </a>{" "}
                获取最新安装包
              </p>
            </div>
          </Card>
        </div>
      </main>

      {/* 确认弹窗 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full p-6 bg-gray-900 border border-gray-700">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {downloadAttempted ? "下载遇到问题？" : "跳转成功了吗？"}
              </h3>

              <p className="text-gray-300 mb-6">
                {downloadAttempted
                  ? "如果应用商店跳转失败，您可以尝试以下方式："
                  : "如果没有自动跳转到应用商店，请点击下方按钮手动下载："}
              </p>

              <div className="space-y-3">
                <Button
                  onClick={handleManualDownload}
                  className="w-full !rounded-button bg-green-600 hover:bg-green-700 text-white"
                >
                  前往微信官网下载
                </Button>

                <Button
                  onClick={() => setShowModal(false)}
                  variant="outline"
                  className="w-full !rounded-button border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  我已经下载了
                </Button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                建议使用手机自带应用市场搜索"微信"进行下载
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
