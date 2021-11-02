import {useState, ChangeEvent} from 'react';
import Rating from '../rating/rating';

function AddReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <Rating/>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText}
          onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
            setReviewText(target.value);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
