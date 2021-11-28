const RATING_VALUES = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

type RatingListProps = {
  ratingValues: number[];
}

function RatingList(props: RatingListProps): JSX.Element {
  const { ratingValues } = props;

  return (
    <div className="rating__stars">
      {ratingValues.map((ratingValue: number) =>
        (
          <>
            <input className="rating__input" id={`star-${ratingValue}`} type="radio" name="rating" value={ratingValue} />
            <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
          </>
        ))}
    </div>
  );
}

export {RatingList, RATING_VALUES};
