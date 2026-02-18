import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Servicos from './pages/Servicos'
import Cases from './pages/Cases'
import Contato from './pages/Contato'
import QuemSomos from './pages/QuemSomos'
import TrabalheConosco from './pages/TrabalheConosco'
import TermosDeUso from './pages/TermosDeUso'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import CanalLgpd from './pages/CanalLgpd'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
      <Route path="/termos" element={<TermosDeUso />} />
      <Route path="/privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/lgpd" element={<CanalLgpd />} />
    </Routes>
  )
}

export default App
