import { useEffect, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import gsap from 'gsap';

// RETURN TO PROJECTS BUTTON
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function ReturnToProjects() {
  return (
    <>
      <Link to={'/projects'}>
        <button className="button projects-return">←</button>
      </Link>
      <Outlet />
    </>
  );
}

// WORK CARDS
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function ProjectCard({ title, caption, categories, link, background }) {
  const workBG = useRef();

  const catmap = categories.map((category) => (
    <p key={category} className="badge-outline">
      {category}
    </p>
  ));

  return (
    <>
      <Link to={'/projects/' + link} className="project-card ">
        <div className="row-f10 pc-start col-gap-1">{catmap}</div>
        <h2 className="title">{title}</h2>
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
          link={'asc-exhibit'}
          categories={['UX/UI']}
          title={'jamison city interactive'}
          caption={'stress-testing Powerpoint to teach history.'}
        />
        <ProjectCard
          link={'zig-zag-tattoo'}
          categories={['brand', 'web']}
          title={'zig zag tattoo: web + brand'}
          caption={'establishing a foundation for a new studio.'}
        />
        <ProjectCard
          link={'volta-roach'}
          categories={['illustration']}
          title={'volta mech roach'}
          caption={'the battle for the future of energy.'}
        />
        <ProjectCard
          link={'ssu-web-reskin'}
          categories={['UX/UI', 'web']}
          title={'sonoma state site redesign'}
          caption={'redesigning for a large university website.'}
        />
        <ProjectCard
          link={'covid-campus-comms'}
          categories={['design', 'illustration']}
          title={'covid-19 campus communications'}
          caption={'keeping the SSU community informed.'}
        />
        <ProjectCard
          link={'nina-jarnum-yoga'}
          categories={['UX/UI', 'web']}
          title={'nina jarnum yoga: redesign'}
          caption={'transitioning to an online, member-based model.'}
        />
        <ProjectCard
          link={'local-election-guides'}
          categories={['design']}
          title={'local election guides'}
          caption={'helping make ballot information clear.'}
        />
      </div>
    </>
  );
}
