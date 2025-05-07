import './App.css'
import OfficalHome from './OfficalHome.jsx'
import { Routes, Route } from 'react-router-dom'
import UserAgreement from './pages/UserAgreement'
import Privacy from "./pages/Privacy"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OfficalHome />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route path="/privacy-agreement" element={<Privacy />} />
      </Routes>
    </div>
  )
}

export default App
