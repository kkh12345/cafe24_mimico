import MainVisualSection from './sections/MainVisualSection';
import MainCommentSection from './sections/MainCommentSection';
import InstagramSection from './sections/InstagramSection';
import ReviewSection from './sections/ReviewSection';
import BestSellerSection from './sections/BestSellerSection';
import NewSection from './sections/NewSection';
import CollectionSection from './sections/CollectionSection';
import KidsItemSection from './sections/KidsItemSection';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="homepage">
      <MainVisualSection />
      <MainCommentSection />
      <BestSellerSection />
      <NewSection />
      <CollectionSection />
      <KidsItemSection />
      <ReviewSection />
      <InstagramSection />
    </div>
  );
}
