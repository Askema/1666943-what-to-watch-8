import {useState, ChangeEvent} from 'react';

type RatingElementProps = {
  ratingValue: number;
}

function RatingElement(props: RatingElementProps): JSX.Element {
  const {ratingValue} = props;

  return (
    <>
      <input className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={ratingValue}/>
      <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
    </>
  );
}

function AddReviewForm(): JSX.Element {
  const [, setReviewText] = useState('');
  const [, setRatingValue] = useState(0);

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars"
          onChange={({target}: ChangeEvent<HTMLInputElement>) => {
            setRatingValue(Number(target.value));
          }}
        >

          <RatingElement ratingValue={10}/>
          <RatingElement ratingValue={9}/>
          <RatingElement ratingValue={8}/>
          <RatingElement ratingValue={7}/>
          <RatingElement ratingValue={6}/>
          <RatingElement ratingValue={5}/>
          <RatingElement ratingValue={4}/>
          <RatingElement ratingValue={3}/>
          <RatingElement ratingValue={2}/>
          <RatingElement ratingValue={1}/>

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
