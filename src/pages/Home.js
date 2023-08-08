import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

import Footer from '../components/Footer';

// home intros
//-----------------------------------------------------------
let introIndex = 0;

const homeHeading = [
  "hi, i'm claire.",
  'i made you this website.',
  'you can change the color.',
  'the funniest person in web design.',
  'professional keyboard & cat appreciator.',
  'coding this site makes it a portfolio piece.',
];

const homeDesc = ['self-taught designer, engineer, occasional illustrator.'];

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
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Home() {
  let [activeHead, setActiveHead] = useState(0);
  let [activeImage, setActiveImage] = useState(0);
  let [activeDesc, setActiveDesc] = useState(0);

  // swap intros
  //-----------------------------------------------------------
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
      <div className="container vh-50 pt-6 pb-0 row-gap-2">
        <div className="row-8">
          <div className="col-5 pc-center">
            <h1 className="">{homeHeading[activeHead]}</h1>
            <p className="">{homeDesc[activeDesc]}</p>
            <p>
              i built this website so you can see my work with the background color of
              your choice.
            </p>
            <p className="note">
              this site is new, some details are still being added :)
            </p>
          </div>
          <div className="row-5 pc-evenly py-1">
            <Link to={'/about'}>
              <button className="button-outline as-center">about</button>
            </Link>
            <Link to={'/projects'}>
              <button className="button as-center ">projects</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
