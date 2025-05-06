//css
import './ProductDetail.css';

export default function ProductDetail({ children }) {
  return (
    <article className="product-detail">
      <div className="product-detail__inner inner-common">{children}</div>
    </article>
  );
}
