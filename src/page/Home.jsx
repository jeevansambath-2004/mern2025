import React from 'react'
import About from './About';
import image from '../assets/kongu.jpg';
import image1 from '../assets/image.png'
const Home = ({items,users}) => {
  return (
<div>
   <About items={items} users={users} />
   <img src={image} alt="kongu" /><img src={image1} alt="kongu" />
  </div>
  );
}

export default Home
