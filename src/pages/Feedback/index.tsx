import { useEffect } from "react";

const Feedback: React.FC = () => {
  const redirectToURL = (url: string) => {
    window.location.href = url;
  };
  useEffect(() => {
    setTimeout(() => {
      redirectToURL('https://yuanzi-inno.feishu.cn/share/base/form/shrcniv0F6cZiLY0CZWi5RpzBvc');
    }, 1000);
  }, []);
  return <div>正在跳转 Redirecting...</div>;
};

export default Feedback;