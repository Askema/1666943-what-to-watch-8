import {useState, ChangeEvent, Fragment} from 'react';

const AddReviewRatingStars = Array.from({ length: 11 }, (v, k) => k).reverse();
AddReviewRatingStars.pop();

function Rating(): JSX.Element {
  const [, setRatingValue] = useState(0);
  const onRatingChange= (evt: ChangeEvent<HTMLInputElement>) => {
    setRatingValue(Number(evt.target.value));
  };

  return (
    <>
      {AddReviewRatingStars.map((number) =>
        (
          <Fragment key={`itemStarRating-${number}`}>
            <input
              onChange={onRatingChange}
              className="rating__input"
              id={`star-rating-${number}`}
              type="radio"
              name="rating"
              value={number}
            />
            <label className="rating__label" htmlFor={`star-rating-${number}`} >Rating {number}</label>
          </Fragment>
        ))}
    </>
  );
}

export default Rating;
