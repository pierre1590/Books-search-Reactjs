import React,{useState} from 'react';
import {IoIosStar, IoIosStarOutline} from 'react-icons/io';

function Rating(props) {
    const [rating, setRating] = useState(0);
    return (
        <div style={{color: 'orange'}}>
        {rating >= 1 ? ( 
            <IoIosStar onClick={function(){setRating(1)}}/>     
        ) : (         
            <IoIosStarOutline onClick={function(){setRating(1)}}/>     
        )}     
        {rating >= 2 ? ( 
            <IoIosStar onClick={() => setRating(2)}/>     
        ) : (         
            <IoIosStarOutline onClick={() => setRating(2)}/>     
        )} 
        {rating >= 3 ? ( 
            <IoIosStar onClick={() => setRating(3)}/>     
        ) : (         
            <IoIosStarOutline onClick={() => setRating(3)}/>     
        )} 
        {rating >= 4 ? ( 
            <IoIosStar onClick={() => setRating(4)}/>     
        ) : (         
            <IoIosStarOutline onClick={() => setRating(4)}/>     
        )} 
        {rating >= 5 ? ( 
            <IoIosStar onClick={() => setRating(5)}/>     
        ) : (         
            <IoIosStarOutline onClick={() => setRating(5)}/>     
        )}   
        {props.rating}
    </div>
);
}

export default Rating;