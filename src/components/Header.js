import React from 'react';



const Header = props => {
  return (
    
    <div className="card">
  <div className="card-image">
    <figure className="image is-256x256">
      <img src={props.car.image} alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">  
      <h2 className="title is-4">{props.car.name}</h2>
      <p className="subtitle is-6">Amount: ${props.car.price}</p> 
      </div>
    </div>
  </div>
</div>
      
  );
};



export default Header;

