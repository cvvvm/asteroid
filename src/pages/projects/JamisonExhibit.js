import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler,
  VideoGallery,
} from '../../components/ProjectPages';

function JamisonExhibit() {
  var project = 'jamison_exhibit';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            freelance
            project={'Jamison City Exhibit'}
            intro={
              'sponsored by the California Department of Parks & Recreation, my client from Sonoma State University Anthropological Studies Center (ASC) needed to create an interactive digital exhibit showcasing the history of now lost Jamison City, CA.'
            }
            columns={8}
            roles={
              'UX/UI, visual design, front-end code, wireframing, scheduling/client intake & integration, & project management.'
            }
            contributors={'Zig Zag Tattoo provided copy & photos.'}
          />
        </div>
      </ImgCover>
      <div className="container">
        <div className="row-f10 vh-80">
          <div className="col-9 outline invert ">
            <h2>a really important point.</h2>
            <p>
              just one catch - with no internet at the installation & no budget for
              additional software - the exhibit's hundreds of screens needed to run
              exclusively in Microsoft Powerpoint.
            </p>
          </div>
          <VideoGallery
            columns={12}
            project={project}
            videoType={'mp4'}
            galleries={[
              {
                title: 'animations',
                prefix: project,
                images: ['fire-start', 'map-world-us-transition'],
              },
            ]}
          />
          <div className="row-f10 jc-evenly">
            <div className="col-4">
              <h4>visuals:</h4>
              <p>
                i crafted the visual style to combine modern interface elements with the
                hand-crafted, primarily wooden adornments contemporary to jamison city.
                every object was made to feel like it occupied physical space on the
                screen.
              </p>
              <p className="note">
                image containers became wooden panels with nails, buttons & menu items
                displayed their text over wooden signage, ropes connected grouped menu
                items.
              </p>
            </div>
            <div className="col-4">
              <h4>experience</h4>
              <p>
                i built hundreds of slides coordinated between dozens of branching user
                paths. designing & coordinating interactive maps, information pop-ups,
                timelines, a quiz.
              </p>
              <p className="note">
                the exhibit could be navigated by 'forward/back' buttons, each slide
                contained other paths. each interaction was thoroughly tested to reduce
                the exhibit's chances of breaking.
              </p>
            </div>
            <div className="col-4">
              <h4>animation:</h4>
              <p>
                it was important to me that the animation reinforced the physicality of
                the visual style. objects don't fade away, but slide around like items on
                a table.
              </p>
              <p className="note">
                Powerpoint's built-in smart transitions made general animations feasible
                without manual timelines for every interactive object.
              </p>
            </div>
          </div>
        </div>
        <GalleryImgToggler
          textCol={5}
          invert
          textOrder={0}
          galleryCol={'f6'}
          vh={80}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'final',
              prefix: 'after',
              images: ['menu', 'people', 'world_map', 'town_map', 'things'],
            },
            {
              title: 'wireframe',
              prefix: 'before',
              images: ['menu', 'people', 'world_map', 'town_map', 'things'],
            },
          ]}
        >
          <h4>optimization:</h4>
          <p>
            The large amount of assets & animations meant balancing intensely between how
            much was on screen, what moved, and what could be rasterized together, then
            further compressed. (thanks <a href="https://imageoptim.com">imgoptim</a>!)
          </p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
export default JamisonExhibit;
