import React,{useState} from 'react';
import {IoIosStar,  IoIosStarOutline, IoIosStarHalf} from 'react-icons/io';

function Rating(props) {
    const [rating, setRating] = useState(props.rating);

  
    
    function chooseStar(index) {
        // In any cases, if the star rendered is under the score, it's a full one
        if (index <= rating) return IoIosStar;
        else {
          // But if we match the correct number, we must check if this is an integer
          if (rating && !Number.isSafeInteger(rating)) {
            // If there's no rating, or is not an integer, it's a half star
            return IoIosStarHalf ;
          }
    
          // If no case match, well it's an empty one
          return IoIosStarOutline;
        }
      }
    
      return (
        <div style={{ color: 'orange' }}>
          {/* Create one Star for every loop */}
          {[1,2,3,4,5].map((number) => {
            // For every star, we need to check if we render a full or half one
            const FinalStar = chooseStar(number);
    
            return <FinalStar onClick={() => setRating(number)} />;
          })}
         {props.rating}
      </div>
);
}

export default Rating;