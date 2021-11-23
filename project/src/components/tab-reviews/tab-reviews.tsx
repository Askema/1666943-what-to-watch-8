import {Review} from '../../types/review';
import ReviewItem from '../review-item.tsx/review-item';

type TabReviewsProps = {
  reviews: Review[];
}

function TabReviews(props: TabReviewsProps): JSX.Element {
  const {reviews} = props;
  const reviewsForFirstColumn = reviews.filter((_, index) => index % 2 === 0);
  const reviewsForSecondColumn = reviews.filter((_, index) => index % 2 !== 0);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsForFirstColumn.map((review) => <ReviewItem key={review.id} review={review} />)}
      </div>

      <div className="film-card__reviews-col">
        {reviewsForSecondColumn.map((review) => <ReviewItem key={review.id} review={review} />)}
      </div>
    </div>

  );
}

export default TabReviews;
