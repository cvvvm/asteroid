import { ImgCover, Role, GalleryImgToggler } from '../../components/ProjectPages';

export default function CovidCampusComms() {
  var project = 'covid-campus-comms';
  return (
    <>
      <ImgCover project={project} imgType={'webp'}>
        <div className="row-f10">
          <Role
            title={"covid can't read."}
            columns={6}
            roles={'illustration & design'}
            contributors={'copy: campus communications team, CDC.gov'}
          >
            <p>
              but the employees at SSU can. with support from the communications team, we
              designed materials to help inform & reassure students, staff, & community
              members over the course of the pandemic.
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
