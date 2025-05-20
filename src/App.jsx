import './App.css'
import OfficialHome from './OfficialHome.jsx'
import { Routes, Route } from 'react-router-dom'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OfficialHome />} />
        <Route path="/user-policy" element={<UserPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}

export default App
