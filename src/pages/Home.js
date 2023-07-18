import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import Footer from '../components/Footer';

// home intros
//---------------------------------------------------------------------
let introIndex = 0;

const homeHeading = [
  "hi, i'm claire.",
  'i made you this website.',
  'you can change the color.',
  'the funniest person in web design.',
  'professional keyboard & cat appreciator.',
  'coding this site makes it a portfolio piece.',
];

const homeDesc = ['a designer, engineer, occasional illustrator.'];

const introImages = [
  '1.webp',
  '2.webp',
  '3.webp',
  '4.webp',
  '5.webp',
  '6.webp',
  '7.webp',
  '8.webp',
  '9.webp',
  '10.webp',
];

// HOME PAGE
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Home() {
  let [activeHead, setActiveHead] = useState(0);
  let [activeImage, setActiveImage] = useState(0);
  let [activeDesc, setActiveDesc] = useState(0);

  // swap intros
  //---------------------------------------------------------------------
  function prevIntro() {
    if (introIndex <= 0) {
      introIndex = homeHeading.length - 1;
    } else {
      introIndex -= 1;
    }
    setIntros(introIndex);
  }

  function nextIntro() {
    introIndex += 1;
    if (introIndex >= homeHeading.length) {
      introIndex = 0;
    }
    setIntros(introIndex);
  }

  function setIntros(index) {
    setActiveImage(index);
    setActiveHead(index);
    setActiveDesc(index);
  }

  return (
    <>
      <div className="container vh-90 pt-8 row-gap-2">
        {/* picture */}
        <div className="row-8">
          <div className="col-7 pc-center gap-1">
            {/*           <div className="col-6 pi-center">
            <p className="badge-outline ">a random photo i took</p>
            <div className="intro-image-box">
              <img
                className="intro-image"
                src={'/images/home/' + introImages[activeImage]}
              />
            </div>
            <button className="button home-button next " onClick={nextIntro}>
              more!
            </button>
          </div> */}
            {/* text */}

            <h1 className="">{homeHeading[activeHead]}</h1>
            <p className="">{homeDesc[activeDesc]}</p>
            <p>
              i built this website<span className="note">*</span> so you can see my work
              with the background color of your choice.
            </p>

            {/* <button className="button home-button next" onClick={nextIntro}>
              next &#62;
            </button> */}
          </div>
          <div className="row-f10 py-1">
            <Link to={'/about'}>
              <button className="button-outline as-center">about</button>
            </Link>
            <Link to={'/projects'}>
              <button className="button as-center ">projects</button>
            </Link>
          </div>
          <div className="col-6">
            <p className="note">
              *some areas are still in development, bugs are possible.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
