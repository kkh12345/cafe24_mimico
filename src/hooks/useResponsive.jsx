import { useMediaQuery } from 'react-responsive';

export default function useResponsive() {
  const isPc = useMediaQuery({ query: '(min-width: 1201px)' });
  const isPcSmall = useMediaQuery({
    query: '(max-width: 1200px)',
  });
  const isTabletBig = useMediaQuery({
    query: '(max-width: 1024px)',
  });
  const isTabletSmall = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 420px)' });

  return { isPc, isPcSmall, isTabletBig, isTabletSmall, isMobile };
}
