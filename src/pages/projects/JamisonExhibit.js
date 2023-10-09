import {
  ImgCover,
  Role,
  GalleryImgToggler,
  VideoGallery
} from '../../components/ProjectPages'

export default function JamisonExhibit() {
  var project = 'jamison-exhibit'
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            freelance
            title={'jamison city interactive'}
            columns={6}
            roles={'UX/UI, illustration & compositing, project management'}
            contributors={
              'content & reference images, on-site implementation: Anthropological Studies Center.'
            }
          >
            <p>
              sponsored by the California Department of Parks & Recreation, my client from
              Sonoma State University Anthropological Studies Center (ASC) needed to
              create an interactive digital exhibit showcasing the history of now lost
              Jamison City, CA.
            </p>
          </Role>
        </div>
      </ImgCover>

      <div className="container">
        <div className="col-6 outline invert mb-2 my-md-2">
          <h2>making a powerful point.</h2>
          <p>
            just one catch - with no internet at the installation & no budget for
            additional software - the exhibit's hundreds of screens needed to run
            exclusively in Microsoft Powerpoint.
          </p>
        </div>

        <div className="row-f10 vh-80">
          <div className="row-f10"></div>
          <div className="row-f10">
            <VideoGallery
              columns={12}
              project={project}
              videoType={'mp4'}
              galleries={[
                {
                  title: 'animations',
                  prefix: project,
                  images: [
                    'map-next-country',
                    'map-world-us-transition',
                    'fire-start',
                    'people-william',
                    'menu',
                    'place-map-transition',
                    'saloons'
                  ]
                }
              ]}
            />
          </div>

          <div className="col-9">
            <h2 className="">visual styling</h2>
            <div className="row-f10">
              <div className="col-f4">
                <h4>interface:</h4>
                <p>
                  i crafted the visual style to combine modern interface elements with the
                  hand-crafted, primarily wooden adornments contemporary to jamison city.
                  every object was made to feel like it occupied physical space on the
                  screen.
                </p>
              </div>
              <div className="col-f4">
                <h4>animation:</h4>
                <p>
                  it was important to me that the animation reinforced the physicality of
                  the visual style. objects don't fade away, but slide around like items
                  on a table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <GalleryImgToggler
          textCol={4}
          invert
          galleryCol={8}
          vh={10}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'sketch',
              prefix: 'sketch',
              images: ['menu', 'people', 'world_map', 'town_map', 'things']
            },
            {
              title: 'wireframe',
              prefix: 'wire',
              images: ['menu', 'people', 'world_map', 'town_map', 'things']
            },
            {
              title: 'final',
              prefix: 'final',
              images: ['menu', 'people', 'world_map', 'town_map', 'things']
            }
          ]}
        ></GalleryImgToggler>

        <div className="col-9">
          <h2 className="">process:</h2>
          <div className="row-f10">
            <div className="col-f4">
              <h4>experience:</h4>
              <p>
                i built hundreds of slides coordinated between dozens of branching user
                paths. designing & coordinating interactive maps, information pop-ups,
                timelines, a quiz.
              </p>
            </div>
            <div className="col-f4">
              <h4>optimization:</h4>
              <p>
                the amount of assets & animations meant balancing intensely between how
                much was on screen, what moved, and what could be rasterized together,
                then further compressed. (thanks{' '}
                <a className="plink" href="https://imageoptim.com">
                  imgoptim
                </a>
                !)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
