import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css'; // Adjust the path based on your project structure



const BigPost = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.food) {
    return <p>No food data available.</p>;
  }

  const { label, category, image } = state.food;

  return (
    
    <div>
      <Link to="/" style={{textDecoration: 'none', color: 'white'}} className="back-button">Back</Link>

      <div className='boys'>
      <h1>{label}</h1>
      <p>Category: {category}</p>

      <img src={image} alt={label} />
      
      {/* Additional details about the food post */}
    </div>
    </div>
  );
};

export default BigPost;
