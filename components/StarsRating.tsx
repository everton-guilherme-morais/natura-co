interface StarsNumberProps {
  stars: number
  stylesClass?: string
}

const StarRating: React.FC<StarsNumberProps> = ({ stars, stylesClass }) => {
  const filledStars = Array(stars).fill(true);
  const emptyStars = Array(5 - stars).fill(false);
  const allStars = filledStars.concat(emptyStars);

  return (
    <div className={stylesClass}>
      {allStars.map((filled, index) => (
        <span key={index} style={{ color: filled ? 'gold' : 'gray' }}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;