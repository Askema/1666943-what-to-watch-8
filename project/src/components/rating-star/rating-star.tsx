import {useState, ChangeEvent, Fragment} from 'react';

const AddReviewRatingStars: number[] = new Array(10).fill('').map((_, index) => index+1).reverse();

function RatingStar(): JSX.Element {
  const [, setRatingValue] = useState(0);
  const handleOnRatingChange= (evt: ChangeEvent<HTMLInputElement>) => {
    setRatingValue(Number(evt.target.value));
  };

  return (
    <>
      {AddReviewRatingStars.map((number) =>
        (
          <Fragment key={`itemStarRating-${number}`}>
            <input
              onChange={handleOnRatingChange}
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

export default RatingStar;
