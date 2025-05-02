import { Route, Routes } from 'react-router-dom';

//컴포넌트
import Popup from './components/Popup/Popup';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

//css
import './global.css';

function App() {
  console.log('렌더링');

  return (
    <div className="App">
      <Popup />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/productDetail/:id"
          element={<ProductDetailPage />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
