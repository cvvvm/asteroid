import { ImgCover, Role, GalleryImgToggler } from '../../components/ProjectPages';

export default function CovidCampusComms() {
  var project = 'covid-campus-comms';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            title={'killing covid with signage'}
            columns={6}
            roles={'illustration & design'}
            contributors={'copy: campus communications team, CDC.gov'}
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
        <GalleryImgToggler
          textCol={4}
          invert
          galleryCol={6}
          vh={50}
          project={project}
          imgType={'webp'}
          galleries={[
            {
              title: 'posters',
              prefix: 'poster',
              images: ['1', '2', '3'],
            },
            {
              title: 'posts',
              prefix: 'post',
              images: ['1', '2', '3', '4'],
            },
            {
              title: 'text posts',
              prefix: 'post-text',
              images: ['1', '2', '3', '4', '5'],
            },
            {
              title: 'infographic',
              prefix: 'filter',
              images: ['1', '2', '3', '4'],
            },
          ]}
        >
          <h3>optimization:</h3>
          <p>
            the amount of assets & animations meant balancing intensely between how much
            was on screen, what moved, and what could be rasterized together, then further
            compressed.
          </p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
