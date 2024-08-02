import Container from '@mui/material/Container'
import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import NotFound from '~/components/NotFound'
import Content from './pages/Main'
import ProductDetail from '~/components/Product/ProductDetail'


function App() {
  return (
    <Container disableGutters maxWidth={false} sx={{ minHeight: '100vh' }}>
      <Header/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:asin" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </Container>
  )
}

export default App
