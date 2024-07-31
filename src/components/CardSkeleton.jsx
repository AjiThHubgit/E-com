import React from 'react'
import '../assets/styles/Card.scss';

const CardSkeleton = () => {
  return (
    <div className="card">
      <div className="card-img skeleton">
      </div>
      <div className="card-body">
        <h2 className="card-title skeleton">
        </h2>
        <p className="card-intro skeleton">
        </p>
      </div>
    </div>
  )
}

export default CardSkeleton