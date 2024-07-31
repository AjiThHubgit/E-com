import React, { useEffect, useState } from 'react'
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from 'react-redux';

import '../assets/styles/Card.scss'
import { postData } from '../redux/slice/thunkApiSlice';

const Card = ({ item }) => {

  const dispatch = useDispatch();
  // const [addToCardFlag, setAddToCardFlag] = useState(false);
  
  // const state = useSelector(state =>state.thunkApi);

  // useEffect(() => {
  //   console.log('state', state);
  // }, [state, addToCardFlag])
  
  const handleAdToCard = (item) => {
    const postDataPayload = {
      apiName: 'cart',
      data: item
    };
    dispatch(postData(postDataPayload));
    // setAddToCardFlag(true);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={item.img_url} />
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {item.title}
        </h2>
        <span style={{ marginRight: '10px' }}>{item.rating}</span><StarRatings
          rating={item.rating}
          starRatedColor="red"
          starEmptyColor="black"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="10px"
          changeRating={(newRating, name) => console.log(newRating, name)}
          name='rating'
        />
        <p className="card-intro">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nulla natus incidunt ad, voluptatum facilis.
        </p>
      </div>
      <div>
        <button onClick={() => handleAdToCard(item)} className='card-action-button add-to-card'>Add To Cart</button>
        <button className='card-action-button buy-now'>Buy Now</button>
      </div>
    </div>
  )
}

export default Card