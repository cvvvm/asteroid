import { useState } from 'react';
import Footer from '../components/Footer';

// home intros
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const homeHeading = [
  "hi, i'm @!*/&_%$.",
  "I've made this website.",
  "Don't like the site colors? Change them in the nav menu!",
  'the funniest person in web design.',
  'professional keyboard & cat appreciator.',
  'coding this site makes it a portfolio piece.',
];

const homeDesc = [
  'i made a fun website for pictures.',
  'and everything on it. *unless otherwise stated.',
];

const introImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', 'coded-by-hand.jpg'];

let introIndex = 0;
function Home() {
  let [activeHead, setActiveHead] = useState(0);
  let [activeImage, setActiveImage] = useState(0);
  let [activeDesc, setActiveDesc] = useState(0);

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
      <div className="container vh-100">
        <div className="row-f10">
          <div className="col-6">
            <div className="intro-image-box">
              <img
                className="intro-image"
                src={'/images/home-intro/' + introImages[activeImage]}
              />
            </div>
          </div>

          <div id="intro" className="col-5 jc-center">
            <h3 className="px-1">{homeHeading[activeHead]}</h3>
            <p className="px-1">{homeDesc[activeDesc]}</p>
          </div>
        </div>

        <div className="row-f10 col-gap-xs-2 pt-md-5">
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
