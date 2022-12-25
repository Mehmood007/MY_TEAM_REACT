import React, { useState } from 'react'
import ReactLoading from "react-loading";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import SelectTextFields from './suggest';
import Playing_XI from './Suggest_playingXI';
import Card from './PlayerCard';
import { Button } from 'react-bootstrap';
import Menu_Tabs from './Menu_tabs';
import Retention from './Retention';
function Section2() {
  const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

  const [loading, setloading] = useState(true)
  const [franchise, setfranchise] = useState(false)
  if (loading) {
    const fetchData = async () => {
      const session_id = localStorage.getItem("session_id")
      const response = await fetch(
        `http://127.0.0.1:5000/verify_franchise/${session_id}`
      );
      const json = await response.json();
      setfranchise(json)
      setloading(false)
    };
    fetchData().catch(console.error);
  }
  return (
    <>
      {loading ? <div className="d-flex algin-items center justify-content-center m-5 p-5">
        <ReactLoading
          type="spinningBubbles"
          color="green"
          height={100}
          width={50}
        /> </div> : <>
        <div className='container'>
          <Menu_Tabs franchise={franchise}/>
          
        </div>
      </>

      }

    </>
  )
}

export default Section2