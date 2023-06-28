import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// DEVICE SWAPPER
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function Devices({ columns, project, page, defaultState = 'desk' }) {
  // container variables
  //---------------------------------------------------------------------
  const devicesContainer = useRef();
  const [toggledDevice, setToggledDevice] = useState(defaultState);

  // device variables (passed)
  //---------------------------------------------------------------------
  const crtFrame = useRef();
  const palmFrame = useRef();
  const [crtHeight, setCrtHeight] = useState(0);
  const [palmHeight, setPalmHeight] = useState(0);

  // size device screen + onresize
  //---------------------------------------------------------------------
  useEffect(() => {
    const getImgHeight = () => {
      setCrtHeight(crtFrame.current.offsetWidth);
      setPalmHeight(palmFrame.current.offsetWidth);
    };
    getImgHeight();

    window.addEventListener('resize', getImgHeight);
    return () => window.removeEventListener('resize', getImgHeight);
  }, [devicesContainer]);

  // device container timelines
  //---------------------------------------------------------------------
  function moveCrt() {
    let moveCrtTimeline = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power4.inOut' },
    });
    moveCrtTimeline
      .to(crtFrame.current, { translateX: -170, scale: 0.5 })
      .to(crtFrame.current, { zIndex: -1, duration: 0 })
      .to(crtFrame.current, { translateX: 0, scale: 0 }, '<');

    return moveCrtTimeline;
  }
  function movePalm() {
    let movePalmTimeline = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power4.inOut' },
    });
    movePalmTimeline
      .to(palmFrame.current, { translateX: 180, scale: 0.4 })
      .to(palmFrame.current, { zIndex: 200, duration: 0 })
      .to(palmFrame.current, { translateX: 0, scale: 1 }, '<');

    return movePalmTimeline;
  }

  // watch device state
  //---------------------------------------------------------------------
  function toggleDesk() {
    setToggledDevice('desk');
  }
  function toggleMobile() {
    setToggledDevice('mobile');
  }

  useEffect(() => {
    if (toggledDevice === 'desk') {
      deviceTL.current.timeScale(1).reverse();
    } else if (toggledDevice === 'mobile') {
      deviceTL.current.timeScale(1);
    }
    // page load state ??? i honestly dont know what this does yet
    deviceTL.current.reversed(toggledDevice === 'desk');
  }, [toggledDevice]);

  // animate device swap
  //---------------------------------------------------------------------
  const deviceTL = useRef();
  useLayoutEffect(() => {
    const deviceCtx = gsap.context(() => {
      deviceTL.current = gsap
        .timeline({ reversed: true })
        .add(moveCrt())
        .add(movePalm(), '<');
    }, [devicesContainer]);

    return () => deviceCtx.revert();
  }, []);

  // RENDER
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <>
      <div className={'row-gap-1 row-' + columns}>
        <div className="devices-container" ref={devicesContainer}>
          <div className="device-container">
            <PalmPre
              project={project}
              page={page}
              containRef={palmFrame}
              imgRef={palmHeight}
            />
          </div>
          <div className="device-container">
            <CRTMonitor
              project={project}
              page={page}
              containRef={crtFrame}
              imgRef={crtHeight}
            />
          </div>
        </div>
        <div className="row-f10 gap-0">
          <button
            className={
              'device-toggle-button left button' +
              (toggledDevice === 'desk' ? '' : '-outline')
            }
            onClick={toggleDesk}
          >
            Desktop
          </button>
          <button
            className={
              'device-toggle-button right button' +
              (toggledDevice === 'mobile' ? '' : '-outline')
            }
            onClick={toggleMobile}
          >
            Mobile
          </button>
        </div>
      </div>
    </>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// PALM PRE
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function PalmPre({ project, page, containRef, imgRef }) {
  const palmPreTop = useRef();
  const palmPreBottom = useRef();

  // click to open
  //---------------------------------------------------------------------
  const palmOpen = ({}) => {
    gsap.to(palmPreBottom.current, {
      translateY: '37%',
      ease: 'expo.out',
      duration: 0.5,
    });
    gsap.to(containRef.current, {
      scale: 0.85,
      translateY: '-16%',
      ease: 'expo.out',
      duration: 0.4,
    });
  };

  // mouse leave close
  //---------------------------------------------------------------------
  const palmClose = ({}) => {
    gsap.to(palmPreBottom.current, {
      translateY: 0,
      ease: 'expo.in',
      duration: 0.2,
    });
    gsap.to(containRef.current, {
      scale: 1,
      translateY: 0,
      ease: 'expo.in',
      duration: 0.2,
    });
  };

  return (
    <>
      <div
        ref={containRef}
        className={'palm-pre'}
        onMouseLeave={palmClose}
        onClick={palmOpen}
      >
        <img
          ref={palmPreTop}
          className="palm-pre-top"
          src="/images/component-assets/palm-pre_top.svg"
          alt="top shell of Palm Pre phone"
        />
        <div className="palm-pre-img-mask" style={{ height: imgRef }}>
          <img
            className="palm-pre-img"
            src={(
              '/images/projects/' +
              project +
              '/mobile-' +
              page +
              '.png'
            ).toLowerCase()}
            alt="mobile view of a website"
          />
        </div>

        <img
          ref={palmPreBottom}
          className="palm-pre-bottom"
          src="/images/component-assets/palm-pre_bottom.svg"
          alt="keyboard + bottom shell of Palm Pre phone"
        />
      </div>
    </>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// CRT MONITOR
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function CRTMonitor({ project, page, containRef, imgRef }) {
  return (
    <>
      <div className={'crt-monitor'} ref={containRef}>
        <img
          className="crt-monitor-frame"
          src="/images/component-assets/CRT-monitor.svg"
          alt="shell of an old CRT monitor"
        />
        <div className="crt-monitor-img-mask" style={{ height: imgRef }}>
          <img
            className="crt-monitor-img"
            src={('/images/projects/' + project + '/desk-' + page + '.png').toLowerCase()}
            alt="desk view of a website"
          />
        </div>
      </div>
    </>
  );
}
