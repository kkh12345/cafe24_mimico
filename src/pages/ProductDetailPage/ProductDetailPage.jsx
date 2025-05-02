import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

//컴포넌트
import ProductDetailInfo from './sections/ProductDetailInfo';

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
      <ProductDetailInfo id={id} />
    </div>
  );
}
