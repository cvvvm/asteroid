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
              'Sponsored by the California Department of Parks & Recreation, my client from Sonoma State University Anthropological Studies Center (ASC) needed to create an interactive digital exhibit showcasing the history of now lost Jamison City, CA.'
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
          <div className="col-6 outline invert">
            <h2>a really powerful point.</h2>
            <p>
              Just one catch - with no internet at the installation & no budget for
              additional software - the exhibit's hundreds of screens needed to run in
              Microsoft Powerpoint.
            </p>
            <p>
              Very doable, but <i>shockingly</i> not what the software is best at.
            </p>
          </div>
          <VideoGallery
            columns={9}
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
        </div>
        <GalleryImgToggler
          textCol={6}
          invert
          textOrder={0}
          galleryCol={10}
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
          <h3>Optimization:</h3>
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
