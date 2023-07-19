import { useEffect, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import gsap from 'gsap';

// PROJECT PAGE RETURN TO WORK
//---------------------------------------------------------------------
export function ReturnToWork() {
  return (
    <>
      <Link to={'/projects'}>
        <button className="button projects-return">←</button>
      </Link>
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

export function ProjectCard({ title, caption, categories, link, background }) {
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
      <Link to={'/work/' + link} className="project-card ">
        <div className="row-f10 pc-start col-gap-1">{catmap}</div>
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

export function Projects() {
  return (
    <>
      <div className="projects-container">
        <ProjectCard
          link={'ssu-web-reskin'}
          categories={['brand', 'web']}
          title={'sonoma state university'}
          caption={'redesigning for a large university website.'}
        />
        <ProjectCard
          link={'zig-zag-tattoo'}
          categories={['brand', 'web']}
          title={'zig zag tattoo: web + brand'}
          caption={'establishing a foundation for a new studio.'}
        />
        <ProjectCard
          link={'asc-exhibit'}
          categories={['UX/UI']}
          title={'jamison city interactive'}
          caption={'stress-testing Powerpoint to teach history.'}
        />
      </div>
    </>
  );
}
