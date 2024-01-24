import { Outlet, Link } from 'react-router-dom'

// RETURN TO PROJECTS BUTTON
//------------------------------------------------------------------------------------
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export function ReturnToProjects() {
  return (
    <>
      <Link to={'/projects'}>
        <button className="button projects-return">←</button>
      </Link>
      <Outlet />
    </>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// WORK CARDS
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function ProjectCard({ title, caption, categories, link }) {
  const catmap = categories.map((category) => (
    <p key={category} className="badge-outline">
      {category}
    </p>
  ))

  return (
    <>
      <Link to={'' + link} className="project-card ">
        <div className="row-f10 pc-start col-gap-1 row-gap-1">{catmap}</div>
        <h2 className="title">{title}</h2>
        <p className="caption">{caption}</p>
      </Link>
    </>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//
// WORK PAGE
//
//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export function Projects() {
  return (
    <>
      <div className="projects-container">
        <ProjectCard
          link={'https://www.summoner.quest'}
          categories={['UX/UI', 'vue.js', 'tailwind']}
          title={'dnd summoner'}
          caption={
            'i built an API pulling tool for managing monsters in dnd combat (external link)'
          }
        />
        <ProjectCard
          link={'/projects/asc-exhibit'}
          categories={['UX/UI', 'exhibit design']}
          title={'jamison city interactive'}
          caption={'stress-testing Powerpoint to teach history.'}
        />
        <ProjectCard
          link={'/projects/lobo-redesign'}
          categories={['brand', 'illustration']}
          title={"what's a seawolf?"}
          caption={'refreshing a 15 year old university mascot.'}
        />
        <ProjectCard
          link={'/projects/zig-zag-tattoo'}
          categories={['UX/UI', 'brand', 'css']}
          title={'zig zag tattoo: web + brand'}
          caption={'establishing a foundation for a new studio.'}
        />
        <ProjectCard
          link={'/projects/volta-roach'}
          categories={['illustration']}
          title={'volta mech roach'}
          caption={'the battle for the future of energy.'}
        />
        <ProjectCard
          link={'/projects/ssu-web-reskin'}
          categories={['UX/UI', 'Drupal']}
          title={'sonoma state site redesign'}
          caption={'redesigning for a large university website.'}
        />
        <ProjectCard
          link={'/projects/covid-campus-comms'}
          categories={['comms', 'illustration']}
          title={'covid-19 campus communications'}
          caption={'keeping the SSU community informed.'}
        />
        <ProjectCard
          link={'/projects/nina-jarnum-yoga'}
          categories={['UX/UI', 'css', 'js']}
          title={'nina jarnum yoga: redesign'}
          caption={'transitioning to an online, member-based model.'}
        />
        <ProjectCard
          link={'/projects/local-election-guides'}
          categories={['comms']}
          title={'local election guides'}
          caption={'helping make ballot information clear.'}
        />
      </div>
    </>
  )
}
