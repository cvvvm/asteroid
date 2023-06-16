import { useState } from 'react';
import { Work } from './Work';
import Footer from '../components/Footer';

// home intros
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const homeIntros = [
  "hi, i'm Kate. i made a fun website for pictures.",
  "I've made everything on this website unless otherwise stated.",
  "Don't like the site colors? Change them in the nav menu!",
  'the funniest person in web design.',
  'professional keyboard & cat appreciator.',
  'coding this site makes it a portfolio piece.',
];

const introImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', 'coded-by-hand.jpg'];

let introIndex = 0;
function Home() {
  let [activeIntro, setActiveIntro] = useState(0);
  let [activeImage, setActiveImage] = useState(0);

  function prevIntro() {
    if (introIndex <= 0) {
      introIndex = homeIntros.length - 1;
    } else {
      introIndex -= 1;
    }
    setIntros(introIndex);
  }

  function nextIntro() {
    introIndex += 1;
    if (introIndex >= homeIntros.length) {
      introIndex = 0;
    }
    setIntros(introIndex);
  }

  function setIntros(index) {
    setActiveImage(index);
    setActiveIntro(index);
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
            <h2 className="px-1">{homeIntros[activeIntro]}</h2>
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
