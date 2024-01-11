import React, { useEffect, useState } from 'react';
import '../App.css';
import BigP from './BigP'; // Import BigP instead of BigPost
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [foodPosts, setFoodPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/food-database/v2/parser?app_id=4daaadf2&app_key=9b99d758ca96b29208f634e590e52089&ingr=Chicken%2C%20Meat%2C%20Fish&brand=Applegate&nutrition-type=cooking&category=packaged-foods&to=35`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Filter out items without images
        const filteredData = data.hints.filter((item) => item.food.image);

        // Remove duplicates based on foodId
        const uniqueData = Array.from(new Set(filteredData.map((item) => item.food.foodId)))
          .map((foodId) => filteredData.find((item) => item.food.foodId === foodId));

        setFoodPosts(uniqueData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigateToBigP = (foodId, foodData) => {
    navigate(`/bigp/${foodId}`, { state: { food: foodData } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
     <h1> Lunch / Dinner</h1>

    <div className="card-container">
      {foodPosts.map((post) => (
        <div key={post.food.foodId} className="card">
          <img src={post.food.image} alt={post.food.label} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{post.food.label}</h3>
            <p className="card-description">{post.food.category}</p>
            <button
              className="view-button"
              onClick={() => navigateToBigP(post.food.foodId, post.food)}
            >
              View
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default About;
