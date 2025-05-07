import './App.css'
import OfficialHome from './OfficialHome.jsx'
import { Routes, Route } from 'react-router-dom'
import UserAgreement from './pages/UserAgreement'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OfficialHome />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App
