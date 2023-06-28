import gsap from 'gsap';
import { Outlet, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

// PROJECT PAGE RETURN TO WORK
//---------------------------------------------------------------------
export function ReturnToWork() {
  return (
    <>
      <a href="/work">
        <button className="button work-return">←</button>
      </a>

      {/* <Link to={'/work'}>
        <button className="button work-return">&#60;</button>
      </Link> */}
      <Outlet />
    </>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// WORK CARDS
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function WorkCard({ title, caption, categories, link, background }) {
  const workBG = useRef();

  const catmap = categories.map((category) => (
    <p key={category} className="badge-outline">
      {category}
    </p>
  ));

  /* const showProjectImg = ({}) => {
    gsap.to(workBG.current, { zIndex: -99, duration: 0, overwrite: true });
    gsap.to(workBG.current, {
      opacity: 1,
      scale: 1,
      duration: 0,
      delay: 0.1,
      ease: 'none',
      overwrite: true,
    });
  };

  const hideProjectImg = ({}) => {
    gsap.to(workBG.current, {
      zIndex: -98,
      duration: 0,
      delay: 0.2,
      overwrite: true,
    });
    gsap.to(workBG.current, {
      scale: 1.01,
      opacity: 0,
      duration: 0.2,
      ease: 'expo.in',
      overwrite: true,
    });
  }; */

  return (
    <>
      {/* <div
        className="work-pg-bg"
        ref={workBG}
        style={{ backgroundImage: 'url(../images/' + background + '.jpg)' }}
      /> */}
      <Link
        to={'/work/' + link}
        className="work-card "
        /*         onMouseEnter={showProjectImg}
        onMouseLeave={hideProjectImg} */
      >
        <div className="row-f10 pc-start col-gap-1" style={{ opacity: 0.65 }}>
          {catmap}
        </div>
        <h3 className="title">{title}</h3>
        <p className="caption">{caption}</p>
      </Link>
    </>
  );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// WORK PAGE
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function Work() {
  return (
    <>
      <div className="container px-md-6 vh-100">
        <WorkCard
          link={'zig-zag-tattoo'}
          categories={['brand', 'web']}
          title={'zig zag tattoo'}
          caption={'building a new website & brand.'}
        />
        <WorkCard
          link={'asc-exhibit'}
          categories={['UX/UI']}
          title={'jamison city exhibit'}
          caption={'stress-testing Powerpoint to teach history.'}
        />
      </div>
    </>
  );
}
