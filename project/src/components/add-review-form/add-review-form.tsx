import {useState, ChangeEvent} from 'react';
import RatingStar from '../rating-star/rating-star';

function AddReviewForm(): JSX.Element {
  const [, setReviewText] = useState('');

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <RatingStar/>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
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
