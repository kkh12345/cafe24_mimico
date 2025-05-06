import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

//컴포넌트
import ProductDetail from './sections/ProductDetail';
import ProductDetailLeft from './sections/ProductDetailLeft';
import ProductDetailRight from './sections/ProductDetailRight';

//커스텀 훅
import useProducts from '../../hooks/useProducts';

export default function ProductDetailPage() {
  const { id } = useParams();

  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-detail">
      <ProductDetail>
        <ProductDetailLeft id={id} />
        <ProductDetailRight id={id} />
      </ProductDetail>
    </div>
  );
}
