import { useSelector, useDispatch } from 'react-redux';
import { setIsSearchModalShow } from '../store/slice';
export default function useSearchModal() {
  const isSearchModalShow = useSelector((state) => state.isSearchModalShow);
  const dispatch = useDispatch();

  const toggleSearchModal = () => {
    dispatch(setIsSearchModalShow(!isSearchModalShow));
  };

  return { isSearchModalShow, toggleSearchModal };
}
