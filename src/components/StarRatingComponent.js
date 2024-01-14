import React from 'react';

const StarRatingComponent = ({ rating, count }) => {
    const renderStars = () => {
        const stars = [];
        const totalStars = 5;
        // const _rating = Math.floor(rating);
        const _rating = Math.floor(rating);
        const wholeStars = _rating;
        const decimalPercentage = (_rating % 1) * 100;
    
        for (let i = 1; i <= totalStars; i++) {
          let starClassName = 'star';
          
          if (i <= wholeStars) {
            starClassName += ' active';
            stars.push(<span key={i} className={starClassName}>&#9733;</span>);
          }

          if (i > wholeStars && i < wholeStars + 2) {
            starClassName += ' active';
            stars.push(<span key={i} className={starClassName}
                style={{
                    background: `linear-gradient(90deg, #A020F0 ${50}%, #c4c4c4 ${50}%)`,
                    color: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                }}
            >&#9733;</span>);
          }

          if (i >= wholeStars + 2) {
            stars.push(<span key={i} className={starClassName}>&#9733;</span>);
          }
    

        //   stars.push(
        //     i <= wholeStars ?
        //     <span key={i} className={starClassName}>&#9733;</span> :
        //     <span key={i} className={starClassName}
        //         style={{
        //             background: `linear-gradient(90deg, #ffd700 ${50}%, #ddd ${50}%)`,
        //             color: 'transparent',
        //             backgroundClip: 'text',
        //             WebkitBackgroundClip: 'text',
        //         }}
        //     >&#9733;</span>);
        //   stars.push(<span key={i} className={starClassName}>&#9733;</span>)
        }
    
        return stars;
    };

    return (
        <div className="star-rating">
            <span >{renderStars()} (<strong>{rating}</strong> | {count})</span>
        </div>
    );
    
};

export default StarRatingComponent;