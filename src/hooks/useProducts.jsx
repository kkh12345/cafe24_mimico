import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../store/slice';
import axios from 'axios';

export default function useProducts() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const newProducts = products.filter((product) => {
    return product.isNew === true;
  });

  const getProducts = () => {
    let get = JSON.parse(localStorage.getItem('mimicoProducts'));

    if (get === null || get.length === 0) {
      axios
        .get('/json/products.json')
        .then((data) => {
          dispatch(setProducts(data.data));
          localStorage.setItem('mimicoProducts', JSON.stringify(data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(setProducts(get));
    }
  };

  const updateProducts = () => {
    localStorage.setItem('mimicoProducts', JSON.stringify(products));
  };

  return { products, newProducts, getProducts, updateProducts };
}
