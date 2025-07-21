import './App.css'
import OfficialHome from './OfficialHome.jsx'
import { Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'
import UserPolicy from './pages/UserPolicy'
import Introduction from './pages/Introduction'
import Contact from './pages/Contact'
import Company from './pages/Company'
import WxDownload from './pages/WxDownload'
function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OfficialHome />} />
        <Route path="/user-policy" element={<UserPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/company" element={<Company />} />
        <Route path="/wx-download" element={<WxDownload />} />
      </Routes>
    </div>
  )
}

export default App
