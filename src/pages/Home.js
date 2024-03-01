import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getCategories } from '../services/api';
import banner1 from '../assets/banner_1.webp';
import banner2 from '../assets/banner_2.webp';
import banner3 from '../assets/banner_3.webp';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async() => {
      const categories = await getCategories(); 
      setCategories(categories)
    }

    fetchCategories();
  }, []);

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }

  const bannerImages = [
    banner1,
    banner2,
    banner3
  ]

  return (
    <div>
        <Slider {...sliderConfig}>
          {bannerImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Banner ${index + 1}`} className='banner-image' />
            </div>
          ))}
        </Slider>
      <div className="container-response">
        <Categories categories={categories}/>
      </div>
    </div>
  );
};

export default Home;