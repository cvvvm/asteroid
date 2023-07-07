import { useState, useEffect } from 'react';
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

const homeDesc = [
  'a designer, engineer, occasional illustrator.',
  "you're the only one who knows about it. really!",
  'because it was fun to make.',
];

const introImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', 'coded-by-hand.jpg'];

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
      <div className="container vh-100 pt-5 row-gap-2">
        {/* picture */}
        <div className="row-f10 vh-70 row-gap-1 row-gap-sm-4">
          <div className="col-6">
            <div className="intro-image-box">
              <img
                className="intro-image"
                src={'/images/home-intro/' + introImages[activeImage]}
              />
            </div>
          </div>
          {/* text */}
          <div id="intro" className="col-4 jc-center">
            <h3 className="">{homeHeading[activeHead]}</h3>
            <p className="">{homeDesc[activeDesc]}</p>
          </div>
        </div>

        {/* buttons */}
        <div className="row-f10 col-gap-2">
          <button className="button-outline home-button back" onClick={prevIntro}>
            &#60;
          </button>

          <button className="button home-button next" onClick={nextIntro}>
            next &#62;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
