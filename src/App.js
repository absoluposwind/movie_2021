import React from "react";
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  return <div>
  <h2>I like {name}</h2>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
  };

const foodIlike =[
  {
    id:1,
    name: "kimchi",
    image:
    "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
    rating: 5.0
  },
  {
    id:2,
    name: "ramen",
    image:
    "https://peasandcrayons.com/wp-content/uploads/2020/04/spicy-vegetarian-ramen-recipe-3.jpg",
    rating: 4.8
  },
  {
    id:3,
    name: "kimbap",
    image:
    "https://www.seriouseats.com/2020/01/20200122-gimbap-vicky-wasik-24-1500x1125.jpg",
    rating: 4.2
  },
  {
    id:4,
    name: "bulgogi",
    image:"https://assets.bonappetit.com/photos/57acd741f1c801a1038bc801/8:5/w_4839,h_3024,c_limit/basic-bulgogi.jpg",
    rating: 4.7
  }
];


  

function App() {
    return <div>
      {foodIlike.map(dish =>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>;
}

export default App;
