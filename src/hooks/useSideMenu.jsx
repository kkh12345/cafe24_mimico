import { useSelector, useDispatch } from 'react-redux';
import { setIsSideMenuOpen } from '../store/slice';
export default function useSideMenu() {
  const isSideMenuOpen = useSelector((state) => state.isSideMenuOpen);
  const dispatch = useDispatch();

  const openSideMenu = () => {
    dispatch(setIsSideMenuOpen(true));
  };
  const closeSideMenu = () => {
    dispatch(setIsSideMenuOpen(false));
  };

  return { isSideMenuOpen, closeSideMenu, openSideMenu };
}
