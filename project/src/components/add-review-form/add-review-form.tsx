import { ChangeEvent, FormEvent, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import {RatingList, RATING_VALUES} from '../rating-list/rating-list';

import { CommentPost } from '../../types/review';
import { ThunkAppDispatch } from '../../types/action';
import { commentPostAction } from '../../store/api-actions';
import { useParams } from 'react-router';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(filmId: number, commentPost: CommentPost) {
    dispatch(commentPostAction(filmId, commentPost));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function AddReviewForm(props: PropsFromRedux): JSX.Element {
  const { onSubmit } = props;

  const { id } = useParams<{ id: string }>();

  const [reviewText, setReviewText] = useState('');
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setRatingValue(Number(target.value));
  };
  const handleTextInput = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit(
      Number(id),
      {
        rating: ratingValue,
        comment: reviewText,
      },
    );
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating"
        onChange={handleRatingInput}
      >
        <RatingList ratingValues={RATING_VALUES} />
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          minLength={50}
          maxLength={400}
          onChange={handleTextInput}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export { AddReviewForm };
export default connector(AddReviewForm);
