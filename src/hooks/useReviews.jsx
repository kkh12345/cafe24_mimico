import { useSelector, useDispatch } from 'react-redux';
import { setReviews } from '../store/slice';
import axios from 'axios';

export default function useReviews() {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  const getReviews = () => {
    let get = JSON.parse(localStorage.getItem('mimicoReviews'));

    if (get === null || get.length === 0) {
      axios
        .get('/json/reviews.json')
        .then((data) => {
          dispatch(setReviews(data.data));
          localStorage.setItem('mimicoReviews', JSON.stringify(data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch(setReviews(get));
    }
  };

  const updateReviews = () => {
    localStorage.setItem('mimicoReviews', JSON.stringify(reviews));
  };

  return { reviews, getReviews, updateReviews };
}
