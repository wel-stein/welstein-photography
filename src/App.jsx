import { Routes, Route } from 'react-router-dom'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import WeddingStoryPage from './pages/WeddingStoryPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/gallery/:id" element={<WeddingStoryPage />} />
    </Routes>
  )
}
