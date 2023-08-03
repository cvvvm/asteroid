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
              images: ['1', '2', '3', '4'],
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
          <h2>seawolves keep seawolves safe.</h2>
          <p>
            messaging was designed to be as simple & direct as possible. on-campus safety
            procedures adapted to the state/local guidelines on keeping people heathy.
          </p>
        </GalleryImgToggler>
      </div>
    </>
  );
}
