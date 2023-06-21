import {
  ImgCover,
  Role,
  DeviceImgToggler,
  GalleryImgToggler,
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
              'Sponsored by the California Department of Parks & Recreation, my client from the Sonoma State University Anthropological Studies Center (ASC) needed to create an interactive digital exhibit showcasing the history of Jamison City, CA.'
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
        <GalleryImgToggler
          textCol={5}
          galleryCol={'f6'}
          colOrder={1}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'before',
              prefix: 'before',
              images: ['menu', 'people', 'world_map', 'town_map', 'things'],
            },
            {
              title: 'after',
              prefix: 'after',
              images: ['menu', 'people', 'world_map', 'town_map', 'things'],
            },
          ]}
        >
          <h3>form, function... name.</h3>
          <p>
            It always made sense what should drive the logo design: the words zig zag make
            the shape they describe...What's the word for a visual onomatopoeia?
          </p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
export default JamisonExhibit;
