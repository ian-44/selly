import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/FooterComponent';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ProductDetail from './components/ProductDetailPage';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Selly</h1>
      <nav className='app-nav'>
        <a href="/">Home</a>
        <a href="/product">Products</a>
      </nav>
      <h1></h1>
    </header>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes style={{ marginTop: '50px' }}>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/product' exact element={<ProductPage />} />
        <Route path='/product/:id' exact element={<ProductDetail />} />
        {/* <Route path="/products/:id" component={ProductDetailsPage} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;