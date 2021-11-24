import dayjs from 'dayjs';
import {Review} from '../../types/review';

type ReviewItemProps = {
  review: Review;
}

function ReviewItem(props: ReviewItemProps): JSX.Element {
  const {review} = props;

  return (
    <div key={review.id} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={dayjs(review.date).format('YYYY-MM-DD')}>{dayjs(review.date).format('MMMM DD, YYYY')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toLocaleString()}</div>
    </div>
  );
}

export default ReviewItem;
